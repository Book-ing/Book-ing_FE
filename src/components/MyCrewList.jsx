import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

<<<<<<< HEAD
import { Eltext, Elchip, Elbutton } from "../elements";

import flex from "../themes/flex";

const MyCrewList = (props) => {
  const history = useHistory();
  console.log(props);

  return (
    <React.Fragment>
      {props.studyType === 301 ? (
        <StMyCrewStudyList>
          <StOnlineStudyListBox>
            <StOnlineStudyInfoBox>
              <StudyTypeOnlineTag type="sub_2_bold">온라인</StudyTypeOnlineTag>

              <Eltext type="sub_2_bold">
                <div title={props.studyTitle}>
                  <StStudyTitleBox>
                    스터디명 : {props.studyTitle}
                  </StStudyTitleBox>
                </div>
              </Eltext>
              <Eltext type="body_5">일 시 : {props.studyDateTime}</Eltext>
            </StOnlineStudyInfoBox>

            <StOnlineStudyBtnsBox>
              <Eltext type="sub_2_bold">
                <Elchip shape="Line" width="96px" height="30px">
                  {props.studyLimitCnt}
                </Elchip>
              </Eltext>

              <Gobtn
                shape="brown-outline"
                onClick={() => {
                  history.push({
                    pathname: `/crew/${props.meetingId}`,
                    search: `?study=${props.studyId}`,
                  });
                }}
              >
                바로가기
              </Gobtn>
              {/* </div> */}
            </StOnlineStudyBtnsBox>
          </StOnlineStudyListBox>
        </StMyCrewStudyList>
      ) : (
        <StMyCrewStudyList>
          <StOfflineStudyListBox>
            <StOfflineStudyInfoBox>
              <StudyTypeOfflineTag type="sub_2_bold">
                오프라인
              </StudyTypeOfflineTag>

              <Eltext type="sub_2_bold">
                <div title={props.studyTitle}>
                  <StStudyTitleBox>
                    스터디명 : {props.studyTitle}
                  </StStudyTitleBox>
                </div>
              </Eltext>

              <div style={{ height: "50px", marginTop: "-4px" }}>
                <Eltext type="body_5">
                  금 액 : {props.studyPrice}
                  <br />일 시 : {props.studyDateTime}
                </Eltext>

                <Eltext type="body_5">
                  <div title={props.studyAddr}>
                    <StLocationText>위 치 : {props.studyAddr}</StLocationText>
                  </div>
                </Eltext>
              </div>
            </StOfflineStudyInfoBox>

            <StOfflineStudyBtnsBox>
              <Eltext type="sub_2_bold">
                <Elchip shape="Line" width="96px" height="30px">
                  {props.studyLimitCnt}
                </Elchip>
              </Eltext>

              <Gobtn
                shape="brown-outline"
                onClick={() => {
                  history.push({
                    pathname: `/crew/${props.meetingId}`,
                    search: `?study=${props.studyId}`,
                  });
                }}
              >
                바로가기
              </Gobtn>
            </StOfflineStudyBtnsBox>
          </StOfflineStudyListBox>
        </StMyCrewStudyList>
      )}
    </React.Fragment>
  );
};
=======
import { Eltext, Elchip } from "../elements";

import flex from "../themes/flex";

const MyCrewList = (props) => {

  const history = useHistory();
  console.log(props)

{/* <StudyTypeOnlineTag>온라인</StudyTypeOnlineTag>
                <StudyTypeOfflineTag>오프라인</StudyTypeOfflineTag> */}

return (
  <React.Fragment>
    {props.studyType === 301 ? (

      <StMyCrewStudyList>
        <StOnlineStudyListBox>
          <StOnlineStudyInfoBox>
        
        
      <StudyTypeOnlineTag type="sub_2_bold">온라인</StudyTypeOnlineTag>
      
          <Eltext type="sub_2_bold">
          <div title={props.studyTitle}>
            <StStudyTitleBox>
              스터디명 : {props.studyTitle}
            </StStudyTitleBox>
          </div>
          </Eltext>
          <Eltext type="body_5">
            일 시 : {props.studyDateTime}
          </Eltext>

          </StOnlineStudyInfoBox>
        
        
        <StOnlineStudyBtnsBox>
        

            <Eltext type="sub_2_bold">
          <Elchip shape="Line" width="96px" height="30px">
              {props.studyLimitCnt}
          </Elchip>
            </Eltext>

          <Elchip shape="LineBtn" fontSize="30px" width="96px" height="30px" onClick={()=>{history.push({
           pathname: `/crew/${props.meetingId}`,
           search : `?study=${props.studyId}`
          })}}>
            <div style={{fontSize:"16px", fontWeight:"600"}}>
            바로가기
            </div>
          </Elchip>

        
          </StOnlineStudyBtnsBox>
        </StOnlineStudyListBox>
      </ StMyCrewStudyList>

    ) : (<StMyCrewStudyList>
              
              <StOfflineStudyListBox>
                <StOfflineStudyInfoBox>
           
                <StudyTypeOfflineTag type="sub_2_bold">오프라인</StudyTypeOfflineTag>
             
                  <Eltext type="sub_2_bold">
                    <div title= {props.studyTitle}> 
                      <StStudyTitleBox>
                        스터디명 : {props.studyTitle}
                      </StStudyTitleBox>
                    </div>  
                  </Eltext>

                <div style={{height:"50px", marginTop:"-4px"}}>
                  <Eltext type="body_5">
                    금 액 : {props.studyPrice}
                    <br />일 시 : {props.studyDateTime}
                  </Eltext>

                  <Eltext type="body_5">
                    <div title={props.studyAddr}>
                      <StLocationText>
                        위 치 : {props.studyAddr}
                      </StLocationText>
                    </div>
                  </Eltext>
                  </div>
                  </StOfflineStudyInfoBox>
                
                
                
                <StOfflineStudyBtnsBox>

                    <Eltext type="sub_2_bold">
                  <Elchip shape="Line" width="96px" height="30px">
                      {props.studyLimitCnt}
                  </Elchip>
                    </Eltext>

                  <Elchip shape="LineBtn" fontSize="30px" width="96px" height="30px" onClick={()=>{history.push({
                    pathname: `/crew/${props.meetingId}`,
                    search : `?study=${props.studyId}`
                    })}}>
                    <div style={{fontSize:"16px", fontWeight:"600"}}>
                    바로가기
                    </div>
                  </Elchip>

                  </StOfflineStudyBtnsBox>
                </StOfflineStudyListBox>
            </ StMyCrewStudyList> 
            )}
  </React.Fragment>
)}
>>>>>>> 413a052 (page(Main): 작업중 DB 재배치를 위해 커밋)

