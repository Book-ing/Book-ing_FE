<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> be3fbe5 (feature(webRTC): webRTC 기능 추가중 배포 테스트 커밋입니다)
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configStore";
import { useLocation } from "react-router-dom";
<<<<<<< HEAD

// components
import VideoHeader from "../components/Video/VideoHeader";
import styled from "styled-components";
import Video from "../components/Video/Video";

// mui
import {
  BsFillMicFill,
  BsFillMicMuteFill,
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
} from "react-icons/bs";
import { MdScreenShare, MdStopScreenShare } from "react-icons/md";
import flex from "../themes/flex";

const Room = (props) => {
  const location = useLocation();
  const studyData = props.location.state.studyData;
  // console.log("디테일");
  const nickname = localStorage.getItem("username");
  const [soundOn, setSoundOn] = useState(false);
  const [videoOn, setVideoOn] = useState(false);
  const [shared, setShared] = useState(false);
  const [numberOfUsers, setNumberOfUsers] = React.useState("1/10");

  const childRef = React.useRef();
  const changeNumberOfUsers = (text) => {
    setNumberOfUsers(text);
  };

  const setSound = () => {
    setSoundOn(!soundOn);
    childRef.current.handleMuteClick();
  };

  const setVideo = () => {
    setVideoOn(!videoOn);
    childRef.current.handleCameraClick();
  };

  const setShareScreen = () => {
    setShared(!shared);
    childRef.current.shareScreen();
  };

  return (
    <RoomWrap>
      <VideoHeader
        numberOfUsers={numberOfUsers}
        meetingId={location.state.meetingId}
        studyData={studyData}
      />
      <DIV>
        <VideoWrap>
          <Video
            nickname={nickname}
            changeNumberOfUsers={changeNumberOfUsers}
            ref={childRef}
            meetingId={location.state.meetingId}
          ></Video>
          {/* <SharedVideoSection id="sharedScreenSection"></SharedVideoSection> */}
        </VideoWrap>

        <SoundBtn>
          <BtnWrap>
            <Btn onClick={setSound}>
              {soundOn ? (
                <>
                  <BsFillMicMuteFill style={{ color: "#A0001A" }} />
                </>
              ) : (
                <>
                  <BsFillMicFill />
                </>
              )}
            </Btn>
            <Btn onClick={setVideo}>
              {videoOn ? (
                <>
                  <BsFillCameraVideoOffFill style={{ color: "#A0001A" }} />
                </>
              ) : (
                <>
                  <BsFillCameraVideoFill />
                </>
              )}
            </Btn>
            <Btn onClick={setShareScreen}>
              {shared ? (
                <>
                  <MdScreenShare />
                </>
              ) : (
                <>
                  <MdStopScreenShare style={{ color: "#A0001A" }} />
                </>
              )}
            </Btn>
          </BtnWrap>
        </SoundBtn>
      </DIV>
    </RoomWrap>
  );
};
const RoomWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fbf9f9;
`;

const DIV = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 100px;
  margin: auto;
  ${flex("center", "center", false)}
  position: relative;
  @media screen and (max-width: 1440px) {
    padding-top: 56px;
  }
`;

const VideoWrap = styled.div`
  width: 100%;
  height: 100%;
  ${flex("center", "center", false)}
  position: relative;
  margin-top: 10px;
  box-sizing: border-box;
  overflow-y: auto;

  @media screen and (max-width: 1440px) {
    width: 980px;
    height: 605px;
    margin: auto;
  }
`;

// const SharedVideoSection = styled.div`
//   width: 100%;
//   height: 80%;
//   padding: 10px;
//   border-radius: 10px;
//   border: 1px solid #c9998d;
//   overflow-x: auto;
//   .shareVideo {
//     width: 960px;
//     height: 540px;
//     border: 2px solid var(--point);
//   }
// `;

const SoundBtn = styled.div`
  ${flex("end")}
  width: 80%;
  position: relative;
  margin-bottom: 20px;
  @media screen and (max-width: 1440px) {
    width: 758px;
    margin: -114px 0px 0px 54px;
  }
  @media screen and (max-width: 1194px) {
    width: 758px;
    margin: -140px 0px 0px 54px;
  }
`;

const BtnWrap = styled.div`
  ${flex("between", "center")}
`;

const Btn = styled.div`
  ${flex}
  width: 45px;
  height: 45px;
  margin: 5px;
  color: var(--white);
  font-size: 20px;
  border-radius: 50%;
  background-color: #c9998d;
  cursor: pointer;
`;

export default React.memo(Room);
=======
import React from "react";
=======
>>>>>>> be3fbe5 (feature(webRTC): webRTC 기능 추가중 배포 테스트 커밋입니다)

// components
import VideoHeader from "../components/Video/VideoHeader";
import styled from "styled-components";
import Video from "../components/Video/Video";

