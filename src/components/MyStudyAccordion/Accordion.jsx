import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// modules
import { actionCreators as accordionActions } from "../../redux/modules/accordion";
import { actionCreators as crewActions } from "../../redux/modules/crew";
import { actionCreators as mypageActions } from "../../redux/modules/mypage";
import { mainActions } from "../../redux/modules/main";

// mui
import { styled } from "@mui/material/styles";
import { Modal, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

// styled components
import { Eltext, Elbutton } from "../../elements";

// components
import AccordionSummaryComponent from "./AccordionSummaryComponents";
import ModalStudy from "../Modal/ModalStudy";

// styled components
import styledComp from "styled-components";

// theme
import flex from "../../themes/flex";
import AccordionDetailsComponent from "./AccordionDetailsComponent";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={3} square {...props} />
))(({ theme }) => ({
  marginBottom: "5px",
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const MyStudyAccordions = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  

  const [open, setOpen] = useState(false);

  const hadleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  // redux store
  const __accordionData = useSelector((state) => state.mypage.myStudy);
  const __isJoinedCrew = useSelector((state) => state.crew.isJoinedCrew);
  const __isJoinedStudy = useSelector((state) => state.study.isStudyJoined);
  const __newStudyProfileUser = useSelector(
    (state) => state.study.newStudyProfileUser
  );

  console.log(__accordionData)
 
  // variables
  const userId = localStorage.getItem("userId");

  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    dispatch(mypageActions.getMyStudyDB());
    return () => {
      dispatch(mypageActions.reset_mystudy());
    };
  }, [
    dispatch,
    __isJoinedStudy,
    __newStudyProfileUser,
  ]);

  if (__accordionData === "") return <></>;
  
  console.log(__accordionData);

    return (
      <>
        {__accordionData.length ? (
          __accordionData.map((cur, idx) => {
            return (
              <Accordion
                expanded={expanded === __accordionData[idx].studyId}
                onChange={handleChange(__accordionData[idx].studyId)}
                key={idx}
              >
                <AccordionSummaryComponent
                  props={cur}
                  isJoinedCrew={__isJoinedCrew}
                />

                <AccordionDetailsComponent
                  props={cur}
                  isJoinedCrew={__isJoinedCrew}
                />
              </Accordion>
            );
          })
        ) : (
          <StudyNoneNotice type="sub_1">
          내가 만든 스터디가 없습니다.
          <br /> 스터디를 위해 모임을 찾아 볼까요?
          <br />
          <GoSearchBtn shape="brown-outline" onClick={() => {history.push("/")
          }}>
            모임 찾아보기
          </GoSearchBtn>
        </StudyNoneNotice>
        )}
      </>
    );
};

export default MyStudyAccordions;

const StudyNoneNotice = styledComp(Eltext)`
  ${flex("center", "center", false)}
  text-align: center;
  width: 100%;
  height: 450px;
  line-height: 50px;
  margin: auto;
  color: var(--gray);
`;

const GoSearchBtn = styledComp(Elbutton)`
  width: 147px;
  height: 35px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;