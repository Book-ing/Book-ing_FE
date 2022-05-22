import React from "react";

// mui
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";

// style
import styled from "styled-components";
import { Elimage, Eltext } from "../elements";
import flex from "../themes/flex";

const MypageCard = (props) => {
  // console.log(props)
  return (
    <React.Fragment>
      <CardsWrap>
        <ImgBox>
          <Elimage
            shape="profile"
            src={props.meetingImage}
            minWidth="94px"
            minHeight="92px"
          />
        </ImgBox>
        <InfoBox>
          <Title type="sub_1">{props.meetingName}</Title>
          <CntBox>
            <PersonOutlineOutlinedIcon sx={{ fontSize: 25 }} />
            <CntText type="sub_2">{props.meetingJoinedCnt}명</CntText>
            <MenuBookOutlinedIcon sx={{ fontSize: 25 }} />
            <CntText type="sub_2">{props.meetingStudyCnt}개</CntText>
          </CntBox>
          <SubTitle type="sub_2">모임소개</SubTitle>
          <CrewInfo type="sub_2">{props.meetingIntro}</CrewInfo>
        </InfoBox>
      </CardsWrap>
    </React.Fragment>
  );
};

export default MypageCard;

const CardsWrap = styled.div`
  ${flex("start")}
  width: 840px;
  height: 182px;
  padding: 22px 24px;
  border-radius: 10px;
  margin-top: 13px;
  margin-left: 30px;
  border: 1px solid var(--point);
  background-color: var(--white);
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
`;

const ImgBox = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 38px;
  overflow: hidden;
  border: 1px solid var(--white);
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
`;

const InfoBox = styled.div`
  ${flex("between", "start", false)}
  width: 600px;
  height: 130px;
  margin-left: 40px;
  text-overflow: ellipsis;
  /* box-shadow: 0.5px 3px 5px rgba(0, 0, 0, 0.25); */
  background-color: var(--white);
`;

const Title = styled(Eltext)`
  height: 35px;
  font-weight: 700;
  max-width: 500px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CntBox = styled.div`
  ${flex}
  height: 35px;
  color: var(--gray);
`;

const SubTitle = styled(Eltext)`
  display: block;
  color: var(--gray);
  width: 100%;
`;

const CntText = styled(Eltext)`
  color: (var(--gray));
  margin: 0 50px 0 10px;
`;

const CrewInfo = styled(Eltext)`
  display: block;
  color: var(--gray);
  max-width: 500px;
  height: 35px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
