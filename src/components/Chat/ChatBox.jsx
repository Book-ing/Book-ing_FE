import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { hiddenScroll } from "../../themes/hiddenScroll";
import Bubble from "./Bubble";

const ChatBox = memo(() => {
  const [chatLength, setChatLength] = useState(0);

  // const user = useSelector((state) => state.user.user);
  const user = localStorage.getItem("userId");
  const chat = useSelector((state) => state.chat.messages);
  const scrollRef = useRef();

  const scrollToBottom = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  };

  const checkMine = useCallback(
    (messageUserId) =>
      parseInt(messageUserId) === parseInt(user) ? "my" : "common",
    [user]
  );

  useEffect(() => {
    scrollToBottom();
  }, [chatLength]);

  useEffect(() => {
    setChatLength(chat.length);
  }, [chat]);

  return (
    <Container ref={scrollRef}>
      {chat &&
        chat.length > 0 &&
        chat.map((cur, idx) => (
          <Bubble
            key={`${cur.userId} + ${idx}`}
            message={cur}
            type={checkMine(cur.userId)}
          />
        ))}
    </Container>
  );
});

const Container = styled.div`
  ${hiddenScroll};
  width: 100%;
  height: 90%;
  padding: 0 20px;
  overflow-y: auto;
`;

export default ChatBox;
