import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// modules
import { actionCreators as accordionActions } from "../../redux/modules/accordion";

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
  text-align: center;
  line-height: 50px;
  margin: auto;
  color: var(--gray);
`;

const CreateStudyBtn = styled(Elbutton)`
  width: 147px;
  height: 35px;
  border-radius: 7px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;
