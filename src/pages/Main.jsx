import React from "react";
import Elimage from "../elements/Elimage";

const Main = (props) => {
  return <div>Main
    <Elimage shape="rectangle" src={props.src}/>
  </div>;
};

export default Main;
