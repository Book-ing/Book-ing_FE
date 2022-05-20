import React, {useRef} from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import flex from "../themes/flex";
import Elchip from "../elements/Elchip";
import { Elimage, Eltext } from "../elements";
import Editor from "../components/Editor";
import WygiwysEditor from "../components/WygiwysEditor.jsx";
import book from "../redux/modules/book";

const NoteWrites = () => {
  const location = useLocation();
  
  
  // hitory.push로 전 페이지에서 data를 가지고 오는 작업
  const bookInfo = location.state.bookInfo.props;
  const meetingId = location.state.meetingId.meetingId;
  console.log(bookInfo)
  console.log(meetingId)

  const studyInfo={
    studyId: bookInfo.studyId,
    masterId: bookInfo.studyMasterProfile.userId,
    studyValue: bookInfo.studyNote,
    meetingId: meetingId
  }

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
                src={bookInfo.studyBookImg}
              />
            </ImgGrid>
            <InfoBox>
              <Eltext type="sub_2_bold">책 제목: {bookInfo.studyBookTitle}</Eltext>
              <br />
              <Eltext type="sub_2">지은이: {bookInfo.studyBookWriter}</Eltext>
              <br />
              <Eltext type="sub_2">출판사: {bookInfo.studyBookPurblisher}</Eltext>
              <br />
              <Eltext type="sub_2">책 소개</Eltext>
              <Eltext type="sub_2">
                {bookInfo.studyBookInfo}...
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
          <WygiwysEditor studyInfo={studyInfo}/>
          </EditGrid>

          
        </Container>
      </Grids>
    </React.Fragment>
  );
};

const Grids = styled.div`
  width: 1440px;
  height: 1914px;
  /* border: 1px solid #815854; */
  padding: 58px 95px 58px 94px;
  background-color: #FBF9F9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
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
  width: 1220px;
  margin-top: 20px;
  /* border: 1px solid black; */
`;

// const BtnGrid = styled.div`
//   margin-top: 150px;
// `;

export default NoteWrites;