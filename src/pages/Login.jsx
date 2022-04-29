import React from "react";
import styled from "styled-components";
import { KAKAO_AUTH_URL } from "../shared/OAuth";
import flex from "../themes/flex";
import Eltext from "../elements/Eltext";

// 이미지
import Logo from "../assets/bookingLogo.svg";
import MainImg from "../assets/mainImgs/mainImg1.jpg";
import KakaoBtnImg from "../assets/kakao_login_medium_wide.png";

const Login = () => {
  return (
    <LoginWrap>
      <LoginBox>
        <LeftBox>
          <img src={MainImg} alt="" style={{ width: "110%" }} />
        </LeftBox>
        <RightBox>
          <img
            src={Logo}
            alt=""
            style={{
              width: "152px",
              height: "59px",
              marginBottom: "47px",
              marginTop: "-10px",
            }}
          />
          <KaKaoBtn href={KAKAO_AUTH_URL}>
            <img src={KakaoBtnImg} alt="" />
          </KaKaoBtn>
          <LoginText type="sub_2">
            카카오계정으로 <LoginPointText>Book-ing</LoginPointText> 시작하기
          </LoginText>
        </RightBox>
      </LoginBox>
    </LoginWrap>
  );
};

export default Login;

const LoginWrap = styled.div`
  ${flex("center", "center", true)}
  width: 100vw;
  height: 100vh;
`;

const LoginBox = styled.div`
  ${flex("center", "center", true)}
  position: relative;
  width: 1260px;
`;

const LeftBox = styled.div`
  position: absolute;
  left: 0;
  width: 720px;
  height: 500px;
  overflow: hidden;
`;

const RightBox = styled.div`
  ${flex("center", "center", false)}
  position: absolute;
  right: 0;
  width: 657px;
  height: 367px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  background-color: #fbf9f9;
  border-radius: 46px;
`;

const KaKaoBtn = styled.a`
  display: block;
  width: 300px;
`;

const LoginText = styled(Eltext)`
  margin-top: 40px;
  color: var(--point);
  border-bottom: 1px solid;
`;

const LoginPointText = styled.span`
  font-family: "Gugi";
`;
