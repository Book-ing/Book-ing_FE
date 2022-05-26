import io from "socket.io-client";

<<<<<<< HEAD
<<<<<<< HEAD
=======
const targetServer = "https://sparta-hs.shop/";

>>>>>>> 95a460a (feature(CrewChat): Crewpage Chat feature v1 done)
=======
>>>>>>> be3fbe5 (feature(webRTC): webRTC 기능 추가중 배포 테스트 커밋입니다)
let socket;

// 모임페이지에 들어올 때 소켓 연결
export const initiateSocket = (cb, meetingId, userId, newGrabUrl) => {
  socket = io.connect("https://sparta-hs.shop/");
  socket && cb(socket);
  socket.emit("joinRoom", meetingId, userId, newGrabUrl);
  // console.log("소켓연결!");
  // console.log(socket);
};
// 모임페이지에서 나갈 때 소켓 연결 끊음
export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    // console.log("연결끝");
  }
};
// DB에 저장된 이 방의 메시지 받기
export const getMessages = (cb) => {
  if (!socket) return;
  socket.on("getMessages", (message) => {
    return cb(null, message);
  });
};
// 채팅 구독하기(전역적 구독. 방마다 구독X. 방마다 보내지는건 서버가 할 일)
export const subscribeToChat = (cb) => {
  if (!socket) return;
  socket.on("chat message", (data) => {
    return cb(null, data);
  });
};
// 메시지 보내기
export const sendMessage = (meetingId, userId, message, newGrabUrl) => {
  if (socket) {
    socket.emit("chat message", meetingId, userId, message, newGrabUrl);
  }
};
// 방에 참여하기
export const joinRoom = (roomId, nickname, userId, roomName) => {
  if (socket && roomId && nickname && userId && roomName) {
    socket.emit("join", { roomId, userName: nickname, userId, roomName });
    // console.log("socket - join room");
  }
};
// 참여했던 방에서 나가기(단순 나가기)
export const leaveRoom = (roomId, nickname, userId) => {
  if (socket && roomId && nickname && userId) {
    socket.emit("leave", { roomId, userName: nickname, userId });
    socket.off("messages");
  }
  // console.log("socket - leave room");
};
