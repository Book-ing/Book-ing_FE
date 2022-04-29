import React, {useState} from "react";
import Cards from "../Components/Cards";
import { Grid } from "@mui/material";
import Modal from "react-modal";
import ModalCrew from "../Components/ModalCrew";

const Test = (props) => {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center">
      <Cards></Cards>
      <Cards></Cards>
      </Grid>
      <button onClick={() => setModalOpen(true)}>모달 열어새꺄</button>
        <ModalCrew></ModalCrew>

    </React.Fragment>
  );
};

export default Test;

