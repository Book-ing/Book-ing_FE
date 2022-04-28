import React from "react";
import Card from '@mui/material/Card';
import Eltext from "../elements/Eltext";
import Elimage from "../elements/Elimage";
import styled from "styled-components";


const Cards = (props) => {

    console.log(props.image_url);
    return (
      <React.Fragment>
        {/* 버튼으로 감쌀것 */}
        {/* <button style={{
          textAlign: "left"
        }}> */}
        <Card sx={{ maxWidth: 220, height: 350 }}>
          <CardGrid>

            <ImgGrid>
              <Elimage
                shape="cardImg"
                src={props.image_url}
              />
            </ImgGrid>
            
              <Eltext type="sub_1_bold">
                <TitleGrid>
                  {props.title}
                </TitleGrid>
              </Eltext>

            <TagGrid>
              <span>{props.category}</span>
              <span>{props.location}</span>
            </TagGrid>

              <Eltext type="sub_2">
                <SubGird>
                {props.subTitle}
                </SubGird>
              </Eltext>
            
          </CardGrid>
        </Card>
      {/* </button> */}
      </React.Fragment>
    );
};

Cards.defaultProps = {
  image_url:"https://image.trevari.co.kr/f236d0ae-5845-4bbf-b31f-1eb297187d9e.png",
  category:"스포츠",
  location:"서울",
  title:"The Alchemist study",
  subTitle:"항해99 사람들이 책을 읽으러 오는 독서모임입니다. 만나서 반가워요! 재밌는 독서모임을 합시다!"
}

const CardGrid = styled.div`
  padding: 5px 11px 6px 11px;
`
const ImgGrid = styled.div`
  margin: auto;
  width:193px;
  height: 193px;
`
const TitleGrid = styled.div`
    width:197px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    padding: 8px 12px 0px 11px;
    margin: auto;
` 

const TagGrid=styled.div`
    width: 198px;
    padding: 10px 11px 0px 12px;
`

const SubGird = styled.div`
    padding: 5px 12px 6px 11px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 라인수 */
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
    line-height: 1.6em;
    height: 4.8em;
`


export default Cards;