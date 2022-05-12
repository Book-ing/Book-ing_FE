import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// modules
import { actionCreators as accordionActions } from "../../redux/modules/accordion";
import { actionCreators as crewActions } from "../../redux/modules/crew";

// mui
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

// styled components
import { Eltext, Elbutton } from "../../elements";

// components
import AccordionSummaryComponent from "./AccordionSummaryComponents";

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

const CustomizedAccordions = (props) => {
  const dispatch = useDispatch();
  const paramsUserId = useParams();

  // redux store
  const __accordionData = useSelector((state) => state.accordion.accordionData);
  const __isJoinedCrew = useSelector((state) => state.crew.isJoinedCrew);

  // variables
  const userId = localStorage.getItem("userId");

  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    dispatch(accordionActions.getAccordionDB(paramsUserId.meetingId));
    return () => {
      dispatch(accordionActions.reset_accordion());
    };
  }, []);

  if (__accordionData === "") return <></>;

  if (!userId || !__isJoinedCrew)
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
                <AccordionSummaryComponent props={cur} />

                <AccordionDetailsComponent props={cur} />
              </Accordion>
            );
          })
        ) : (
          <StudyNoneNotice type="sub_1">
            생성된 스터디가 없습니다,
          </StudyNoneNotice>
        )}
      </>
    );

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
              <AccordionSummaryComponent props={cur} />

              <AccordionDetailsComponent props={cur} />
            </Accordion>
          );
        })
      ) : (
        <StudyNoneNotice type="sub_1">
          생성된 스터디가 없습니다,
          <br /> 새로운 스터디를 만들어 볼까요?
          <br />
          <CreateStudyBtn shape="brown-outline">스터디 생성하기</CreateStudyBtn>
        </StudyNoneNotice>
      )}
    </>
  );
};

export default CustomizedAccordions;

const StudyNoneNotice = styled(Eltext)`
  ${flex("center", "center", false)}
  text-align: center;
  width: 100%;
  height: 450px;
  line-height: 50px;
  margin: auto;
  color: var(--gray);
`;

const CreateStudyBtn = styled(Elbutton)`
  max-width: 147px;
  max-height: 35px;
  margin-top: 40px;
  border-radius: 7px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;
