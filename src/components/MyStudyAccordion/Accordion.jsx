import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
<<<<<<< HEAD
import { useHistory, useLocation } from "react-router-dom";

// modules
import { actionCreators as mypageActions } from "../../redux/modules/mypage";


// mui
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
=======
import { useHistory } from "react-router-dom";
=======
import { useHistory, useLocation } from "react-router-dom";
>>>>>>> d002026 (page(Main): 각종 사항 수정 후 커밋)

// modules
import { actionCreators as mypageActions } from "../../redux/modules/mypage";


// mui
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
<<<<<<< HEAD
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
>>>>>>> d002026 (page(Main): 각종 사항 수정 후 커밋)

// styled components
import { Eltext, Elbutton } from "../../elements";

// components
import AccordionSummaryComponent from "./AccordionSummaryComponents";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import ModalStudy from "../Modal/ModalStudy";
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
>>>>>>> d002026 (page(Main): 각종 사항 수정 후 커밋)

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
<<<<<<< HEAD
<<<<<<< HEAD
  const location = useLocation();
  
  const studyNum = location.search ? location.search.substring(7) : '';
=======
  

  // const [open, setOpen] = useState(false);

<<<<<<< HEAD
  const hadleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
  // const hadleModalOpen = () => setOpen(true);
  // const handleModalClose = () => setOpen(false);
>>>>>>> afcd110 (page(Main): 수정 사항 배포 확인차 커밋)
=======
  const location = useLocation();
  
  const studyNum = location.search ? location.search.substring(7) : '';
>>>>>>> d002026 (page(Main): 각종 사항 수정 후 커밋)

  // redux store
  const __accordionData = useSelector((state) => state.mypage.myStudy);
  const __isJoinedCrew = useSelector((state) => state.crew.isJoinedCrew);
  const __isJoinedStudy = useSelector((state) => state.study.isStudyJoined);
  const __newStudyProfileUser = useSelector(
    (state) => state.study.newStudyProfileUser
  );
<<<<<<< HEAD
<<<<<<< HEAD
  
  // variables
  const [expanded, setExpanded] = useState(Number(studyNum));
=======

  console.log(__accordionData)
 
=======
  
>>>>>>> d002026 (page(Main): 각종 사항 수정 후 커밋)
  // variables
<<<<<<< HEAD
  const fuck = useSelector((state) => state);
  console.log(fuck)

<<<<<<< HEAD
  const [expanded, setExpanded] = useState("");
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
=======
>>>>>>> daab47f (page(Main): 수정 후 커밋)
  const [expanded, setExpanded] = useState(Number(studyNum));
>>>>>>> d002026 (page(Main): 각종 사항 수정 후 커밋)

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
<<<<<<< HEAD
<<<<<<< HEAD
  console.log(props);

  if (__accordionData === "") return <></>;
  
=======

  if (__accordionData === "") return <></>;
  
  console.log(__accordionData);
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
  console.log(props);

  if (__accordionData === "") return <></>;
  
>>>>>>> daab47f (page(Main): 수정 후 커밋)

    return (
      <>
        {__accordionData.length ? (
          __accordionData.map((cur, idx) => {
            return (
<<<<<<< HEAD
<<<<<<< HEAD
              
=======
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
              
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
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
<<<<<<< HEAD
<<<<<<< HEAD
              
=======
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
              
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
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
<<<<<<< HEAD
<<<<<<< HEAD
  border: 5px solid black;
=======
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
  border: 5px solid black;
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
  color: var(--gray);
`;

const GoSearchBtn = styledComp(Elbutton)`
  width: 147px;
  height: 35px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;