import React from "react";
import Cards from "../Components/Cards";
import { Grid } from "@mui/material";


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
      </Grid>
      
    </React.Fragment>
  );
};

export default Test;

