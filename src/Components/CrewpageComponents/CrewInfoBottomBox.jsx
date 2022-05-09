import React from "react";

// mui
import { Avatar } from "@mui/material";

// styled components
import styled from "styled-components";

// elelments
import { Eltext, Elimage, Elbutton } from "../../elements";

// themes
import flex from "../../themes/flex";
import EachMember from "./EachMember";

const CrewInfoBottomBox = (props) => {
  // variables
  const __crewInfo = props.__crewInfo;
  const __MasterProfile = props.__crewInfo.meetingMasterProfile;
  const __together = props.__crewInfo.together;

  return (
    <TopWrapBottomBox>
      <LeftBottomBox>
        <CrewInfoTag type="sub_2_bold">모임소개</CrewInfoTag>

        <CrewInfoBox>
          <ImageBox>
            <Avatar
              variant="square"
              sx={{ width: 150, height: 150 }}
              src={__crewInfo.meetingImage}
            />
          </ImageBox>

          <CrewInfoTextBox>
            <CrewMasterInfo>
              <CrewMasterText type="sub_2_bold">
                모임장 : {__MasterProfile.nickname}
              </CrewMasterText>
              <Avatar
                sx={{ width: 30, height: 30 }}
                src={__MasterProfile.profileImage}
              />
            </CrewMasterInfo>

            <CrewInfoText type="sub_2_bold">
              {__crewInfo.meetingIntro}
            </CrewInfoText>
          </CrewInfoTextBox>
        </CrewInfoBox>
      </LeftBottomBox>

      <RightBottomBox>
        <RightBottomBoxHeader>
          <CrewMemberList type="sub_2_bold">함께하는 사람</CrewMemberList>
          <MembersCheck shape="brown-outline">더보기 +</MembersCheck>
        </RightBottomBoxHeader>
        <RightBottomBoxMemberBox>
          <EachMember MasterProfile={__MasterProfile} />
          {__together.map((cur, idx) => (
            <EachMember together={cur} key={idx} />
          ))}
        </RightBottomBoxMemberBox>
      </RightBottomBox>
    </TopWrapBottomBox>
  );
};

export default CrewInfoBottomBox;

const TopWrapBottomBox = styled.div`
  ${flex("between", "center", true)}
  width: 100%;
  height: 200px;

  @media screen and (max-width: 1260px) {
    ${flex("between", "center", false)}
  }
`;

const LeftBottomBox = styled.div`
  width: 45%;
  min-width: 300px;
  height: 100%;
`;

const CrewInfoTag = styled(Eltext)`
  ${flex}
  width: 96px;
  height: 35px;
  margin-bottom: 10px;
  border-radius: 7px;
  color: var(--white);
  background-color: var(--point);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const CrewInfoBox = styled.div`
  ${flex}
`;

const ImageBox = styled.div`
  ${flex("center", "center", false)}
`;

const CrewInfoTextBox = styled.div`
  ${flex("center", "start", false)}
  margin-left: 20px;
  width: 100%;
`;

const CrewMasterInfo = styled.div`
  ${flex}
`;

const CrewMasterText = styled(Eltext)`
  margin-right: 10px;
`;

const CrewInfoText = styled(Eltext)``;

const RightBottomBox = styled.div`
  width: 45%;
  min-width: 300px;
  height: 100%;

  @media screen and (max-width: 1260px) {
    margin-top: 40px;
  }
`;

const RightBottomBoxHeader = styled.div`
  ${flex("between", "center", true)}
  width: 100%;
`;

const CrewMemberList = styled(Eltext)`
  ${flex}
  width: 114px;
  height: 35px;
  margin-bottom: 10px;
  border-radius: 7px;
  color: var(--white);
  background-color: var(--point);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const MembersCheck = styled(Elbutton)`
  width: 96px;
  height: 30px;
  border-radius: 7px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const RightBottomBoxMemberBox = styled.div``;
