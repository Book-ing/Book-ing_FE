import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

// component
import ChatBox from "./ChatBox";
import ChatInput from "./ChatInput";

import {
  initiateSocket,
  disconnectSocket,
  getMessages,
  subscribeToChat,
} from "../../shared/useSocket";
import {
  addMessage,
  loadMessages,
  setSocket,
  resetSocket,
} from "../../redux/modules/chat";
import { useParams } from "react-router-dom";

const Chat = () => {
  const dispatch = useDispatch();
  const { meetingId } = useParams();
  const userId = localStorage.getItem("userId");
  const socket = useSelector((state) => state.chat.socket);

  useEffect(() => {
    if (!socket) {
      const setNewSocket = (socket) => dispatch(setSocket(socket));
      initiateSocket(setNewSocket, meetingId, userId);
      getMessages((err, data) => {
        if (err) console.log(err);
        dispatch(loadMessages(data));
      });
    }
  }, [dispatch, socket, meetingId, userId]);

  useEffect(() => {
    return () => {
      disconnectSocket();
      dispatch(resetSocket());
    };
  }, [dispatch]);

  useEffect(() => {
    subscribeToChat((err, data) => {
      if (err) console.log(err);
      dispatch(addMessage(data));
    });
  }, [dispatch]);

  return (
    <Container>
      <ChatBox />
      <ChatInput />
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export default Chat;
