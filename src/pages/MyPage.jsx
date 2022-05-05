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

const Mypage = () => {
  const dispatch = useDispatch();
  const [isMyCrew, setIsMyCrew] = useState(true);

  useEffect(() => {
    dispatch(userActions.loginCheckDB());
  }, []);

  return (
    <React.Fragment>
      <MypageWrap>
        <Header />
        <CenterWrap>
          <Sidebar clickText={setIsMyCrew} />
          <MainSection>
            {isMyCrew === true ? <MyCrew /> : <MyStudy />}
          </MainSection>
        </CenterWrap>
        <Footer />
      </MypageWrap>
    </React.Fragment>
  );
};

export default Mypage;

const MypageWrap = styled.div`
  ${flex("center", "center", false)}

  max-width: 1440px;
  height: 100vh;
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
