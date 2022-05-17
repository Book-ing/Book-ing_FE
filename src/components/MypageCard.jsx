import React from "react";

// mui
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";

// style
import styled from "styled-components";
import { Elimage, Eltext } from "../elements";
import flex from "../themes/flex";

const MypageCard = (props) => {
  return (
    <React.Fragment>
      <CardsWrap>
        <ImgBox>
          <Elimage
            shape="profile"
            src={props.meetingImage}
            minWidth="140px"
            minHeight="140px"
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
  width: 100%;
  height: 182px;
  padding: 22px 24px;
  border-radius: 24px;
  border: 1px solid var(--point);
`;

const ImgBox = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 24px;
  overflow: hidden;
`;

const InfoBox = styled.div`
  ${flex("between", "start", false)}
  max-width: 600px;
  height: 130px;
  margin-left: 34px;
  text-overflow: ellipsis;
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