export default MyCrewList;

const StMyCrewStudyList = styled.div`
  width: 690px;
  height: 100px;
  margin-bottom: 20px;
<<<<<<< HEAD
  background-color: #fbf9f9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const StOnlineStudyListBox = styled.div`
  display: flex;
  width: 535px;
  height: 75px;
  margin-left: 77px;
  padding-top: 20px;
`;
const StOnlineStudyInfoBox = styled.div`
  width: 320px;
  height: 75px;
`;
const StStudyTitleBox = styled.div`
  width: 320px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StOnlineStudyBtnsBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 220px;
  height: 30px;
  margin-top: 15px;
`;

const StudyTypeOnlineTag = styled(Eltext)`
  ${flex}
  width: 80px;
  padding-bottom: 2px;
  height: 20px;
  border-radius: 4px;
  background-color: #c9998d;
  color: white;
`;

const StOfflineStudyListBox = styled.div`
  display: flex;
  width: 535px;
  height: 100px;
  margin-left: 77px;
  padding-top: 2px;
`;
const StOfflineStudyInfoBox = styled.div`
  margin-top: 3px;
  width: 320px;
  height: 100px;
`;

const StOfflineStudyBtnsBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 220px;
  height: 30px;
  margin-top: 30px;
`;

const StLocationText = styled.div`
  width: 320px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: -1px;
  /* &:hover {
    overflow: visible;
  } */
`;

const StudyTypeOfflineTag = styled(Eltext)`
  ${flex}
  width: 80px;
  padding-bottom: 2px;
  height: 20px;
  border-radius: 4px;
  background-color: #839893;
  color: white;
`;

const Gobtn = styled(Elbutton)`
  font-size: 16px;
  width: 96px;
  height: 30px;
  border-radius: 5px;
`;
=======
  background-color: #FBF9F9;
  /* padding-top: 12px; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
<<<<<<< HEAD
>>>>>>> 413a052 (page(Main): 작업중 DB 재배치를 위해 커밋)
=======
const StOnlineStudyListBox = styled.div`
  display: flex;
  width: 535px;
  height: 75px;
  margin-left: 77px;
  padding-top: 20px;
  /* border: 1px solid black; */
`
const StOnlineStudyInfoBox = styled.div`
  width: 320px;
  height: 75px;
  /* border: 1px solid black; */
`
const StStudyTitleBox = styled.div`
  width: 320px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* &:hover {
    overflow: visible;
  } */
`

const StOnlineStudyBtnsBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 220px; 
  height: 30px;
  margin-top: 15px;
`

const StudyTypeOnlineTag = styled(Eltext)`
  ${flex}
  width: 80px;
  padding-bottom: 2px;
  height: 20px;
  border-radius: 4px;
  background-color: #c9998d;
  color: white;
`;

const StOfflineStudyListBox = styled.div`
  display: flex;
  width: 535px;
  height: 100px;
  margin-left: 77px;
  padding-top: 2px;
  /* border: 1px solid black; */
`
const StOfflineStudyInfoBox = styled.div`
  margin-top: 3px;
  width: 320px;
  height: 100px;
  /* border: 1px solid black; */
`
// const StStudyTitleBox = styled.div`
//   width: 320px;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
// `

const StOfflineStudyBtnsBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 220px; 
  height: 30px;
  margin-top: 30px;
`

const StLocationText = styled.div`
  width:320px;
  overflow: hidden;
  text-overflow: ellipsis; 
  white-space: nowrap; 
  margin-top: -1px;
  /* &:hover {
    overflow: visible;
  } */
`

const StudyTypeOfflineTag = styled(Eltext)`
  ${flex}
  width: 80px;
  padding-bottom: 2px;
  height: 20px;
  border-radius: 4px;
  background-color: #839893;
  color: white;
`;
<<<<<<< HEAD
>>>>>>> 04777ba (page(Main): 작업 완료 후 커밋)
=======
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
