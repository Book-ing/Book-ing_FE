import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { Eltext, Elchip } from "../elements";

const MyCrewList = (props) => {

  const history = useHistory();
  // console.log(props)

return (
  <React.Fragment>
    <StMyCrewStudyList>
              <div style={{display:"flex", width:"535px", height:"75px", marginLeft:"77px"}}>
                
                <div style={{width:"320px", height:"75px"}}>

                  <Eltext type="sub_2_bold">
                    <div style={{width:"320px", overflow:"hidden",textOverflow:"ellipsis", whiteSpace:"nowrap"}}>
                      스터디명 : {props.studyTitle}
                    </div>
                  </Eltext>
                  <Eltext type="body_5">
                    금 액 : {props.studyPrice}
                    <br />일 시 : {props.studyDateTime}
                  </Eltext>

                  <Eltext type="body_5">
                    <div style={{width:"320px", overflow:"hidden",textOverflow:"ellipsis", whiteSpace:"nowrap"}}>
                      위 치 : {props.studyAddr}
                    </div>
                  </Eltext>

                </div>
                
                
                
                <div style={{display:"flex", justifyContent:"space-between", width:"220px", height:"30px", marginTop:"25px"}}>

                    <Eltext type="sub_2_bold">
                  <Elchip shape="Line" width="96px" height="30px">
                      {props.studyLimitCnt}
                  </Elchip>
                    </Eltext>

                  <Elchip shape="LineBtn" fontSize="30px" width="96px" height="30px" onClick={()=>{history.push(`/crew/${props.meetingId}`)}}>
                    <div style={{fontSize:"16px", fontWeight:"600"}}>
                    바로가기
                    </div>
                  </Elchip>

                </div>
              </div>
            </ StMyCrewStudyList>
  </React.Fragment>
)}

export default MyCrewList;

const StMyCrewStudyList = styled.div`
  width: 690px;
  height: 100px;
  margin-bottom: 20px;
  background-color: #FBF9F9;
  padding-top: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`