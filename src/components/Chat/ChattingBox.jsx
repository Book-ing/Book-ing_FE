// import React, { useEffect, useState, useCallback } from "react";
// import { useSelector } from "react-redux";

// // socket.io client
// import io from "socket.io-client";

// // mui
// import { Avatar } from "@mui/material";

// // styled components
// import styled from "styled-components";
// import { Elbutton, Eltext } from "../../elements";
// import flex from "../../themes/flex";

// const ChattingBox = (props) => {
//   // variables
//   const meetingId = props.meetingId;
//   const userId = localStorage.getItem("userId");

//   const [chatArr, setChatArr] = useState([]);
//   const [chat, setChat] = useState({ meetingId: "", userId: "", message: "" });
//   // const socket = io.connect("https://sparta-hs.shop/");

//   useEffect(() => {
//     socket.emit("joinMeetingRoom", meetingId, userId);
//     return () => {
//       socket.emit("leaveMeetingRoom", meetingId, userId);
//     };
//   }, []);

//   useEffect(() => {
//     socket.on("chat message", (message) => {
//       console.log(message);
//       setChatArr((chatArr) => chatArr.concat(message));
//     }); //receive message이벤트에 대한 콜백을 등록해줌
//   }, []);

//   const handleSubmitMessage = useCallback(
//     (e) => {
//       e.preventDefault();
//       socket.emit("chat message", {
//         meetingId: meetingId,
//         userId: userId,
//         message: chat.message,
//       });
//       //버튼을 클릭했을 때 send message이벤트 발생
//     },
//     [chat]
//   );

//   const changeMessage = useCallback(
//     (e) => {
//       setChat({ message: e.target.value });
//     },
//     [chat]
//   );

//   return (
//     <ChattingWrap>
//       <ChatSection>
//         {chatArr.map((cur, idx) => (
//           <EachChat key={idx}>
//             <Avatar src={cur} />
//             <ChatUserName type="sub_2_bold">{cur}</ChatUserName>
//             <ChatLog type="sub_2">{cur}</ChatLog>
//           </EachChat>
//         ))}
//       </ChatSection>
//       <MessageSection onSubmit={handleSubmitMessage}>
//         <MessageInput
//           placeholder="메시지를 입력해주세요."
//           onChange={changeMessage}
//         ></MessageInput>
//         <SubmitBtn shape="brown-fill">보내기</SubmitBtn>
//       </MessageSection>
//     </ChattingWrap>
//   );
// };

// export default ChattingBox;

// const ChattingWrap = styled.div`
//   position: relative;
//   ${flex("center", "center", false)}
//   width: 100%;
//   height: 100%;
//   border: 1px solid var(--point);
//   background-color: #fff;
// `;

// const ChatSection = styled.div`
//   ${flex("start", "center", false)}
//   width: 95%;
//   height: 90%;
//   margin-bottom: 50px;
//   padding-bottom: 10px;
// `;

// const EachChat = styled.div`
//   ${flex("start", "center")}
//   width: 100%;
//   height: 40px;
//   border: 1px solid red;
// `;

// const ChatUserName = styled(Eltext)`
//   margin-left: 10px;
// `;

// const ChatLog = styled(Eltext)`
//   margin-left: 10px;
// `;

// const MessageSection = styled.form`
//   position: absolute;
//   ${flex("evenly")}
//   width: 100%;
//   height: 40px;
//   bottom: 10px;
// `;

// const MessageInput = styled.input`
//   width: 70%;
//   height: 100%;
//   padding-left: 10px;
//   border: 1px solid var(--point);
// `;

// const SubmitBtn = styled(Elbutton)`
//   width: 20%;
//   height: 100%;
// `;
