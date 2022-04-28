import React from "react";
import Cards from "../Components/Cards";
import { Grid } from "@mui/material";
import Elcategory from "../elements/Elcategory";
import Eltext from "../elements/Eltext"
import Ellocation from "../elements/Ellocation";


const Test = (props) => {
  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center">
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      </Grid>
    </React.Fragment>
  )
};

export default Test;

