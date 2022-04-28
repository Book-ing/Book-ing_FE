import React from "react";
import Cards from "../Components/Cards";
import Elimage from "../elements/Elimage";


const Test = (props) => {
  return (
    <React.Fragment>
      <div style={{width:"500px", height:"200px"}}>
      <Elimage shape="profile" src="https://image.yes24.com/goods/73031896/XL"></Elimage>
      </div>
      <Cards></Cards>
      <Elimage shape="bookImg" src="https://image.yes24.com/goods/73031896/XL"></Elimage>
      <Elimage shape="cardImg" src="https://image.yes24.com/goods/73031896/XL"></Elimage>
    </React.Fragment>
  )
};

export default Test;

