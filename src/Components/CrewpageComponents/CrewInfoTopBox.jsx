import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionCreators as CrewActions } from "../../redux/modules/crew";

// styled components
import styled from "styled-components";

// elelments
import { Eltext, Ellocation, Elcategory, Elbutton } from "../../elements";

// themes
import flex from "../../themes/flex";

const CrewInfoTopBox = (props) => {
  const __crewInfo = props.__crewInfo;
  return (
    <TopWrapTopBox>
      <TopWrapTopBoxTagBox>
        <Ellocation>
          {}
          <Eltext type="sub_2_bold">{__crewInfo.meetingLocation}</Eltext>
        </Ellocation>

        <Elcategory shape={__crewInfo.meetingCategory} color="white">
          <Eltext type="sub_2_bold" color="var(--white)">
            {__crewInfo.meetingCategory}
          </Eltext>
        </Elcategory>
      </TopWrapTopBoxTagBox>

      <TopWrapTopBoxTitleBox>
        <LeftTitleBox>
          <CrewTitle type="head_6">{__crewInfo.meetingName}</CrewTitle>

          <CrewMember type="sub_2_bold">
            ({__crewInfo.meetingUserCnt}/{__crewInfo.meetingLimitCnt})
          </CrewMember>

          <JoinCrewBtn shape="brown-outline">참가</JoinCrewBtn>
        </LeftTitleBox>
        <RightTitleBox>
          <EditCrewBtn shape="brown-outline">수정하기</EditCrewBtn>
        </RightTitleBox>
      </TopWrapTopBoxTitleBox>
    </TopWrapTopBox>
  );
};

export default CrewInfoTopBox;

const TopWrapTopBox = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

const TopWrapTopBoxTagBox = styled.div`
  ${flex("between", "center", true)}
  width: 200px;
`;

const TopWrapTopBoxTitleBox = styled.div`
  ${flex("between", "center", true)}
  margin-top: 10px;
`;

const LeftTitleBox = styled.div`
  ${flex}
`;

const CrewTitle = styled(Eltext)`
  font-weight: bold;
`;
const CrewMember = styled(Eltext)`
  margin: 0 23px;
`;

const JoinCrewBtn = styled(Elbutton)`
  border-radius: 7px;
  width: 96px;
  height: 30px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const EditCrewBtn = styled(Elbutton)`
  border-radius: 7px;
  width: 96px;
  height: 30px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const RightTitleBox = styled.div``;
