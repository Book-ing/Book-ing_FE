import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionCreators as CrewActions } from "../redux/modules/crew";

// styled components
import styled from "styled-components";

// components
import CrewInfoTopBox from "../components/CrewpageComponents/CrewInfoTopBox";
import CrewInfoBottomBox from "../components/CrewpageComponents/CrewInfoBottomBox";
import StudySection from "../components/CrewpageComponents/StudySection";
import Spinner from "../components/Spinner";

// themes
import flex from "../themes/flex";

const Crew = (props) => {
  const { meetingId } = useParams();
  const dispatch = useDispatch();

  const __crewInfo = useSelector((state) => state.crew.crewData);

  useEffect(() => {
    dispatch(CrewActions.getCrewInfoDB(meetingId));
  }, []);

  if (__crewInfo === "") return <></>;

  return (
    <CrewWrap>
      <TopWrap>
        <CrewInfoTopBox __crewInfo={__crewInfo} />
        <CrewInfoBottomBox __crewInfo={__crewInfo} />
      </TopWrap>
      <BottomWrap>
        <StudySection />
      </BottomWrap>
    </CrewWrap>
  );
};

export default Crew;

const CrewWrap = styled.div`
  ${flex("center", "center", false)}
  width: 100%;
  height: 100%;
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
