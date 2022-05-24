import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionCreators as CrewActions } from "../redux/modules/crew";
import { actionCreators as userActions } from "../redux/modules/crew";

// mui
import { Popper, Box } from "@mui/material";

// styled components
import styled from "styled-components";

// components
import CrewInfoTopBox from "../components/CrewpageComponents/CrewInfoTopBox";
import CrewInfoBottomBox from "../components/CrewpageComponents/CrewInfoBottomBox";
import StudySection from "../components/CrewpageComponents/StudySection";
import Spinner from "../components/Spinner";
import ChattingBox from "../components/Chat/ChattingBox";

// themes
import flex from "../themes/flex";
import Chat from "../components/Chat/Chat";

const Crew = (props) => {
  const { meetingId } = useParams();
  const dispatch = useDispatch();

  // redux store
  const __crewInfo = useSelector((state) => state.crew.crewData);
  const __isJoinedCrew = useSelector((state) => state.crew.isJoinedCrew);
  const __newProfileUser = useSelector((state) => state.crew.newProfileUser);

  console.log(__crewInfo);

  useEffect(() => {
    dispatch(CrewActions.getCrewInfoDB(meetingId));
  }, [dispatch, meetingId, __isJoinedCrew, __newProfileUser]);

  // ==================== 민우님이 요청한 loginCheckDB ========================
  // React.useEffect(() => {
  //   dispatch(userActions.loginCheckDB());
  // }, []);
  // ==================== 민우님이 요청한 loginCheckDB ========================
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  if (__crewInfo === "") return <></>;

  return (
    <CrewWrap>
      <TopWrap>
        <CrewInfoTopBox __crewInfo={__crewInfo} />
        <CrewInfoBottomBox __crewInfo={__crewInfo} />
      </TopWrap>
      <BottomWrap>
        <StudySection crewInfo={__crewInfo} />
      </BottomWrap>
      <CrewChatOpenBtn
        aria-describedby={id}
        type="button"
        onClick={handleClick}
      >
        Chat
      </CrewChatOpenBtn>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <ChatWrap>
          {/* <ChattingBox meetingId={meetingId}></ChattingBox> */}
          <Chat />
        </ChatWrap>
      </Popper>
    </CrewWrap>
  );
};

export default Crew;

const CrewWrap = styled.div`
  ${flex("center", "center", false)}
  width: 100%;
  height: 100%;
  position: relative;
`;

const TopWrap = styled.div`
  ${flex("around", "start", false)}
  max-width: 1440px;
  width: 100%;
  height: 100%;
  min-height: 370px;
  padding: 0 85px;

  @media screen and (max-width: 1260px) {
    ${flex("start", "center", false)}
    min-height: 750px;
  }
`;

const BottomWrap = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
`;

const ChatWrap = styled.div`
  width: 350px;
  height: 600px;
  overflow: hidden;
  border: 1px solid var(--point);
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
`;

const CrewChatOpenBtn = styled.button`
  width: 100px;
  height: 50px;
  position: fixed;
  right: 50px;
  bottom: 50px;
  background-color: var(--point);
  color: #fff;
  border-radius: 30px;
`;
