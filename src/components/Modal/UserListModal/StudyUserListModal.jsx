import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { studyActions } from "../../../redux/modules/study";

// styled components
import styled from "styled-components";

// mui
import { Avatar } from "@mui/material";

// elements
import { Elbutton, Eltext } from "../../../elements";

// theme
import flex from "../../../themes/flex";

const UserList = (props) => {
  const dispatch = useDispatch();

  // redux store

  const __studyProfileMine = useSelector((state) => state.study.studyProfileMy);
  const __studyProfileMaster = useSelector(
    (state) => state.study.studyProfileMaster
  );
  const __studyProfileUser = useSelector(
    (state) => state.study.studyProfileUser
  );
  const __newStudyProfileUser = useSelector(
    (state) => state.study.newStudyProfileUser
  );

  useEffect(() => {
    dispatch(studyActions.getStudyUserListDB(props.eachStudyData.studyId));
    return dispatch(studyActions.resetStudyUserList());
  }, [dispatch, props.eachStudyData.studyId, __newStudyProfileUser]);

  if (props.isStudyUserList === true) {
    const filterdStudyUserList = __studyProfileUser.filter(
      (e) =>
        e.userId !== __studyProfileMine.userId &&
        e.userId !== __studyProfileMaster.userId
    );

    const kickStudyUserBtnHandler = (payloadUsername, payloadUserId) => {
      if (
        window.confirm(`${payloadUsername} 유저를 스터디에서 내보내시겠습니까?`)
      ) {
        dispatch(
          studyActions.kickStudyUserDB(
            props.eachStudyData.studyId,
            payloadUserId
          )
        );
      }
    };

    console.log(props.eachStudyData);

    return (
      <UserListModalWrap>
        <Header>
          <Members>
            {props.eachStudyData.isStudyJoined === true ? (
              <Avatar style={style} src={__studyProfileMine.profileImage} />
            ) : null}

            {__studyProfileMine.userId ===
            __studyProfileMaster.userId ? null : (
              <Avatar style={style} src={__studyProfileMaster.profileImage} />
            )}
          </Members>
          <Title type="sub_1_bold">{props.eachStudyData.studyTitle}</Title>
          <UserCnt type="sub_2">{props.eachStudyData.studyUserCnt}명</UserCnt>
        </Header>
        <UserlistBox>
          {/* 나 영역 시작 */}
          {props.eachStudyData.isStudyJoined === true ? (
            <EachUser>
              <EachUserLeftBox>
                <Avatar
                  sx={{ marginRight: "10px" }}
                  src={__studyProfileMine.profileImage}
                />
                <UserName type="sub_2_bold">
                  {__studyProfileMine.username}
                </UserName>
                <TagMe type="body_4_bold">나</TagMe>
                {__studyProfileMaster.userId === __studyProfileMine.userId ? (
                  <TagMaster type="body_4_bold">스터디장</TagMaster>
                ) : null}
              </EachUserLeftBox>
            </EachUser>
          ) : null}

          {/* 나 영역 끝 */}

          {/* 모임장 영역 시작 */}
          {__studyProfileMaster.userId === __studyProfileMine.userId ? null : (
            <EachUser>
              <EachUserLeftBox>
                <Avatar
                  sx={{ marginRight: "10px" }}
                  src={__studyProfileMaster.profileImage}
                />
                <UserName type="sub_2_bold">
                  {__studyProfileMaster.username}
                </UserName>
                <TagMaster type="body_4_bold">스터디장</TagMaster>
              </EachUserLeftBox>
            </EachUser>
          )}
          {/* 모임장 영역 끝 */}

          {/* 일반 유저 영역 시작 */}
          {filterdStudyUserList.map((cur, idx) => {
            console.log(cur);
            return (
              <EachUser key={idx}>
                <EachUserLeftBox>
                  <Avatar
                    src={filterdStudyUserList[idx].profileImage}
                    sx={{ marginRight: "10px" }}
                  />
                  <UserName type="sub_2_bold">
                    {filterdStudyUserList[idx].username}
                  </UserName>
                </EachUserLeftBox>
                {/* 모임장이 아니라면 보이지 않게 해야함 */}
                {__studyProfileMine.userId === __studyProfileMaster.userId ? (
                  <KickBtn
                    shape="red-outline"
                    onClick={() =>
                      kickStudyUserBtnHandler(cur.username, cur.userId)
                    }
                  >
                    내보내기
                  </KickBtn>
                ) : null}
              </EachUser>
            );
          })}
          {/* 일반 유저 영역 끝 */}
        </UserlistBox>
      </UserListModalWrap>
    );
  }
};

export default UserList;

const style = {
  width: "40px",
  margin: "2px auto",
};

const UserListModalWrap = styled.div`
  position: relative;
  /* overflow: hidden; */
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  ${flex("center", "center", false)}
  width: 100%;
  min-height: 35%;
  border-bottom: 7px solid #dedede;
`;

const Members = styled.div`
  ${flex}
  flex-wrap: wrap;
  width: 90px;
  margin-bottom: 14px;
`;

const Title = styled(Eltext)`
  max-width: 95%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 10px;
`;

const UserCnt = styled(Eltext)``;

const UserlistBox = styled.div`
  padding: 20px;
  overflow-y: scroll;
  height: 65%;
`;

const EachUser = styled.div`
  ${flex("between", "center", true)}
  width: 100%;
  margin-bottom: 17px;
`;

const EachUserLeftBox = styled.div`
  ${flex}
`;

const TagMe = styled(Eltext)`
  ${flex}
  width: 18px;
  height: 18px;
  margin-left: 10px;
  color: #fff;
  font-weight: bold;
  background-color: var(--point);
  border-radius: 50%;
`;

const TagMaster = styled(Eltext)`
  ${flex}
  margin-left: 5px;
  width: 45px;
  border-radius: 7px;
  color: var(--point);
  background-color: var(--main);
`;

const UserName = styled(Eltext)``;

const KickBtn = styled(Elbutton)`
  ${flex}
  width: 60px;
  height: 20px;
  border-radius: 7px;
  font-size: 12px;
  font-weight: 500;
  color: var(--point);

  &:hover {
    color: #fff;
  }
`;
