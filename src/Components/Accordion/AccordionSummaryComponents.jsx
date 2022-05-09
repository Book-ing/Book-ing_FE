import * as React from "react";

// mui
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

import MuiAccordionSummary from "@mui/material/AccordionSummary";

import { Avatar, AvatarGroup, Grid } from "@mui/material";

import LinearScaleIcon from "@mui/icons-material/LinearScale";

// styled components
import styledComp from "styled-components";
import { Eltext, Elbutton } from "../../elements";

// theme
import flex from "../../themes/flex";

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    style={{ paddingLeft: "42px", paddingRight: "42px" }}
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "25px", color: "var(--point)" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "#fbf9f9",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(0),
  },
}));

const AccordionSummaryComponent = (props) => {
  console.log(props);
  console.log(props.props.together.profileImage);
  return (
    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
      <AccordionHeaderWrap>
        <MenuBtn>
          <LinearScaleIcon sx={{ fontSize: 35 }} />
        </MenuBtn>
        <Grid container>
          <CrewInfo>
            <TitleText type="sub_2_bold">
              스터디명 :{props.props.studyTitle}
            </TitleText>
            <InfoText type="sub_2">금액 : {props.props.studyPrice}원</InfoText>
            <InfoText type="sub_2">
              일시 : {props.props.studyDateTime}2022년 12월 32일 14:00
            </InfoText>
            <InfoText type="sub_2">
              위치 : {props.props.studyAddr} {props.props.studyAddrDetail}
            </InfoText>
          </CrewInfo>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <TotalMember type="sub_2">
            {}5명 / {}10명
          </TotalMember>
          <Avatar
            style={{
              marginRight: "10px",
              border: "2px solid var(--point)",
            }}
            src={
              props.props.together.isStudyMaster === true
                ? props.props.together.profileImage
                : null
            }
          />
          <AvatarGroup max={4}>
            {props.props.together.map((cur, idx) => (
              <Avatar
                key={idx}
                src={
                  !props.props.together[idx].isStudyMaster
                    ? props.props.together[idx].profileImage
                    : null
                }
              ></Avatar>
            ))}
          </AvatarGroup>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <JoinBtn shape="brown-fill">참가하기</JoinBtn>
          <CancelBtn shape="brown-outline">취소하기</CancelBtn>
        </Grid>
      </AccordionHeaderWrap>
    </AccordionSummary>
  );
};

export default AccordionSummaryComponent;

const AccordionHeaderWrap = styledComp.div`
  position: relative;
  ${flex("between", "center")}
  width: 100%;

  @media screen and (max-width: 1260px) {
    ${flex("start", "center", false)}
  }
`;

const MenuBtn = styledComp.button`
  ${flex("center", "center", false)}
  position: absolute;
  height: 20px;
  right: 10px;
  top: 0;
  color: var(--point);

  &:hover {
    color: var(--notice)
  }
`;

const CrewInfo = styledComp.div`
  ${flex("center", "start", false)}
  margin-left: 40px;
  min-width: 400px;

  @media screen and (max-width: 1260px) {
    min-width: 300px;
    margin-left: 0;
  
`;

const TitleText = styled(Eltext)``;

const InfoText = styled(Eltext)``;

const TotalMember = styled(Eltext)`
  ${flex}
  width: 96px;
  height: 30px;
  margin-right: 10px;
  border-radius: 7px;
  border: 1px solid var(--point);
  color: var(--point);
`;

const JoinBtn = styled(Elbutton)`
  width: 96px;
  height: 30px;
  margin-right: 20px;
  border-radius: 5px;
`;
const CancelBtn = styled(Elbutton)`
  width: 96px;
  height: 30px;
  border-radius: 5px;
`;
