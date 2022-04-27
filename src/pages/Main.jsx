import React from "react";
import Elimage from "../elements/Elimage";

const Main = (props) => {
  return <div>Main
  <div style={{width:"190px", height:"190px", border:"solid 2px black"}}>
    <Elimage shape="profile" src={props.src}/>
    <div>모임이름</div>
  </div>
  <div style={{width:"207px", height:"299px", border:"solid 2px black"}}>
    <Elimage shape="bookImg" src={props.src}/>
  </div>
  <div style={{width:"206px", height:"179px", border:"solid 2px black"}}>
    <Elimage shape="cardImg" src={props.src}/>
  </div>
  </div>;
};

export default Main;
