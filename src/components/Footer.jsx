import React from "react";
import styled from "styled-components";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";

// assets
import LogoSrc from "../assets/bookingLogo.svg";

import flex from "../themes/flex";
import { Elbutton, Eltext } from "../elements";
import logged from "../auth/logged";

const Footer = () => {
  return (
    <React.Fragment>
      <FooterWrap>
        <FooterBox>
          <FooterInnerBox>
            <FooterInnerLeftBox>
              <FooterInnerLeftTopBox>
                <FooterLogo></FooterLogo>
                <FooterInfo></FooterInfo>
              </FooterInnerLeftTopBox>
              <FooterInnerLeftBottomBox></FooterInnerLeftBottomBox>
            </FooterInnerLeftBox>
            <FooterInnerRightBox></FooterInnerRightBox>
          </FooterInnerBox>
          {/* <FooterSpanBox>
            <StSpan type="sub_2_bold">Team</StSpan>
            <StSpan type="sub_2_bold">Github</StSpan>
            <StSpan type="sub_2_bold">Company</StSpan>
          </FooterSpanBox>
          <Logo src={LogoSrc}></Logo>
          <FooterSpanBox>
            <StSpan type="sub_2_bold">Help desk</StSpan>
            <StSpan type="sub_2_bold">Blog</StSpan>
            <StSpan type="sub_2_bold">Resources</StSpan>
          </FooterSpanBox> */}
        </FooterBox>
      </FooterWrap>
    </React.Fragment>
  );
};

export default Footer;

const FooterWrap = styled.div`
  ${flex("center", "center", true)}
  width: 100%;
  background-color: #fff;
  margin-top: auto;
`;

const FooterBox = styled.div`
  width: 1200px;
  height: 620px;
  border: 1px solid red;

  ${flex("center", "center")}
`;

const FooterInnerBox = styled.div`
  ${flex("between", "center")}
  width: 1000px;
  height: 500px;
`;

const FooterInnerLeftBox = styled.div`
  ${flex("start", "start", false)}
  width: 35%;
  height: 100%;
  border: 1px solid blue;
`;

const FooterInnerLeftTopBox = styled.div`
  ${flex("start", "start", false)}
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;

const FooterLogo = styled.img``;

const FooterInfo = styled(Eltext)``;

const FooterInnerLeftBottomBox = styled.div`
  ${flex("start", "start", false)}
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;

const FooterInnerRightBox = styled.div`
  ${flex("start", "start", false)}
  width: 65%;
  height: 100%;
  border: 1px solid turquoise;
`;

// const Logo = styled.img`
//   width: 122px;
//   height: 47px;
// `;

// const FooterSpanBox = styled.div`
//   ${flex("center", "center", true)}
// `;

// const StSpan = styled(Eltext)`
//   padding: 10px 40px;
//   margin: 0 10px;
//   cursor: pointer;
// `;
