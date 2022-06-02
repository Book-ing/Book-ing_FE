import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configStore";
import { useLocation } from "react-router-dom";

// components
import VideoHeader from "../components/Video/VideoHeader";
import styled from "styled-components";
import Video from "../components/Video/Video";

// elements
import { Eltext } from "../elements";

// themes
import flex from "../themes/flex";

// mui
import {
  BsFillMicFill,
  BsFillMicMuteFill,
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
} from "react-icons/bs";
import { Avatar } from "@mui/material";

// react-icons
import { MdScreenShare, MdStopScreenShare } from "react-icons/md";

const Room = (props) => {
  const location = useLocation();
  const studyData = props.location.state.studyData;
  const nickname = localStorage.getItem("username");
  const [soundOn, setSoundOn] = useState(false);
  const [videoOn, setVideoOn] = useState(false);
  const [shared, setShared] = useState(false);
  const [numberOfUsers, setNumberOfUsers] = React.useState("1/10");

  const childRef = React.useRef();
  const changeNumberOfUsers = (text) => {
    setNumberOfUsers(text);
  };

  const setSound = () => {
    setSoundOn(!soundOn);
    childRef.current.handleMuteClick();
  };

  const setVideo = () => {
    setVideoOn(!videoOn);
    childRef.current.handleCameraClick();
  };

  const setShareScreen = () => {
    setShared(!shared);
    childRef.current.shareScreen();
  };

  const studyDate = location.state.studyData.studyDateTime;
  const [splitedStudyDate, splitedTime] = studyDate.split(" ");
  const [splitedYY, splitedMM, splitedDD] = splitedStudyDate.split("-");

  console.log(location.state.studyData);

  return (
    <RoomWrap>
      <VideoHeader
        numberOfUsers={numberOfUsers}
        meetingId={location.state.meetingId}
        studyData={studyData}
      />
      <MainWrap>
        <StudyInfoSection>
          <TestDivBox>
            <BookBox>
              <Avatar
                sx={{ width: "150px", height: "220px" }}
                variant="square"
                src={location.state.studyData.studyBookImg}
              />
              {location.state.studyData.studyBookTitle === "" ? (
                <NoneNoteText type="sub_2">
                  해당 스터디에는 모임장이 등록한
                  <br />책 정보가 없습니다😢
                </NoneNoteText>
              ) : (
                <BookInfoTextBox>
                  <Eltext type="sub_2_bold">
                    책 제목 : {location.state.studyData.studyBookTitle}
                  </Eltext>
                  <Eltext type="sub_2">
                    지은이 : {location.state.studyData.studyBookWriter}
                  </Eltext>
                  <Eltext type="sub_2">
                    출판사 : {location.state.studyData.studyBookPublisher}
                  </Eltext>
                </BookInfoTextBox>
              )}
            </BookBox>
            <InfoTextBox>
              <StudyTitleBox>
                <StudyInfoNameTag>스터디 제목</StudyInfoNameTag>
                <Eltext type="body_3">
                  {location.state.studyData.studyTitle}
                </Eltext>
              </StudyTitleBox>
              <StudyDateBox>
                <StudyInfoNameTag>스터디 일시</StudyInfoNameTag>
                <Eltext type="body_3">
                  {splitedYY}년 {splitedMM}월 {splitedDD}일 {splitedTime}
                </Eltext>
              </StudyDateBox>
              <StudyNoticeBox>
                <StudyInfoNameTag>스터디 공지</StudyInfoNameTag>
                <div style={{ padding: "10px 0 0 14px" }}>
                  <Eltext type="body_3">
                    {location.state.studyData.studyNotice}
                  </Eltext>
                </div>
              </StudyNoticeBox>
            </InfoTextBox>
          </TestDivBox>
        </StudyInfoSection>
        <DIV>
          <VideoWrap>
            <Video
              nickname={nickname}
              changeNumberOfUsers={changeNumberOfUsers}
              ref={childRef}
              meetingId={location.state.meetingId}
            ></Video>
            {/* <SharedVideoSection id="sharedScreenSection"></SharedVideoSection> */}
          </VideoWrap>

          <SoundBtn>
            <BtnWrap>
              <Btn onClick={setSound}>
                {soundOn ? (
                  <>
                    <BsFillMicMuteFill style={{ color: "#A0001A" }} />
                  </>
                ) : (
                  <>
                    <BsFillMicFill />
                  </>
                )}
              </Btn>
              <Btn onClick={setVideo}>
                {videoOn ? (
                  <>
                    <BsFillCameraVideoOffFill style={{ color: "#A0001A" }} />
                  </>
                ) : (
                  <>
                    <BsFillCameraVideoFill />
                  </>
                )}
              </Btn>
              <Btn onClick={setShareScreen}>
                {shared ? (
                  <>
                    <MdScreenShare />
                  </>
                ) : (
                  <>
                    <MdStopScreenShare style={{ color: "#A0001A" }} />
                  </>
                )}
              </Btn>
            </BtnWrap>
          </SoundBtn>
        </DIV>
      </MainWrap>
    </RoomWrap>
  );
};
const RoomWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fbf9f9;
`;

const MainWrap = styled.div`
  ${flex}
  width: 100%;
  height: 100%;
  padding-top: 100px;
  background-color: var(--main);
