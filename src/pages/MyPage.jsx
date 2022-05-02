import React from "react";

// style
import styled from "styled-components";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

// theme
import flex from "../themes/flex";

const Mypage = () => {
  return (
    <React.Fragment>
      <MypageWrap>
        <Header />
        <CenterWrap>
          <Sidebar />
          <MainSection />
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
