import React from "react";
import styled from "styled-components";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";

// assets
import LogoSrc from "../assets/Logo.png";

import flex from "../themes/flex";
import { Elbutton, Eltext } from "../elements";
import logged from "../auth/logged";

const Footer = () => {
  return (
    <React.Fragment>
      <FooterWrap>
        <FooterBox>
          <FooterSpanBox>
            <StSpan type="sub_2_bold">Team</StSpan>
            <StSpan type="sub_2_bold">Github</StSpan>
            <StSpan type="sub_2_bold">Company</StSpan>
          </FooterSpanBox>
          <Logo src={LogoSrc}></Logo>
          <FooterSpanBox>
            <StSpan type="sub_2_bold">Help desk</StSpan>
            <StSpan type="sub_2_bold">Blog</StSpan>
            <StSpan type="sub_2_bold">Resources</StSpan>
          </FooterSpanBox>
        </FooterBox>
      </FooterWrap>
    </React.Fragment>
  );
};

export default Footer;

const FooterWrap = styled.div`
  width: 100vw;
  background-color: #fff;
  ${flex("center", "center", true)}
`;

const FooterBox = styled.div`
  width: 1440px;
  height: 64px;
  ${flex("between", "center", true)}
`;

const Logo = styled.img`
  width: 122px;
  height: 47px;
`;

const FooterSpanBox = styled.div`
  ${flex("center", "center", true)}
`;

const StSpan = styled(Eltext)`
  padding: 10px 40px;
  margin: 0 10px;
  cursor: pointer;
`;