`;

const StudyInfoSection = styled.div`
  width: 450px;
  height: 98%;
  background-color: #fbf9f9;
  border: 5px solid var(--point);
  box-sizing: border-box;
  overflow: auto;
  margin-left: 10px;
`;

const BookBox = styled.div`
  ${flex("center", "center", false)}
  width: 100%;
  height: 350px;
`;

const BookInfoTextBox = styled.div`
  ${flex("center", "center", false)}
  margin-top: 20px;
`;

const StudyInfoNameTag = styled.div`
  ${flex("center", "center", false)}
  width: 90px;
  height: 25px;
  margin-right: 10px;
  background-color: var(--point);
  border-radius: 7px;
  color: var(--white);

  font-weight: 600;
  font-size: 12px;
`;
const StudyTitleBox = styled.div`
  ${flex("start", "center")}
  margin: 0 10px;
`;
const StudyDateBox = styled.div`
  ${flex("start", "center")}
  margin: 10px;
`;
const StudyNoticeBox = styled.div`
  ${flex("start", "start", false)}
  margin: 10px;
`;

const InfoTextBox = styled.div`
  width: 100%;
  margin-top: 10px;
  max-height: 400px;
`;

const DIV = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 100px;
  margin: auto;
  background-color: var(--main);
  ${flex("center", "center", false)}
  position: relative;
  /* @media screen and (max-width: 1440px) {
    padding-top: 56px;
  } */
`;

const VideoWrap = styled.div`
  width: 100%;
  height: 100%;
  ${flex("center", "center", false)}
  position: relative;
  margin-top: 10px;
  box-sizing: border-box;
  overflow-y: auto;

  /* @media screen and (max-width: 1440px) {
    width: 980px;
    height: 605px;
    margin: auto;
  } */
`;

// const SharedVideoSection = styled.div`
//   width: 100%;
//   height: 80%;
//   padding: 10px;
//   border-radius: 10px;
//   border: 1px solid #c9998d;
//   overflow-x: auto;
//   .shareVideo {
//     width: 960px;
//     height: 540px;
//     border: 2px solid var(--point);
//   }
// `;

const SoundBtn = styled.div`
  ${flex("end")}
  width: 80%;
  position: relative;
  margin-bottom: 20px;
  /* @media screen and (max-width: 1440px) {
    width: 758px;
    margin: -114px 0px 0px 54px;
  }
  @media screen and (max-width: 1194px) {
    width: 758px;
    margin: -140px 0px 0px 54px;
  } */
`;

const BtnWrap = styled.div`
  ${flex("between", "center")}
`;

const Btn = styled.div`
  ${flex}
  width: 45px;
  height: 45px;
  margin: 5px;
  color: var(--white);
  font-size: 20px;
  border-radius: 50%;
  background-color: #c9998d;
  cursor: pointer;
`;

const NoneNoteText = styled(Eltext)`
  color: var(--point);
  text-align: center;
  padding-top: 10px;
`;

const TestDivBox = styled.div`
  ${flex("center", "center", false)}
  height: 100%;
`;

export default React.memo(Room);
