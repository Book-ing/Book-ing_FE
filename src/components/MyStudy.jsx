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
                  isJoinedCrew={__isJoinedCrew}>

                </MyStudyAccordions>
              </AccordionSection>



            </MyStudyItem>
          </MyStudyTopBox>
          <MyStudyBottomBox>
            <TitleText type="sub_1_bold">참여한 스터디</TitleText>
            <JoinedItem>



              <AccordionSection>
                <MyJoinedAccordions 
                  isJoinedCrew={__isJoinedCrew}>

                </MyJoinedAccordions>
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
  ${flex("center", "start", false)}
  width: 100%;
  height: 100%;
`;

const MyStudyBox = styled.div`
  ${flex("center", "start", false)}
  width: 930px;
  margin-left: 50px;
`;

const TitleText = styled(Eltext)`
  font-size: 24px;
  color: var(--point);
  margin-bottom: 18px;
`;

const MyStudyTopBox = styled.div`
  ${flex("center", "start", false)}
  width: 100%;
  margin-bottom: 52px;
`;

const MyStudyItem = styled.div`
  width: 100%;
  max-height: 500px;
  overflow-y: scroll;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
`;

const MyStudyBottomBox = styled.div`
  ${flex("center", "start", false)}
  width: 100%;
`;

const JoinedItem = styled.div`
  width: 100%;
  max-height: 500px;
  overflow-y: scroll;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
`;

const AccordionSection = styled.div`
  width: 100%;
  margin: auto;
`;
