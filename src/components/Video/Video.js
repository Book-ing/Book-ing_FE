import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { history } from "../../redux/configStore";
import { useParams } from "react-router-dom";

//Style
import styled from "styled-components";

// theme
import flex from "../../themes/flex";

// img
import BookingKorLogo from "../../assets/bookingkorlogo.png";
import { cookies } from "../../shared/cookie";
import { Grid } from "@mui/material";

const Videoplayer = React.forwardRef((props, ref) => {
  const params = useParams();
  const studyId = params.studyId;
  const [muted, setMuted] = useState(false);
  const [cameraOff, setCameraOff] = useState(false);
  const [shareOff, setShareOff] = useState(false);
  const [Audio, setAudio] = useState([]);
  const [Video, setVideo] = useState([]);
  const [socketID, setSocketID] = useState("");

  const checkEnterStatus = useRef();
  const videoGrid = useRef();

  const changeNumberOfUsers = props.changeNumberOfUsers;
  const myvideo = useRef();
  const mystream = useRef();
  const testBtn = useRef();
  // const urlcopybox = useRef();
  let nickname = props.nickname;

  let myPeerConnection;
  let myStream;
  let pcObj = {};
  let peopleInRoom = 1;
  let screenStream;

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = io("https://moingxtwice.shop/", {
      cors: { origin: "*" },
    });
    setSocket(socket);

    //서버로부터 accept_join 받음
    socket.on(
      "joinStudyRoom",
      async (userObjArr, socketIdformserver, videoType) => {
        const length = userObjArr.length;
        //카메라, 마이크 가져오기
        await getMedia();
        setSocketID(socketIdformserver);
        changeNumberOfUsers(`${peopleInRoom} / 10`);

        if (length === 1) {
          return;
        }

        for (let i = 0; i < length - 1; i++) {
          //가장 최근 들어온 브라우저 제외
          try {
            const newPC = makeConnection(
              //RTCPeerconnection 생성
              userObjArr[i].socketId,
              userObjArr[i].nickname
            );
            const offer = await newPC.createOffer(); // 각 연결들에 대해 offer를 생성
            await newPC.setLocalDescription(offer);
            socket.emit("offer", offer, userObjArr[i].socketId, nickname); // offer를 보내는 사람의 socket id와 닉네임
          } catch (error) {
            console.log(error);
          }
        }
      }
    );

    socket.on("checkCurStatus", (object) => {
      checkEnterStatus.current = object;
    });

    // 두명이상이 들어올때부터 실행이 되는데, 누가 들어올 때마다 처음 사람빼고 실행
    socket.on("offer", async (offer, remoteSocketId, remoteNickname) => {
      try {
        const newPC = makeConnection(remoteSocketId, remoteNickname);
        await newPC.setRemoteDescription(offer);
        const answer = await newPC.createAnswer();
        await newPC.setLocalDescription(answer);
        socket.emit("answer", answer, remoteSocketId);
      } catch (error) {
        console.log(error);
      }
    });

    //방 만든 브라우저에서 일어나는 일 (참가한 방에서 보낸 answer을 받아 저장함.)
    socket.on("answer", async (answer, remoteSocketId) => {
      await pcObj[remoteSocketId].setRemoteDescription(answer);
    });

    socket.on("ice", async (ice, remoteSocketId) => {
      await pcObj[remoteSocketId].addIceCandidate(ice);
    });

    // 이후 참가한 방에 일어나는 일

    socket.on("reject_join", () => {
      // setReject(true);
      alert("정원이 초과되었습니다.");
      history.replace("/");
    });

    socket.on("exception", () => {
      peopleInRoom++;
      changeNumberOfUsers(`10 / 10`);
    });

    // 여긴 다른 사람들에게 띄우는 부분
    socket.on("screensaver", (remoteSocketId, boolean) => {
      const remoteDiv = document.getElementById(`${remoteSocketId}`);
      if (boolean) {
        const screensaver = document.createElement("div");
        screensaver.className = "screensaver";
        remoteDiv.appendChild(screensaver);
      } else {
        const screensaver = remoteDiv.querySelector(".screensaver");
        setTimeout(() => {
          remoteDiv.removeChild(screensaver);
        }, 100);
      }
    });

    socket.on("mic_check", (remoteSocketId, boolean) => {
      const remoteDiv = document.getElementById(`${remoteSocketId}`);
      const nickNameContainer = remoteDiv.querySelector(".nickNameContainer");
      if (boolean) {
        const muteIcon = document.createElement("div");
        muteIcon.className = "muteIcon";
        nickNameContainer.prepend(muteIcon);
      } else {
        const muteIcon = remoteDiv.querySelector(".muteIcon");
        nickNameContainer.removeChild(muteIcon);
      }
    });

    //내가 나갈때 다른 사람들에게 일어나는 일
    socket.on("leave_room", (leavedSocketId) => {
      removeVideo(leavedSocketId);
      peopleInRoom--;
      changeNumberOfUsers(`${peopleInRoom} / 10`);
    });

    //사용자의 stream 가져오는 함수
    async function getMedia(deviceId) {
      const initialConstraints = {
        audio: true,
        video: { facingMode: "user" },
      };

      try {
        myStream = await navigator.mediaDevices.getUserMedia(
          initialConstraints
        );
        addVideoStream(myvideo.current, myStream);
        mystream.current.append(myvideo.current);
        videoGrid.current.append(mystream.current);
        myvideo.current.muted = true;
        setAudio(myStream.getAudioTracks());
        setVideo(myStream.getVideoTracks());
      } catch (error) {
        console.log(error);
      }
    }

    // 영상 스트림을 DOM 비디오 엘리먼트에 넣어주는 함수
    async function addVideoStream(video, stream) {
      try {
        video.srcObject = stream;
        video.addEventListener("loadedmetadata", () => {
          video.play();
        });
      } catch (error) {
        console.log(error);
      }
    }

    function makeConnection(remoteSocketId, remoteNickname) {
      myPeerConnection = new RTCPeerConnection({
        iceServers: [
          { urls: "stun:stunserver.example.org" },
          {
            urls: "turn:52.79.93.143",
            username: "booking",
            credential: "booking1234",
          },
        ],
      });

      //2명 이상일 때만 실행 됨.

      myPeerConnection.addEventListener("icecandidate", (event) => {
        handleIce(event, remoteSocketId);
      });

      myPeerConnection.addEventListener("track", (data) => {
        handleAddStream(data, remoteSocketId, remoteNickname);
      });

      myStream
        .getTracks()
        .forEach((track) => myPeerConnection.addTrack(track, myStream));
      if (screenStream) {
        screenStream
          .getTracks()
          .forEach((track) => myPeerConnection.addTrack(track, screenStream));
      }

      // pcObj에 각 사용자와의 connection 정보를 저장함
      pcObj[remoteSocketId] = myPeerConnection;

      peopleInRoom++;

      changeNumberOfUsers(`${peopleInRoom} / 10`);
      return myPeerConnection;
    }

    function handleAddStream(data, remoteSocketId, remoteNickname) {
      const peerStream = data.streams[0];
      if (data.track.kind === "video") {
        paintPeerFace(peerStream, remoteSocketId, remoteNickname);
      }
    }

    async function paintPeerFace(peerStream, id, remoteNickname) {
      try {
        const videoGrid = document.querySelector("#video-grid");
        const video = document.createElement("video");
        const nickNameContainer = document.createElement("div");
        const peername = document.createElement("div");
        const div = document.createElement("div");
        div.id = id;
        video.autoplay = true;
        video.playsInline = true;
        video.srcObject = peerStream;
        peername.innerText = `${remoteNickname}`;
        peername.style.color = "white";
        nickNameContainer.appendChild(peername);
        div.appendChild(nickNameContainer);
        div.appendChild(video);
        video.className = "memberVideo";
        peername.className = "nickName";
        nickNameContainer.className = "nickNameContainer";
        div.className = "videoBox";
        videoGrid.appendChild(div);

        // 입장시 현재인원들의 카메라 및 음소거 상태 확인
        if (!checkEnterStatus.current[id]) {
          return;
        }
        if (checkEnterStatus.current[id].screensaver) {
          const screensaver = document.createElement("div");
          screensaver.className = "screensaver";
          div.appendChild(screensaver);
        }
        if (checkEnterStatus.current[id].muted) {
          const muteIcon = document.createElement("div");
          muteIcon.className = "muteIcon";
          nickNameContainer.prepend(muteIcon);
        }
      } catch (error) {
        console.log(error);
      }
    }

    function handleIce(event, remoteSocketId) {
      if (event.candidate) {
        socket.emit("ice", event.candidate, remoteSocketId);
      }
    }
    function LeaveRoom() {
      socket.disconnect();
      myStream.getTracks().forEach((track) => track.stop());
      // clearAllVideos();
    }
    return () => {
      LeaveRoom();
    };
  }, []);

  //페이지가 마운트되고 "join_room" Event 함수 실행 1
  useEffect(() => {
    if (socket == null) {
      return;
    }
    const name = document.getElementById("name");
    name.innerText = `${nickname}`;
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then(() => {
        socket.emit("joinRoom", studyId, nickname);
      })
      .catch(() => {
        window.alert("카메라 또는 마이크 장치를 확인 후 다시 입장해주세요");
        history.push(`/crew/${props.meetingId}`);
        window.location.reload();
      });
  }, [socket]);

  function removeVideo(leavedSocketId) {
    const streams = document.querySelector("#video-grid");
    const streamArr = streams.querySelectorAll("div");

    streamArr.forEach((streamElement) => {
      if (streamElement.id === leavedSocketId) {
        streams.removeChild(streamElement);
      }
    });
  }

  //////////////////////////////////////
  React.useImperativeHandle(ref, () => ({
    handleCameraClick: () => {
      Video.forEach((track) => (track.enabled = !track.enabled));
      if (cameraOff === false) {
        // 카메라 오프가 false이면 켜진상태
        setCameraOff(true);
        // 스크린 세이버 온 오프
        socket.emit("screensaver", studyId, socketID, true);
        let screensaver = document.querySelector("#myscreensaver");
        screensaver.style.display = "flex";
      } else if (cameraOff === true) {
        setCameraOff(false);
        let screensaver = document.querySelector("#myscreensaver");
        screensaver.style.display = "none";
        socket.emit("screensaver", studyId, socketID, false);
      }
    },
    handleMuteClick: () => {
      Audio.forEach((track) => (track.enabled = !track.enabled));
      const nickNameContainer = document.querySelector("#nickNameContainer");
      if (muted === false) {
        setMuted(true);
        const muteIcon = document.createElement("div");
        muteIcon.className = "muteIcon";
        nickNameContainer.prepend(muteIcon);
        socket.emit("mic_check", studyId, socketID, true);
      } else if (muted === true) {
        setMuted(false);
        const muteIcon = nickNameContainer.querySelector(".muteIcon");
        nickNameContainer.removeChild(muteIcon);
        socket.emit("mic_check", studyId, socketID, false);
      }
    },

    shareScreen: () => {
      const sharedScreenSection = document.getElementById(
        "sharedScreenSection"
      );
      if (shareOff === false) {
        setShareOff(true);
        const video = document.createElement("video");
        video.autoplay = true;
        video.playsInline = true;
        sharedScreenSection.appendChild(video);
        video.className = "shareVideo";
      } else if (shareOff === true) {
        setShareOff(false);
        const video = sharedScreenSection.querySelector(".shareVideo");
        sharedScreenSection.removeChild(video);
      }
    },
  }));

  return (
    <DIV>
      <MemberWrap ref={videoGrid} id="video-grid">
        <div ref={mystream} id="mystream" className="videoBox">
          <video
            ref={myvideo}
            autoPlay
            playsInline
            id="myvideo"
            className="memberVideo myVideo"
          ></video>
          <div id="nickNameContainer" className="nickNameContainer">
            <div id="name" className="nickName"></div>
          </div>
          <div
            id="myscreensaver"
            style={{ display: "none" }}
            className="screensaver"
          ></div>
        </div>
      </MemberWrap>
    </DIV>
  );
});

const DIV = styled.div`
  position: "relative";
  max-width: 100%;
  display: flex;
  flex-flow: wrap;
  text-align: center;
  padding: 5px;
  /* @media screen and (max-width: 1440px) {
    position: absolute;
    right: 0px;
    top: -76px;
  } */
`;

const MemberWrap = styled.div`
  display: flex;
  max-width: 100%;
  flex-flow: wrap;

  .memberVideo {
    margin: auto;
    min-width: 200px;
    width: 100%;
    min-height: 112px;
    height: 100%;
    border-radius: 8px;
    position: relative;
    object-fit: cover;
    /* @media screen and (max-width: 1440px) {
      width: 202px;
      height: 113px;
      margin: auto;
    } */
  }
  .nickNameContainer {
    display: flex;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    padding: 5px 8px;
    border-radius: 8px;
    z-index: 3;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.26px;
    align-items: center;
  }
  .videoBox {
    display: block;
    flex-grow: 1;
    min-width: 200px;
    max-width: 350px;
    margin: 10px; //화상채팅간 영상간격
    position: relative;
  }
  .myVideo {
    margin: auto;
    // 사파리
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
  .screensaver {
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    top: 0px;
  }
`;

export default React.memo(Videoplayer);
