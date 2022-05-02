import React from "react";

// mui
import BorderColorIcon from "@mui/icons-material/BorderColor";

// style
import styled from "styled-components";
import { Elbutton, Elimage, Eltext } from "../elements";

// theme
import flex from "../themes/flex";

const Sidebar = () => {
  const loginUserName = localStorage.getItem("username");
  return (
    <React.Fragment>
      <SidebarWrap>
        <Greeting type="head_6_bold">안녕하세요, {loginUserName}님!</Greeting>
        <Elimage
          width="190px"
          height="190px"
          shape="profile"
          src="http://friends.co.kr/shopimages/life25/0140020024062.jpg?1568182160"
        />
        <StatusMessage>
          <StatusMessageInput placeholder="상태메시지를 입력해주세요"></StatusMessageInput>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <StatusMessageIcon>
              <BorderColorIcon fontSize="large" />
            </StatusMessageIcon>
          </form>
        </StatusMessage>
        <PageList>
          <MyCrew type="head_6">내 모임</MyCrew>
          <MyStudy type="head_6">내 스터디</MyStudy>
        </PageList>
        <LogoutBtn>
          <BtnText type="sub_1">로그아웃</BtnText>
        </LogoutBtn>
      </SidebarWrap>
    </React.Fragment>
  );
};

export default Sidebar;

const SidebarWrap = styled.div`
  ${flex("start", "start", false)}
  min-width: 372px;
  height: 100%;
  background-color: #fbf9f9;
  padding-top: 83px;
  padding-left: 60px;
`;

const Greeting = styled(Eltext)`
  margin-bottom: 25px;
`;

const StatusMessage = styled.div`
  ${flex("center", "center", true)}
  margin-top: 25px;
`;

const StatusMessageInput = styled.input`
  width: 160px;
  background-color: transparent;
`;

const StatusMessageIcon = styled.button`
  color: var(--gray);
`;

const PageList = styled.div`
  margin-top: 32px;
`;

const MyCrew = styled(Eltext)`
  font-weight: 500;
  padding: 2px 0;
  width: 92px;

  &:hover {
    padding-bottom: 0;
    border-bottom: 2px solid black;
    font-weight: 700;
    cursor: pointer;
  }
`;

const MyStudy = styled(Eltext)`
  font-weight: 500;
  margin-top: 30px;
  padding: 2px 0;

  &:hover {
    padding-bottom: 0;
    border-bottom: 2px solid black;
    font-weight: 700;
    cursor: pointer;
  }
`;

const LogoutBtn = styled(Elbutton)`
  width: 107px;
  height: 37px;
  border-radius: 100px;
  margin-top: 111px;
`;

const BtnText = styled(Eltext)`
  color: #fff;
  font-weight: 500;
  transition: 300ms ease-in-out;

  &:hover {
    color: var(--point);
  }
`;
