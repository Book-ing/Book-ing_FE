import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import flex from "../themes/flex";
import Elchip from "../elements/Elchip";
import { Elimage, Eltext } from "../elements";
import Editor from "../components/Editor";

const NoteWrite = () => {
  return (
    <React.Fragment>
      <Grids>
        <Container>
          <TitleGrid>
            <Elchip shape="Fill" width="190px" height="45px">
              <Eltext type="sub_2_bold" color="white">
                스터디 책 정보
              </Eltext>
            </Elchip>
          </TitleGrid>

          <InfoGrid>
            <ImgGrid>
              <Elimage
                shape="bookImg"
                src="https://image.yes24.com/goods/73031896/XL"
              />
            </ImgGrid>
            <InfoBox>
              <Eltext type="sub_2_bold">책 제목: 혼자서 본 영화</Eltext>
              <br />
              <Eltext type="sub_2">지은이: 정희진</Eltext>
              <br />
              <Eltext type="sub_2">출판사: 고향인</Eltext>
              <br />
              <Eltext type="sub_2">책 소개</Eltext>
              <Eltext type="sub_2">
                『혼자서 본 영화』는 한국 페미니즘 담론의 최전선에 서 있는
                여성학자이자 ‘영화광’인 정희진이 20년 동안 꼭꼭 쌓아 둔 영화에
                관한 내밀한 기록이다. 저자가 ‘내 인생의 영화들’로 꼽는 28편의
                영화가 담겼다. 정희진에게 영화는 기분 전환이나 휴식을 위한 것이
                아니라 자신의 외로움과 고통을 있는 그대로 바라보고 그 괴로움
                속에서 삶을 살아갈 힘을 얻는 치열한 인식 활동이다. ‘혼자서
                영화를 본다’는 것은 영화와 홀로 대면하여 자신만의 눈으로 보고
                해석하는 일이며, 나와 대화하고 관계를 맺는 일이다. 영화와 나만
                있는 ‘자기만의 세계’로 들어가 영화 속 인물과 만나고 그 인물을
                통해 나를 발견하고, 나의 내면과 상처를 들여다보는 일이다.
                『혼자서 본 영화』는 ‘나에게 말 걸기’이자 ‘타인에게 말 걸기’의
                기록이다.
              </Eltext>
            </InfoBox>
          </InfoGrid>

          <TitleGrid>
            <Elchip shape="Fill" width="190px" height="45px">
              <Eltext type="sub_2_bold" color="white">
                스터디 노트
              </Eltext>
            </Elchip>
          </TitleGrid>

          <EditGrid>
            <Editor />
          </EditGrid>

          <BtnGrid>
            <Elchip shape="LineBtn" width="148px" height="45px">
              게시하기
            </Elchip>
          </BtnGrid>
        </Container>
      </Grids>
    </React.Fragment>
  );
};

const Grids = styled.div`
  width: 1440px;
  height: 1964px;
  border: 1px solid #815854;
  padding: 58px 95px 58px 94px;
  margin: auto;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid #815854; */
  ${flex("start", "center", false)}
`;

const TitleGrid = styled.div`
  width: 100%;
  height: 45px;
  /* border: 1px solid #815854; */
`;

const InfoGrid = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
`;
const ImgGrid = styled.div`
  width: 195px;
  height: 285px;
  margin: 20px 50px 50px 30px;
`;
const InfoBox = styled.div`
  width: 970px;
  height: 285px;
  margin-top: 20px;
  padding-right: 150px;
`;

const EditGrid = styled.div`
  margin-top: 20px;
`;

const BtnGrid = styled.div`
  margin-top: 150px;
`;

export default NoteWrite;
