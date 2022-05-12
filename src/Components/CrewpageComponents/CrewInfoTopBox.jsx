import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// module
import { actionCreators as CrewActions } from "../../redux/modules/crew";

// styled components
import styled from "styled-components";

// elelments
import { Eltext, Ellocation, Elcategory, Elbutton } from "../../elements";

// themes
import flex from "../../themes/flex";
import { history } from "../../redux/configStore";

const CrewInfoTopBox = (props) => {
  const dispatch = useDispatch();
  const params = useParams();

  // variables
  const isJoinedCrew = props.__crewInfo.isMeetingJoined;
  const crewMasterIdNum = props.__crewInfo.meetingMasterProfile.userId;
  const loggedIdNum = localStorage.getItem("userId");

  // functions
  const deleteCrew = () => {
    if (
      window.confirm(
        "모임 해산을 하시겠습니까? 삭제된 데이터는 복구가 어렵습니다."
      )
    ) {
      dispatch(CrewActions.deleteCrewDB(params.meetingId));
    }
  };

  const clickJoinBtn = () => {
    if (!loggedIdNum) {
      if (
        window.confirm(
          "로그인 이후 이용이 가능합니다.\n확인버튼을 클릭하면 로그인 페이지로 이동합니다."
        )
      ) {
        history.replace("/login");
      }
    }
    dispatch(CrewActions.joinCrewDB(params.meetingId));
  };

  const clickQuitBtn = () => {
    alert("모임에서 나가시겠습니까?");
    dispatch(CrewActions.quitCrewDB(params.meetingId));
  };

  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

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

          {isJoinedCrew === true ? (
            crewMasterIdNum === parseInt(loggedIdNum) ? (
              <JoinCrewBtn shape="red-outline" onClick={() => deleteCrew()}>
                모임 해산
              </JoinCrewBtn>
            ) : (
              <JoinCrewBtn shape="red-outline" onClick={() => clickQuitBtn()}>
                나가기
              </JoinCrewBtn>
            )
          ) : (
            <JoinCrewBtn shape="brown-outline" onClick={() => clickJoinBtn()}>
              참가
            </JoinCrewBtn>
          )}
        </LeftTitleBox>
        <RightTitleBox>
          {crewMasterIdNum === parseInt(loggedIdNum) ? (
            <EditCrewBtn
              shape="brown-outline"
              __onClick={() => {
                handleModalOpen();
              }}
            >
              수정하기
            </EditCrewBtn>
          ) : null}
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
