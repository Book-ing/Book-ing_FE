import React from "react";
import styled from "styled-components";
import { history } from "../../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";

// assets
import LogoSrc from "../../assets/bookingLogo.svg";

// elements & theme
import flex from "../../themes/flex";
import { Elbutton, Eltext } from "../../elements";

const VideoHeader = (props) => {
  const dispatch = useDispatch();

  return (
    <HeaderWrap>
      <HeaderBox>
        <Logo
          src={LogoSrc}
          onClick={() => {
            history.push("/");
          }}
        ></Logo>
        <HeaderBtns>
          <ChatPeopleCnt type="sub_1_bold">{props.numberOfUsers}</ChatPeopleCnt>
          <StBtn
            shape="brown-outline"
            _onClick={() => {
              history.push(`/crew/${props.meetingId}`);
            }}
          >
            나가기
          </StBtn>
        </HeaderBtns>
      </HeaderBox>
    </HeaderWrap>
  );
};

export default VideoHeader;

const HeaderWrap = styled.div`
  z-index: 99999;
  width: 100%;
  height: 100px;
  padding: 20px 40px;
  background-color: #fff;
  position: fixed;
  ${flex("center", "center", true)}
`;

const HeaderBox = styled.div`
  width: 100%;
  height: 64px;
  ${flex("between", "center", true)}
`;

const Logo = styled.img`
  width: 122px;
  height: 47px;
  cursor: pointer;
`;

const HeaderBtns = styled.div`
  ${flex}
`;

const ChatPeopleCnt = styled(Eltext)`
  color: var(--point);
`;

const StBtn = styled(Elbutton)`
  width: 130px;
  height: 40px;
  margin-left: 20px;
  border-radius: 6px;
`;
