import React from "react";
import Card from '@mui/material/Card';
import Eltext from "../elements/Eltext";
import Elimage from "../elements/Elimage";
import styled from "styled-components";
import Elcategory from "../elements/Elcategory";
import Ellocation from "../elements/Ellocation";


const Cards = (props) => {

    // console.log(props.image_url);
    return (
      <React.Fragment>
      <StButton>

        <Card style={{ border:"none", boxShadow:"none", margin:"10px"}} variant="outlined" sx={{ maxWidth: 220, height: 350 }}>
          <CardGrid>

            <ImgGrid>
              <Elimage
                shape="cardImg"
                src={props.meetingImage}
              />
            </ImgGrid>
            
              <Eltext type="sub_1_bold">
                <TitleGrid>
                  {props.meetingName}
                </TitleGrid>
              </Eltext>

              <Eltext type="sub_2_bold">
                <TagGrid>
                  <Ellocation>
                      {props.meetingLocation}
                  </Ellocation>
                  <Elcategory shape={props.meetingCategory} color="white">
                      {props.meetingCategory}
                  </Elcategory>
                </TagGrid>
              </Eltext>

              <Eltext type="sub_2">
                <SubGird>
                  {props.meetingIntro}
                </SubGird>
              </Eltext>
            
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
    meetingImage: "https://image.trevari.co.kr/f236d0ae-5845-4bbf-b31f-1eb297187d9e.png",
    meetingIntro: "항해99 사람들이 책을 읽으러 오는 독서모임입니다. 만나서 반가워요! 재밌는 독서모임을 합시다!",
    categoryId:"construction",
}

const CardGrid = styled.div`
    width: 198px;
    height: 339px;
    /* border: 1px solid black; */
`
const ImgGrid = styled.div`
    margin: auto;
    width: 193px;
    height: 193px;
`
const TitleGrid = styled.div`
    width: 197px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 8px;
` 

const TagGrid = styled.div`
    display: flex;
    justify-content: space-between;
    width: 198px;
    height: 30px;
    margin-top: 10px;
`

const SubGird = styled.div`
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 라인수 */
    -webkit-box-orient: vertical;
    word-wrap: break-word; 
    line-height: 1.6em;
    height: 4.8em;
`

const StButton = styled.button`
  text-align: left;
`


export default Cards;