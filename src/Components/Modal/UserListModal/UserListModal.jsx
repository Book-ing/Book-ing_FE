import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actionCreators as crewActions } from "../../../redux/modules/crew";

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
  const __crewInfo = useSelector((state) => state.crew.crewData);
  console.log(__crewInfo);
  const __profileMine = useSelector((state) => state.crew.profileMy);
  const __profileMaster = useSelector((state) => state.crew.profileMaster);
  const __profileUser = useSelector((state) => state.crew.profileUser);
  const testSeletor = useSelector((state) => state.crew);
  console.log(testSeletor);

  // variables
  const myUserId = localStorage.getItem("userId");
  const filterdUserList = __profileUser.filter(
    (e) =>
      e.userId !== parseInt(myUserId) && e.userId !== __profileMaster.userId
  );

  useEffect(() => {
    dispatch(crewActions.getCrewUserListDB(__crewInfo.meetingId));
  }, []);

  return (
    <UserListModalWrap>
      <Header>
        <Members>
          <Avatar style={style} src={__profileMine.profileImage} />
          {__profileMine.userId === __profileMaster.userId ? null : (
            <Avatar style={style} src={__profileMaster.profileImage} />
          )}
        </Members>
        <Title type="sub_1_bold">{__crewInfo.meetingName}</Title>
        <UserCnt type="sub_2">{__crewInfo.meetingUserCnt}명</UserCnt>
      </Header>
      <UserlistBox>
        {/* EachUser 맵 돌려야 한다 */}
        <EachUser>
          <EachUserLeftBox>
            <Avatar
              sx={{ marginRight: "10px" }}
              src={__profileMine.profileImage}
            />
            <UserName type="sub_2_bold">{__profileMine.username}</UserName>
            <TagMe type="body_4_bold">나</TagMe>
            {__profileMaster.userId === parseInt(myUserId) ? (
              <TagMaster type="body_4_bold">모임장</TagMaster>
            ) : null}
          </EachUserLeftBox>
        </EachUser>
        <EachUser>
          {__profileMaster.userId === parseInt(myUserId) ? null : (
            <EachUserLeftBox>
              <Avatar
                sx={{ marginRight: "10px" }}
                src={__profileMaster.profileImage}
              />

              <UserName type="sub_2_bold">{__profileMaster.username}</UserName>
              <TagMaster type="body_4_bold">모임장</TagMaster>
            </EachUserLeftBox>
          )}
        </EachUser>
        {filterdUserList.map((cur, idx) => {
          return (
            <EachUser key={idx}>
              <EachUserLeftBox>
                <Avatar sx={{ marginRight: "10px" }} />
                <UserName type="sub_2_bold">
                  {filterdUserList[idx].username}
                </UserName>
              </EachUserLeftBox>
              {/* 모임장이 아니라면 보이지 않게 해야함 */}
              <KickBtn shape="red-outline" onClick={() => {}}>
                내보내기
              </KickBtn>
            </EachUser>
          );
        })}
      </UserlistBox>
    </UserListModalWrap>
  );
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
