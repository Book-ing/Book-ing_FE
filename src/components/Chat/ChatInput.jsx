import React, { useRef, useState, useCallback } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// component & elem
import flex from "../../themes/flex";
import { body_3 } from "../../themes/textStyle";

// socket
import { sendMessage } from "../../shared/useSocket";

const ChatInput = () => {
  let grabUrl = new URL(window.location.href);
  console.log(grabUrl);
  const newGrabUrl = grabUrl.pathname.split("/");
  console.log(newGrabUrl[1]);
  const { meetingId } = useParams();
  const userId = localStorage.getItem("userId");

  const inputRef = useRef();

  const [text, setText] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!text.trim()) return;
      sendMessage(meetingId, userId, text, newGrabUrl[1]);
      setText("");
    },
    [meetingId, userId, text]
  );

  return (
    <InputBox onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="메세지를 입력하세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
        ref={inputRef}
      />
    </InputBox>
  );
};

const InputBox = styled.form`
  ${flex("between", "center")};
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 42px;
  padding: 0 4px;
  padding-bottom: 1px;
  background-color: var(--white);
  border: 1px solid var(--point);
  border-bottom: none;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const Input = styled.input`
  ${body_3};
  flex-grow: 1;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  color: var(--black);
  &::placeholder {
    ${body_3};
    color: var(--gray);
  }
`;

export default ChatInput;
