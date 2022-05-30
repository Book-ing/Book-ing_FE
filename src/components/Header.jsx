import React, { useEffect } from "react";
import styled from "styled-components";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

// kakao logout uri
import { LOGOUT_KAKAO_AUTH_URL } from "../shared/OAuth";

// login check
import logged from "../auth/logged";

// assets
import LogoSrc from "../assets/bookingLogo.svg";

// elements & theme
import flex from "../themes/flex";
import { Elbutton, Eltext } from "../elements";

const Header = () => {
  const dispatch = useDispatch();

  // login check
  const isLogin = logged();

  const clickLogout = () => {
    const result = window.confirm("로그아웃 하시겠습니까?");
    if (result === true) {
      window.open(LOGOUT_KAKAO_AUTH_URL, "_self");
      dispatch(userActions.kakaoLogout());
    } else {
      return;
    }
  };

  useEffect(() => {
    dispatch(userActions.loginCheckDB());
  }, []);

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
            <StBtn
              shape="brown-outline"
              _onClick={() => {
                history.push("/");
              }}
            >
              HOME
            </StBtn>
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
  width: 100%;
  padding: 20px 0;
  background-color: #fff;
  ${flex("center", "center", true)}
`;

const HeaderBox = styled.div`
  width: 1200px;
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
