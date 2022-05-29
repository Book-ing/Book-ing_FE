import React from "react";
import Card from "@mui/material/Card";
import Eltext from "../elements/Eltext";
import Elimage from "../elements/Elimage";
import Elchip from "../elements/Elchip";
import styled from "styled-components";
import Elcategory from "../elements/Elcategory";
import Ellocation from "../elements/Ellocation";
import { history } from "../redux/configStore";

const Cards = (props) => {
  // console.log(props.image_url);
  return (
    <React.Fragment>
      <StButton>
        <Card
          onClick={() => {
            history.push(`/crew/${props.meetingId}`);
          }}
          style={{ border: "none", boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px", margin: "10px 0px 0px 35px" }}
          variant="outlined"
          sx={{ maxWidth: 325, height: 520 }}
        
        >
          <CardGrid>
          
            <Eltext type="sub_2_bold">
              <TagGrid>

                <Ellocation width="85px" height="25px">
                  {props.meetingLocation}
                </Ellocation>

                <Elcategory 
                shape={props.meetingCategory} color="white" width="85px" height="25px">
<<<<<<< HEAD
<<<<<<< HEAD
                  <div style={{paddingBottom:"2px"}}>
                  {props.meetingCategory}
                  </div>
=======
                  {props.meetingCategory}
>>>>>>> c84d771 (components(Card): Card 컴포넌트 작성 후 커밋)
=======
                  <div style={{paddingBottom:"2px"}}>
                  {props.meetingCategory}
                  </div>
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
                </Elcategory>

              </TagGrid>
            </Eltext>
            
            <ImgGrid>
              <Elimage shape="cardImg" src={props.meetingImage} />
            </ImgGrid>
           
          <div style={{marginLeft:"17px", width:"290px", height:"145px", marginTop:"-15px"}}>

            <Eltext type="head_8_bold">
              <TitleGrid>{props.meetingName}</TitleGrid>
            </Eltext>

          <div style={{ display: "flex", width: "265px",
           justifyContent:"space-between"}}>
            <Elchip width="125px" shape="Fill" height="25px">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 04777ba (page(Main): 작업 완료 후 커밋)
              <Eltext type="sub_2_bold" color="white">
                <div style={{paddingBottom:"1px"}}>
                  현재인원 : {props.meetingPeopleCnt}명
                </div>
<<<<<<< HEAD
=======
             <Eltext type="sub_2_bold" color="white">
<<<<<<< HEAD
              현재인원 : 13명
>>>>>>> c84d771 (components(Card): Card 컴포넌트 작성 후 커밋)
=======
              현재인원 : {props.meetingPeopleCnt}명
>>>>>>> 413a052 (page(Main): 작업중 DB 재배치를 위해 커밋)
=======
>>>>>>> 04777ba (page(Main): 작업 완료 후 커밋)
              </Eltext>
            </Elchip>

            <Elchip width="125px" shape="Fill" height="25px">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 04777ba (page(Main): 작업 완료 후 커밋)
              <Eltext type="sub_2_bold" color="white">
                <div style={{paddingBottom:"1px"}}>
                  스터디 : {props.meetingStudyCnt}개
                </div>
<<<<<<< HEAD
=======
             <Eltext type="sub_2_bold" color="white">
<<<<<<< HEAD
              스터디 : 3개
>>>>>>> c84d771 (components(Card): Card 컴포넌트 작성 후 커밋)
=======
              스터디 : {props.meetingStudyCnt}개
>>>>>>> 413a052 (page(Main): 작업중 DB 재배치를 위해 커밋)
=======
>>>>>>> 04777ba (page(Main): 작업 완료 후 커밋)
              </Eltext>
            </Elchip>
          </div>

            <Eltext type="body_3">
              <SubGird>{props.meetingIntro}</SubGird>
            </Eltext>
            
          </div> 

          <div style={{ marginTop:"6px", width:"325px", height:"50px", boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.1)", border:"1px solid white" }}>

             <div style={{width:"290px", height:"40px", 
             marginTop:"6px", marginLeft:"17px", }}>
              <Eltext type="body_2_bold" color="point">
                최근 스터디
              </Eltext>
              <Eltext type="body_3">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <div style={{marginTop:"-5px"}}>
                {props.isMeetingRecruit} &nbsp;|&nbsp; {props.meetingLastStudyTime}
                </div>
=======
                모집 중 &nbsp;|&nbsp; 2022.06.03 &#40;금&#41; PM 06:00
>>>>>>> c84d771 (components(Card): Card 컴포넌트 작성 후 커밋)
=======
                {props.isMeetingRecruit} &nbsp;|&nbsp; {props.meetingLastStudyTime}
>>>>>>> 413a052 (page(Main): 작업중 DB 재배치를 위해 커밋)
=======
                <div style={{marginTop:"-5px"}}>
                {props.isMeetingRecruit} &nbsp;|&nbsp; {props.meetingLastStudyTime}
                </div>
>>>>>>> 490fc3e (page(Main): 수정사항 반영 후 커밋)
              </Eltext>

              </div>

             </div>
          {/* </div> */}
          </CardGrid>
        </Card>
      </StButton>
    </React.Fragment>
  );
};

Cards.defaultProps = {
  meetingName: "The Alchemist study",
  meetingCategory: "에세이",
  meetingLocation: "경기",
  meetingImage:
  "https://image.trevari.co.kr/f236d0ae-5845-4bbf-b31f-1eb297187d9e.png",
  meetingIntro:
  "항해99 사람들이 책을 읽으러 오는 독서모임입니다. 만나서 반가워요! 재밌는 독서모임을 합시다!",
  categoryId: "construction",
};

export default Cards;

const CardGrid = styled.div`
  width: 325px;
  height: 520px;
  /* border: 1px solid black; */
  background-color: var(--white);
`;
const ImgGrid = styled.div`
  position: relative;
<<<<<<< HEAD
<<<<<<< HEAD
  margin: 9px 17px 0px 20px;
=======
  margin: 9px 17px 0px 17px;
>>>>>>> c84d771 (components(Card): Card 컴포넌트 작성 후 커밋)
=======
  margin: 9px 17px 0px 20px;
>>>>>>> 7b21e18 (develop_online: WebRTC 버전관리 따로위한 브랜치 생성 커밋)
  top:-35px;
  width: 285px;
  height: 285px;
  /* border: 1px solid black; */
`;
const TitleGrid = styled.div`
  width: 290px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* border: 1px solid black; */
`;

const TagGrid = styled.div`
  position: relative;
  top: 20px;
<<<<<<< HEAD
<<<<<<< HEAD
  left: 23px;
=======
  left: 20px;
>>>>>>> c84d771 (components(Card): Card 컴포넌트 작성 후 커밋)
=======
  left: 23px;
>>>>>>> 7b21e18 (develop_online: WebRTC 버전관리 따로위한 브랜치 생성 커밋)
  z-index: 2;
  display: flex;
  justify-content: space-between;
  width: 175px;
  height: 30px;
  margin-top: 10px;
  /* border: 1px solid black; */
`;

const SubGird = styled.div`
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.6em;
  height: 65px;
  /* border: 1px solid black; */
`;

const StButton = styled.button`
  text-align: left;
  /* border: 1px solid black; */
`;
