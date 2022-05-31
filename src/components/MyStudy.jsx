import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as mypageActions } from "../redux/modules/mypage";

// elements
import { Eltext } from "../elements";

// components
import MyStudyAccordions from "./MyStudyAccordion/Accordion";
import MyJoinedAccordions from "./MyJoinedAccordion/Accordion";

// style
import styled from "styled-components";

// theme
import flex from "../themes/flex";
import { hiddenScroll } from "../themes/hiddenScroll";

const MyStudy = () => {
  const dispatch = useDispatch();

  // variables
  const userId = localStorage.getItem("userId");

  // redux store
  const __isJoinedCrew = useSelector((state) => state.crew.isJoinedCrew);

 
  return (
    <React.Fragment>
      <MyStudyWrap>
        <MyStudyBox>
          <MyStudyTopBox>
            <TitleText type="sub_1_bold">내가 만든 스터디</TitleText>
            <MyStudyItem>
              <AccordionSection>
                <MyStudyAccordions
                  isJoinedCrew={__isJoinedCrew}
                ></MyStudyAccordions>
              </AccordionSection>
            </MyStudyItem>
          </MyStudyTopBox>
          <MyStudyBottomBox>
            <TitleText type="sub_1_bold">참여한 스터디</TitleText>
            <JoinedItem>
              <AccordionSection>
                <MyJoinedAccordions
                  isJoinedCrew={__isJoinedCrew}
                ></MyJoinedAccordions>
              </AccordionSection>
            </JoinedItem>
          </MyStudyBottomBox>
        </MyStudyBox>
      </MyStudyWrap>
    </React.Fragment>
  );
};

export default MyStudy;

const MyStudyWrap = styled.div`
  ${flex("start", "start", false)}
  width: 100%;
  height: 100%;
  overflow: auto;
  /* ${hiddenScroll}; */
`;

const MyStudyBox = styled.div`
  ${flex("start", "start", false)}
  width: 100%;
  height: 100%;
  padding-left: 50px;
`;

const TitleText = styled(Eltext)`
  font-size: 24px;
  color: var(--point);
  margin-bottom: 18px;
`;

const MyStudyTopBox = styled.div`
  ${flex("center", "start", false)}
  width: 100%;
  margin: 30px 0 52px 0;
`;

const MyStudyItem = styled.div`
  width: 920px;
  max-height: 545px;
  overflow-y: auto;
  /* box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5); */
`;

const MyStudyBottomBox = styled.div`
  ${flex("center", "start", false)}
  width: 100%;
  margin-top: -30px;
`;

const JoinedItem = styled.div`
  width: 920px;
  max-height: 545px;
  overflow-y: auto;  
  /* box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5); */
`;

const AccordionSection = styled.div`
  width: 900px;
  margin: auto;
`;
