import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
<<<<<<< HEAD
import { useParams, useHistory, useLocation } from "react-router-dom";

// modules
import { actionCreators as mypageActions } from "../../redux/modules/mypage";


// mui
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";

=======
import { useParams, useHistory } from "react-router-dom";
=======
import { useParams, useHistory, useLocation } from "react-router-dom";
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

const MyJoinedAccordions = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
<<<<<<< HEAD
<<<<<<< HEAD
  const location = useLocation();
  console.log(location.state);

  // const [open, setOpen] = useState(false);
  const [checkState, setCheckState] = useState(false);
  // const hadleModalOpen = () => setOpen(true);
  // const handleModalClose = () => setOpen(false);
=======
  
=======
  const location = useLocation();
  console.log(location.state);
>>>>>>> d002026 (page(Main): 각종 사항 수정 후 커밋)

<<<<<<< HEAD
  const [open, setOpen] = useState(false);

  const hadleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
  // const [open, setOpen] = useState(false);
  const [checkState, setCheckState] = useState(false);
  // const hadleModalOpen = () => setOpen(true);
  // const handleModalClose = () => setOpen(false);
>>>>>>> afcd110 (page(Main): 수정 사항 배포 확인차 커밋)

  // redux store
  const __accordionData = useSelector((state) => state.mypage.myJoinedStudy);
  const __isJoinedCrew = useSelector((state) => state.crew.isJoinedCrew);
  const __isJoinedStudy = useSelector((state) => state.study.isStudyJoined);
  const __newStudyProfileUser = useSelector(
    (state) => state.study.newStudyProfileUser
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const fuck = useSelector((state) => state.mypage.myJoinedStudy);
  console.log(fuck)
 
  // variables
  // const userId = localStorage.getItem("userId");

  
  const [expanded, setExpanded] = useState("");

  const [status, setStatus] = useState(true);

=======
=======
  const myJoinedStudy = useSelector((state) => state.mypage.myStudy);
>>>>>>> afcd110 (page(Main): 수정 사항 배포 확인차 커밋)

  console.log(myJoinedStudy)
=======
  const fuck = useSelector((state) => state.mypage.myJoinedStudy);
  console.log(fuck)
>>>>>>> d002026 (page(Main): 각종 사항 수정 후 커밋)
 
  // variables
  // const userId = localStorage.getItem("userId");

  
  const [expanded, setExpanded] = useState("");

<<<<<<< HEAD
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
  const [status, setStatus] = useState(true);

>>>>>>> d002026 (page(Main): 각종 사항 수정 후 커밋)
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    dispatch(mypageActions.getJoinedStudyDB());
    return () => {
<<<<<<< HEAD
<<<<<<< HEAD
      status === undefined ?
    setStatus(true) : setStatus(false);
=======
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
      status === undefined ?
    setStatus(true) : setStatus(false);
>>>>>>> d002026 (page(Main): 각종 사항 수정 후 커밋)
      dispatch(mypageActions.reset_joined_mystudy());
    };
  }, [
    dispatch,
    __isJoinedStudy,
    __newStudyProfileUser,
<<<<<<< HEAD
<<<<<<< HEAD
    checkState,
    status,
<<<<<<< HEAD
=======
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
    checkState,
>>>>>>> afcd110 (page(Main): 수정 사항 배포 확인차 커밋)
=======
>>>>>>> d002026 (page(Main): 각종 사항 수정 후 커밋)
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
<<<<<<< HEAD
<<<<<<< HEAD
                  checkState={checkState}
                  setCheckState={setCheckState}
=======
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
                  checkState={checkState}
                  setCheckState={setCheckState}
>>>>>>> afcd110 (page(Main): 수정 사항 배포 확인차 커밋)
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
            내가 참여한 스터디가 없습니다.
            <br /> 스터디에 참가하러 가 볼까요?
            <br />
<<<<<<< HEAD
<<<<<<< HEAD
            <GoSearchBtn shape="brown-outline" onClick={() => {history.push("/")
            }}>
              모임 찾아보기
=======
            <GoSearchBtn shape="brown-outline" onClick={() => {mainActions.getSearchCrew("", dispatch, history)
            }}>
              스터디 찾아보기
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
            <GoSearchBtn shape="brown-outline" onClick={() => {history.push("/")
            }}>
              모임 찾아보기
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
            </GoSearchBtn>
          </StudyNoneNotice>
        )}
      </>
    );
};

export default MyJoinedAccordions;

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