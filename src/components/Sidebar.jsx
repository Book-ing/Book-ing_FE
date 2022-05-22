import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actionCreators as userActions } from "../redux/modules/user";
import { actionCreators as mypageActions } from "../redux/modules/mypage";

// kakao logout uri
import { LOGOUT_KAKAO_AUTH_URL } from "../shared/OAuth";

// mui
import BorderColorIcon from "@mui/icons-material/BorderColor";

// style
import styled from "styled-components";
import { Elbutton, Elimage, Eltext } from "../elements";

// shared & theme
import flex from "../themes/flex";
import { history } from "../redux/configStore";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const dispatch = useDispatch();

  // state
  const [statusMsg, setStatusMsg] = useState("");

  // redux store
  const __myProfileData = useSelector((state) => state.mypage.myProfile);
  console.log(__myProfileData);

  // variables
  const userId = localStorage.getItem("userId");


  useEffect(() => {
    dispatch(mypageActions.getMyProfileDB(userId));
  }, [__myProfileData.statusMessage]);

  const clickLogout = () => {
    dispatch(userActions.kakaoLogout());
  };

  const handleChange = (e) => {
    setStatusMsg(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const userInfo = {
      userId:userId,
      statusMessage: statusMsg,
    }
    dispatch(mypageActions.changeStatusMsgDB(userInfo));
    alert("상태메세지가 변경되었습니다!");
  };

  const loginUserName = localStorage.getItem("username");
  return (
    <React.Fragment>
      <SidebarWrap>
        <Greeting type="head_6_bold">안녕하세요, {loginUserName}님!</Greeting>
        <ImgBox>
        <Elimage
          width="190px"
          height="190px"
          shape="profile"
          src={__myProfileData.profileImage}
        />
        </ImgBox>
        <StatusMessage>
          <form onSubmit={onSubmitHandler}>
            {__myProfileData.isStatusMessage === true ? (
              <StatusMessageInput
                placeholder={__myProfileData.statusMessage}
                onChange={handleChange}
              ></StatusMessageInput>
            ) : (
              <StatusMessageInput
                placeholder="상태메시지를 입력해주세요"
                onChange={handleChange}
              ></StatusMessageInput>
            )}

            <StatusMessageIcon>
              <BorderColorIcon fontSize="large" />
            </StatusMessageIcon>
          </form>
        </StatusMessage>
        <PageList>
          <MyCrew
            type="head_6"
            _onClick={() => {
              props.clickText(true);
            }}
          >
            내 모임
          </MyCrew>
          <MyStudy
            type="head_6"
            _onClick={() => {
              props.clickText(false);
            }}
          >
            내 스터디
          </MyStudy>
        </PageList>
        <LogoutBtn _onClick={clickLogout}>
          <StyledAtag href={LOGOUT_KAKAO_AUTH_URL}>
            <BtnText type="sub_1">로그아웃</BtnText>
          </StyledAtag>
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

const ImgBox = styled.div`
  border-radius: 20px;
  border: 4px solid var(--point);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

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

const StyledAtag = styled.a`
  ${flex("center", "center", false)}
  width: 107px;
  height: 37px;
  border-radius: 100px;
`;

const BtnText = styled(Eltext)`
  ${flex("center", "center", false)}
  color: #fff;
  font-weight: 500;
  transition: 300ms ease-in-out;
  width: 107px;
  height: 37px;
  border-radius: 100px;

  &:hover {
    color: var(--point);
  }
`;
