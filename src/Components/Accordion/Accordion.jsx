import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// modules
import { actionCreators as accordionActions } from "../../redux/modules/accordion";
import { actionCreators as crewActions } from "../../redux/modules/crew";

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

const CustomizedAccordions = (props) => {
  const dispatch = useDispatch();
  const paramsUserId = useParams();

  const [open, setOpen] = useState(false);

  const hadleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

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
                <AccordionSummaryComponent
                  props={cur}
                  isJoinedCrew={props.isJoinedCrew}
                />

                <AccordionDetailsComponent
                  props={cur}
                  isJoinedCrew={props.isJoinedCrew}
                />
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
          생성된 스터디가 없습니다,
          <br /> 새로운 스터디를 만들어 볼까요?
          <br />
          {/* <CreateStudyBtn shape="brown-outline">스터디 생성하기</CreateStudyBtn> */}
          <ModalOpenBtn shape="brown-outline" onClick={hadleModalOpen}>
            스터디 생성하기
          </ModalOpenBtn>
          <Modal open={open}>
            <Box sx={style} style={{ position: "relative" }}>
              {/* button에 styled component 사용 불가하여 inline-style 사용 */}

              <button
                style={{ position: "absolute", right: "160px", top: "30px" }}
                onClick={handleModalClose}
              >
                <CloseIcon fontSize="large" />
              </button>
              <ModalStudy />
            </Box>
          </Modal>
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "1300px",
  height: "906px",
  bgcolor: "#fbf9f9",
  border: "1px solid var(--point)",
  boxShadow: 24,
  borderRadius: "5px",
};

const ModalOpenBtn = styled(Elbutton)`
  width: 147px;
  height: 35px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

// const ModalCloseBtn = styled.button`
//   position: absolute;
//   right: 160px;
//   top: 30px;
// `;