// mui
import {
  BsFillMicFill,
  BsFillMicMuteFill,
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
} from "react-icons/bs";
import { MdScreenShare, MdStopScreenShare } from "react-icons/md";
import flex from "../themes/flex";

const Room = (props) => {
  const location = useLocation();
  // console.log("디테일");
  const nickname = localStorage.getItem("username");
  const [soundOn, setSoundOn] = useState(false);
  const [videoOn, setVideoOn] = useState(false);
  const [shared, setShared] = useState(false);
  const [numberOfUsers, setNumberOfUsers] = React.useState("1/10");

  const childRef = React.useRef();
  const changeNumberOfUsers = (text) => {
    setNumberOfUsers(text);
  };

  const setSound = () => {
    setSoundOn(!soundOn);
    childRef.current.handleMuteClick();
  };

  const setVideo = () => {
    setVideoOn(!videoOn);
    childRef.current.handleCameraClick();
  };

  const setShareScreen = () => {
    setShared(!shared);
    childRef.current.shareScreen();
  };

  return (
    <RoomWrap>
      <VideoHeader
        numberOfUsers={numberOfUsers}
        meetingId={location.state.meetingId}
      />
      <DIV>
        <VideoWrap>
          <Video
            nickname={nickname}
            changeNumberOfUsers={changeNumberOfUsers}
            ref={childRef}
            meetingId={location.state.meetingId}
          ></Video>
          <SharedVideoSection id="sharedScreenSection"></SharedVideoSection>
        </VideoWrap>

        <SoundBtn>
          <BtnWrap>
            <Btn onClick={setSound}>
              {soundOn ? (
                <>
                  <BsFillMicFill />
                </>
              ) : (
                <>
                  <BsFillMicMuteFill style={{ color: "#A0001A" }} />
                </>
              )}
            </Btn>
            <Btn onClick={setVideo}>
              {videoOn ? (
                <>
                  <BsFillCameraVideoFill />
                </>
              ) : (
                <>
                  <BsFillCameraVideoOffFill style={{ color: "#A0001A" }} />
                </>
              )}
            </Btn>
            <Btn onClick={setShareScreen}>
              {shared ? (
                <>
                  <MdStopScreenShare style={{ color: "#A0001A" }} />
                </>
              ) : (
                <>
                  <MdScreenShare />
                </>
              )}
            </Btn>
          </BtnWrap>
        </SoundBtn>
      </DIV>
    </RoomWrap>
  );
};
<<<<<<< HEAD

<<<<<<< HEAD
export default Room;
>>>>>>> 3240a35 (fix(accordion): study type에 따른 조건부 렌더링 추가)
=======
// const BubbleWrap = styled.div`
//   z-index: 50;
//   width: 245px;
//   height: 40px;
//   color: #f8f9fa;
//   background-color: #0028fa;
//   border-radius: 4px;
//   display: inline-flex;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   bottom: 55px;
//   left: 35px;
//   z-index: 4;
//   :after {
//     border-top: 10px solid #0028fa;
//     border-left: 10px solid transparent;
//     border-right: 10px solid transparent;
//     border-bottom: 0px solid;
//     content: "";
//     position: absolute;
//     bottom: -9px;
//     left: 20px;
//   }
// `;
=======
const RoomWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fbf9f9;
`;
>>>>>>> 717697e (view(webRTC): camchat room view 1차 완성 커밋입니다.)

const DIV = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 100px;
  margin: auto;
  ${flex("center", "center", false)}
  position: relative;
  @media screen and (max-width: 1440px) {
    padding-top: 56px;
  }
`;

const VideoWrap = styled.div`
  width: 80%;
  height: 100%;
  ${flex("evenly", "start", false)}
  position: relative;
  margin-top: 10px;
  box-sizing: border-box;

  @media screen and (max-width: 1440px) {
    width: 980px;
    height: 605px;
    margin: auto;
  }
`;

const SharedVideoSection = styled.div`
  width: 100%;
  height: 80%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #c9998d;
  overflow-x: auto;
  .shareVideo {
    width: 960px;
    height: 540px;
    border: 2px solid var(--point);
  }
`;

const SoundBtn = styled.div`
  ${flex("end")}
  width: 80%;
  position: relative;
  margin-bottom: 20px;
  @media screen and (max-width: 1440px) {
    width: 758px;
    margin: -114px 0px 0px 54px;
  }
  @media screen and (max-width: 1194px) {
    width: 758px;
    margin: -140px 0px 0px 54px;
  }
`;

const BtnWrap = styled.div`
  ${flex("between", "center")}
`;

const Btn = styled.div`
  ${flex}
  width: 45px;
  height: 45px;
  margin: 5px;
  color: var(--white);
  font-size: 20px;
  border-radius: 50%;
  background-color: #c9998d;
  cursor: pointer;
`;

export default React.memo(Room);
>>>>>>> be3fbe5 (feature(webRTC): webRTC 기능 추가중 배포 테스트 커밋입니다)
