import React from "react";
import Cards from "../components/Cards";
import { Grid } from "@mui/material";
import Elcategory from "../elements/Elcategory";
import { Eltext } from "../elements";


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
            <Eltext type="sub_2_bold">
              <Elcategory type="novel">
                  소설
              </Elcategory>
            </Eltext>
      </Grid>
      
    </React.Fragment>
  );
};

export default Test;

