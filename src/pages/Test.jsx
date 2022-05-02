import React, { useState } from "react";
import Header from "../components/Header";
import Slide from "../components/Slide";
import Footer from "../components/Footer";
import Slide from "../components/Slide";
import ModalCrew from "../components/Modal/ModalCrew";

import { Modal, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import { Elbutton } from "../elements";

const Test = (props) => {
  const [open, setOpen] = useState(false);

  const hadleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  return (
    <>
      <Header />
      <Slide />
      <Footer />
    </>
  );
};

export default Test;
