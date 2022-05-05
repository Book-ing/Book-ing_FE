import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slide from "../components/Slide";
import ModalCrew from "../components/Modal/ModalCrew";
import Cards from "../components/Cards";

import { Modal, Box, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";

import { Elbutton, Eltext, Elchip } from "../elements";

const Main = (props) => {
  const [open, setOpen] = useState(false);

  const hadleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  return (
    <>
      <Header />
      <Slide />
      <Container>
        <ModalBtnGrid>
          <ModalOpenBtn shape="brown-outline" onClick={hadleModalOpen}>
            모임 생성하기
          </ModalOpenBtn>
          <Modal open={open}>
            <Box sx={style} style={{ position: "relative" }}>
              <ModalCloseBtn onClick={handleModalClose}>
                <CloseIcon fontSize="large" />
              </ModalCloseBtn>
              <ModalCrew />
            </Box>
          </Modal>
        </ModalBtnGrid>

        <TitleGrid>
          <Elchip shape="Fill" width="96px" height="35px">
            <Eltext type="sub_2_bold" color="white">
              내 모임
            </Eltext>
          </Elchip>
        </TitleGrid>

        <MyCrewGrid>
          <CardGrid>
            <Cards />
          </CardGrid>
          <PhraseGrid>
            <Eltext type="head_6_bold" color="rgba(40, 34, 36, 0.5)">
              마음의 양식을 쌓아볼까요?
            </Eltext>
          </PhraseGrid>
        </MyCrewGrid>
      </Container>

      <CrewGroupGrid>
        <TitleGridA>
          <Elchip shape="Fill" width="170px" height="35px">
            <Eltext type="sub_2_bold" color="white">
              오늘 스터디하는 모임
            </Eltext>
          </Elchip>
        </TitleGridA>
        <GroupGrid>
          <CardGrid>
            <Cards />
          </CardGrid>
          <CardGrid>
            <Cards />
          </CardGrid>
          <CardGrid>
            <Cards />
          </CardGrid>
          <CardGrid>
            <Cards />
          </CardGrid>
          <CardGrid>
            <Cards />
          </CardGrid>
        </GroupGrid>
        <TitleGrid>
          <Elchip shape="Fill" width="120px" height="35px">
            <Eltext type="sub_2_bold" color="white">
              인기쟁이 모임
            </Eltext>
          </Elchip>
        </TitleGrid>
        <GroupGrid>
          <CardGrid>
            <Cards />
          </CardGrid>
          <CardGrid>
            <Cards />
          </CardGrid>
          <CardGrid>
            <Cards />
          </CardGrid>
          <CardGrid>
            <Cards />
          </CardGrid>
          <CardGrid>
            <Cards />
          </CardGrid>
        </GroupGrid>
        <TitleGrid>
          <Elchip shape="Fill" width="120px" height="35px">
            <Eltext type="sub_2_bold" color="white">
              딱-끈한 모임
            </Eltext>
          </Elchip>
        </TitleGrid>
        <GroupGrid>
          <CardGrid>
            <Cards />
          </CardGrid>
          <CardGrid>
            <Cards />
          </CardGrid>
          <CardGrid>
            <Cards />
          </CardGrid>
          <CardGrid>
            <Cards />
          </CardGrid>
          <CardGrid>
            <Cards />
          </CardGrid>
        </GroupGrid>
      </CrewGroupGrid>
      <Footer />
    </>
  );
};

export default Main;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "1300px",
  height: "906px",
  bgcolor: "#fbf9f9",
  border: "1px solid var(--point)",
  boxShadow: 24,
  borderRadius: "5px",
};

const ModalOpenBtn = styled(Elbutton)`
  width: 147px;
  height: 35px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const ModalCloseBtn = styled.button`
  position: absolute;
  right: 160px;
  top: 30px;
`;

const ModalBtnGrid = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 62px 73px 0px 0px;
  /* border: 1px solid black; */
`;

const TitleGrid = styled.div`
  width: 100%;
  height: 45px;
  margin: 20px 0 0 15px;
  /* border: 1px solid #815854; */
`;

const TitleGridA = styled.div`
  width: 100%;
  height: 45px;
  margin-left: 15px;
  /* border: 1px solid #815854; */
`;

const Container = styled.div`
  margin: auto;
  padding-left: 80px;
  width: 95vw;
  max-width: 1440px;
  height: 600px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  /* border: 1px solid black; */
`;

const CardGrid = styled.div`
  width: 235px;
  height: 365px;
  margin: 10px 30px 0 0px;
  /* border: 1px solid black; */
`;

const MyCrewGrid = styled.div`
  display: flex;
  /* border: 1px solid black; */
`;

const PhraseGrid = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 70px;
  color: rgba(40, 34, 36, 0.5);
  /* border: 1px solid black; */
`;

const CrewGroupGrid = styled.div`
  padding: 85px 0 0 80px;
  margin: auto;
  width: 95vw;
  max-width: 1440px;
  height: 1515px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const GroupGrid = styled.div`
  display: flex;
  /* margin-left: 40px; */
`;
