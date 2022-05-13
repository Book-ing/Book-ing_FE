import React, {useState} from "react";

import styled from "styled-components";

import {Link, useHistory} from "react-router-dom";

import { Eltext, Elcategory, Elchip } from "../elements";
import Ellocation from "../elements/Ellocation";


const CrewList = (props) => {

  const history = useHistory();
  const [checkedList, setCheckedList] = useState([]);

  return ( 
    <React.Fragment>
        <StCrewList>
          <StCrewInfo>


            <StTextBox>

              <Eltext type="sub_2_bold">
                <div style={{display:"flex", width:"100%"}}>
                  <StName>{props.meetingName}</StName>
                  <div>{props.meetingJoinedCnt}</div>
                </div>
              </Eltext>
              <Eltext type="sub_2">
              <StCrewIntro>
                {props.meetingIntro}
              </StCrewIntro>
              </Eltext>


            </StTextBox>
            <div style={{marginLeft:"10px"}}>
            <Eltext type="sub_2" color="var(--point)">
            <Ellocation>{props.meetingLocation}</Ellocation>
            </Eltext>
            </div>
            <div style={{marginLeft:"10px"}}>
            <Elcategory shape={props.meetingCategory}>
              <Eltext type="sub_2" color="white">
                {props.meetingCategory}
              </Eltext>
            </Elcategory>
            </div>

          </StCrewInfo>
          <StButton onClick = {() => window.location.replace(`/crew/${props.meetingId}`)}>
                {/* <Link to = {`/crew/${props.meetingId}`}> */}
            <Elchip shape="Fill" width="96px" height="36px">
              <Eltext type="sub_2" color="white">
                  보러가기
              </Eltext>
            </Elchip>
                {/* </Link> */}
          </StButton>
        </StCrewList>
    </React.Fragment>
  );
};

export default CrewList

const StCrewList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 99px;
  width: 1267px;
  height: 85px;
  background-color: #fbf9f9;
  margin-bottom: 15px;
  /* border: 1px solid black; */
`;

const StCrewInfo = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 15px;
  width: 500px;
  margin-left: 150px;
  /* border: 1px solid black; */
`;

const StCrewIntro = styled.div`
  display: block;
  /* border: 1px solid black; */
  width: 290px;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
 
`

const StName = styled.div`
  display: block;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;

`
const StTextBox = styled.div`
  width: 290px;
  /* border: 1px solid black; */
`;

const StButton = styled.button`
  padding-right: 63px;
  align-items: center;
  /* border: 1px solid black; */
`;