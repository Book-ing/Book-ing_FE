import React from "react";
import styled from "styled-components";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";

// assets
import LogoSrc from "../assets/bookingLogo.svg";

import flex from "../themes/flex";
import { Elbutton, Eltext } from "../elements";
import logged from "../auth/logged";

const Header = () => {
  const dispatch = useDispatch();

  const isLogin = logged();
  const clickLogout = () => {
    // dispatch(__logout());
    history.replace("/");
  };

  return (
    <React.Fragment>
      <HeaderWrap>
        <HeaderBox>
          <Logo
            src={LogoSrc}
            onClick={() => {
              history.push("/");
            }}
          ></Logo>
          <HeaderBtns>
            <StBtn shape="brown-outline">HOME</StBtn>
            {!isLogin ? (
              <React.Fragment>
                <StBtn
                  shape="brown-outline"
                  _onClick={() => {
                    history.push("/login");
                  }}
                >
                  Log in
                </StBtn>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <StBtn shape="brown-outline" _onClick={clickLogout}>
                  Log out
                </StBtn>
                <StBtn
                  shape="brown-outline"
                  _onClick={() => {
                    history.push("/mypage");
                  }}
                >
                  MY PAGE
                </StBtn>
              </React.Fragment>
            )}
          </HeaderBtns>
        </HeaderBox>
      </HeaderWrap>
    </React.Fragment>
  );
};

export default Header;

const HeaderWrap = styled.div`
  z-index: 99999;
  width: 100vw;
  padding: 20px 0;
  background-color: #fff;
  ${flex("center", "center", true)}
`;

const HeaderBox = styled.div`
  width: 1440px;
  height: 64px;
  ${flex("between", "center", true)}
`;

const Logo = styled.img`
  width: 122px;
  height: 47px;
  cursor: pointer;
`;

const HeaderBtns = styled.div``;

const StBtn = styled(Elbutton)`
  width: 130px;
  height: 40px;
  margin-left: 20px;
  border-radius: 6px;
`;
