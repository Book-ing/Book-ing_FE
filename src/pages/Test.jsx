import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slide from "../components/Slide";
import ModalCrew from "../components/Modal/ModalCrew";

import { Modal, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import { Elbutton } from "../elements";
import ElcategoryRadio from "../elements/ElcategoryRadio";
import Accordion from "../components/Accordion";

const Test = (props) => {
  const [open, setOpen] = useState(false);

  const hadleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  return (
    <>
      <Header />
      <Slide />
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
      <ElcategoryRadio />
      <StAccordion>
        <Accordion></Accordion>
        <Accordion></Accordion>
      </StAccordion>
      <Footer />
    </>
  );
};

export default Test;

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

const StAccordion = styled.div`
  margin: auto;
  width: 1440px;
  height: 500px;
`
