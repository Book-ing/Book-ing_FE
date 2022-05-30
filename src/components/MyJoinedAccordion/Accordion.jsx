import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, useLocation } from "react-router-dom";

// modules
import { actionCreators as mypageActions } from "../../redux/modules/mypage";

// mui
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";

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
  const location = useLocation();

  const [checkState, setCheckState] = useState(false);

  // redux store
  const __accordionData = useSelector((state) => state.mypage.myJoinedStudy);
  const __isJoinedCrew = useSelector((state) => state.crew.isJoinedCrew);
  const __isJoinedStudy = useSelector((state) => state.study.isStudyJoined);
  const __newStudyProfileUser = useSelector(
    (state) => state.study.newStudyProfileUser
  );

  const [expanded, setExpanded] = useState("");

  const [status, setStatus] = useState(true);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    dispatch(mypageActions.getJoinedStudyDB());
    return () => {
      status === undefined ? setStatus(true) : setStatus(false);
      dispatch(mypageActions.reset_joined_mystudy());
    };
  }, [dispatch, __isJoinedStudy, __newStudyProfileUser, checkState, status]);

  if (__accordionData === "") return <></>;

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
                checkState={checkState}
                setCheckState={setCheckState}
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
          <GoSearchBtn
            shape="brown-outline"
            onClick={() => {
              history.push("/");
            }}
          >
            모임 찾아보기
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
