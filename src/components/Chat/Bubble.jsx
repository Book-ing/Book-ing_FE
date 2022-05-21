import React from "react";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";

// elem & theme
import flex from "../../themes/flex";
import { Eltext } from "../../elements";

// mui
import { Avatar } from "@mui/material";

const Bubble = ({ message, type }) => {
  // console.log(message, type);
  if (type === "my") {
    return (
      <MyChat>
        <MyBubble>
          <MessageText type="body_4" color="white">
            {message.message}
          </MessageText>
        </MyBubble>
      </MyChat>
    );
  }
  if (type === "common") {
    return (
      <CommonChat>
        <Left>
          <Avatar src={message.profileImage} size={30} />
        </Left>

        <Right>
          <MessageInfo>
            <Name>{message.username}</Name>
          </MessageInfo>
          <CommonBubble>{message.message}</CommonBubble>
        </Right>
      </CommonChat>
    );
  }
};

const ChatStyle = css`
  max-width: 100%;
  margin-top: 10px;
`;

const MyChat = styled.div`
  ${ChatStyle};
  ${flex("start", "end", false)};
`;

const CommonChat = styled.div`
  ${ChatStyle};
  ${flex("start", "start", "false")};
`;

const BubbleStyle = css`
  font-weight: 12px;
  max-width: 100%;
  padding: 8px 10px;
  border-radius: 4px;
  white-space: pre-wrap;
`;

const MyBubble = styled.div`
  ${BubbleStyle};
  color: var(--white);
  background-color: var(--main);
`;

const MessageText = styled(Eltext)``;

const CommonBubble = styled.div`
  ${BubbleStyle};
  color: var(--black);
  background-color: var(--line);
`;

const MessageInfo = styled.div`
  ${flex()};
`;

const Left = styled.div`
  margin-right: 10px;
`;

const Right = styled.div`
  ${flex("start", "start", false)};
  margin-top: -2px;
`;

const Name = styled.div`
  margin-right: 4px;
  color: var(--black);
  font-size: 1.1rem;
  line-height: 1.8rem;
`;

// const Date = styled.div`
//   font-size: 1.1rem;
//   line-height: 1.8rem;
//   color: var(--grey);
// `;

export default Bubble;
