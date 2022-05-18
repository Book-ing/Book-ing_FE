import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

// styled components
import styledComp from "styled-components";
import { Eltext } from "../../elements";

// theme
import flex from "../../themes/flex";
import PostDetail from "../PostDetail";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} {...props} />
))(({ theme }) => ({
  backgroundColor: "transparent",
  borderRadius: "25px",
  marginBottom: "2px",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    style={{ paddingLeft: "42px", paddingRight: "42px" }}
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "25px" }} />}
    {...props}
  />
))(({ theme }) => ({
  marginBottom: "1px",
  borderRadius: "25px",
  border: "1px solid var(--point)",
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "transparent",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(5),
  border: "1px solid var(--point)",
  borderRadius: "25px",
  backgroundColor: "#fbf9f9",
}));

const CustomizedAccordions = (props) => {
  console.log(props);
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <CrewInfo>
            <TitleText type="sub_1">{props.studyTitle}</TitleText>
            <MidBox>
              <InfoText type="sub_2">{props.studyAddr}</InfoText>
              <InfoTextCharge type="sub_2">{props.studyPrice}</InfoTextCharge>
            </MidBox>
            <InfoText type="sub_2">{props.studyDateTime}</InfoText>
          </CrewInfo>
        </AccordionSummary>
        <AccordionDetails>
          <PostDetail props={props} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CustomizedAccordions;

const CrewInfo = styledComp.div`
${flex("center", "start", false)}
margin-left: 20px;
`;

const TitleText = styledComp(Eltext)`
  font-weight: 700;
`;

const MidBox = styledComp.div`
  ${flex}
`;

const InfoText = styledComp(Eltext)`
width: 350px;
margin-right: 50px;
color: var(--gray);
padding: 5px 0;
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap;
`;

const InfoTextCharge = styledComp(Eltext)`
max-width: 100px;
padding: 5px 0;
color: var(--gray);
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap;
`;
