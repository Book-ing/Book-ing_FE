import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// module
import { actionCreators as userActions } from "../redux/modules/user";

// style
import styled from "styled-components";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

// theme
import flex from "../themes/flex";
import MyCrew from "../components/MyCrew";
import MyStudy from "../components/MyStudy";
import { useLocation } from "react-router-dom";

const Mypage = () => {
  // const dispatch = useDispatch();
  const location = useLocation();

  const status = location.state;
  console.log(status);

  // const [status, setStatus] = useState(true);

  const [isMyCrew, setIsMyCrew] = useState(true);

<<<<<<< HEAD
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
=======
// ==================== 민우님이 요청한 loginCheckDB ========================
  // useEffect(() => {
  //   dispatch(userActions.loginCheckDB());
  // }, []);
// ==================== 민우님이 요청한 loginCheckDB ========================
>>>>>>> 4017e03 (page(Mypage): 내가 참여한 스터디 불러오는 기능 전까지 구현)

  useEffect(() => {
    status === undefined ?
    setIsMyCrew(true) : setIsMyCrew(false);
  }, []);


  return (
    <React.Fragment>
      <MypageWrap>
        <CenterWrap>
          <Sidebar clickText={setIsMyCrew} />
          <MainSection>
            {isMyCrew === true ? <MyCrew /> : <MyStudy />}
          </MainSection>
        </CenterWrap>
      </MypageWrap>
    </React.Fragment>
  );
};

export default Mypage;

const MypageWrap = styled.div`
  ${flex("center", "center", false)}

  max-width: 1440px;
  height: 1240px;
  //height: 100vh;
  margin: auto;
`;

const CenterWrap = styled.div`
  ${flex("center", "center", true)}
  width:100%;
  height: 100%;
`;

const MainSection = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--main);
`;
