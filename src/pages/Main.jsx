import React, { useState } from "react";
import Slide from "../components/Slide";
import ModalCrew from "../components/Modal/ModalCrew";
import Card from "../components/Card";
<<<<<<< HEAD
import Cards from "../components/Cards";
<<<<<<< HEAD
import MyCrewCard from "../components/MyCrewCard";
=======
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
import Cards from "../components/Cards"
>>>>>>> c84d771 (components(Card): Card 컴포넌트 작성 후 커밋)

import { Modal, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";

import flex from "../themes/flex";
import { Elbutton, Eltext, Elchip } from "../elements";
import { useDispatch, useSelector } from "react-redux";
import { mainActions } from "../redux/modules/main";
import { actionCreators as userActions } from "../redux/modules/crew";
import { useHistory } from "react-router-dom";
import CrewSearch from "../components/mainSearch/CrewSearch";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
<<<<<<< HEAD
<<<<<<< HEAD
import MyCrewList from "../components/MyCrewList";
=======
import {IoIosArrowDropleft} from 'react-icons/fa';
import {IoIosArrowDropright} from 'react-icons/fa';
=======
>>>>>>> 180d649 (develop 브랜치에서 components(Card) 작업 중 커밋)



>>>>>>> c84d771 (components(Card): Card 컴포넌트 작성 후 커밋)

const Main = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  // ======================================================================== 새로고침 시 오류로 데이터를 리듀스에서부터 분리하여 로직 구성 추후 원인을 파악하고 리팩토링 예정

  const __listMyMeeting = useSelector((state) => state.main.myMeeting);
  const __listTodayMeeting = useSelector((state) => state.main.todayMeeting);
  const __listRecommendMeeting = useSelector(
    (state) => state.main.recommendMeeting
  );
  const __listNewMeeting = useSelector((state) => state.main.newMeeting);
  const __listMyMeetingStudy = useSelector((state) => state.main.studyList);

  
  console.log(__listMyMeeting);
  console.log(__listTodayMeeting);
  console.log(__listRecommendMeeting);
  console.log(__listMyMeetingStudy);
  // ========================================================================
  const userId = localStorage.getItem("userId");
<<<<<<< HEAD


  // ==================== 민우님이 요청한 loginCheckDB ========================
  // React.useEffect(() => {
  //   dispatch(mainActions.login_loadCrewDB(userId)
  //   );
  // }, []);
  // ==================== 민우님이 요청한 loginCheckDB ========================
    
=======
  // console.log(userId)

  // ==================== 민우님이 요청한 loginCheckDB ========================
  // React.useEffect(() => {
  //   dispatch(userActions.loginCheckDB());
  // }, []);
   // ==================== 민우님이 요청한 loginCheckDB ========================
>>>>>>> 4017e03 (page(Mypage): 내가 참여한 스터디 불러오는 기능 전까지 구현)

  React.useEffect(() => {
    userId === null
      ? dispatch(mainActions.loadCrewDB())
      : dispatch(mainActions.login_loadCrewDB(userId));
  }, []);
  
  const [open, setOpen] = useState(false);

  const hadleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  // ======================================================================== 새로고침 시 오류로 데이터를 리듀스에서부터 분리하여 로직 구성 추후 원인을 파악하고 리팩토링 예정

  if (
    __listMyMeeting === "" &&
    __listTodayMeeting === "" &&
    __listRecommendMeeting === "" &&
    __listNewMeeting === "" &&
    __listMyMeetingStudy === ""
  )
    return <></>;

  // ========================================================================

  return (
    <>
      <Slide />
<<<<<<< HEAD

      <Container>
        <StSearchBtn
          onClick={() => {
            mainActions.getSearchCrew("", dispatch, history);
          }}
        >
          <CrewSearch />
        </StSearchBtn>
        {/* <MyCrewCard myCrewInfo={__listMyMeeting}/> */}
        {userId ? (
          JSON.stringify(__listMyMeeting) === "{}" ? (
            <StNothingMyCrewSection>
              <StNothingCrewText>
                <Eltext type="sub_1_bold" color= "point">
                <div>생성된 모임이 없습니다.</div>
               
                <div>모임 생성하기 버튼을 눌러 모임을 만들어주세요😋</div>
                </Eltext>
              </StNothingCrewText>
              <ModalBtnGrid>
                <ModalOpenBtn shape="brown-outline" onClick={hadleModalOpen}>
                  모임 생성하기
                </ModalOpenBtn>
                <Modal open={open}>
                  <Box sx={style} style={{ position: "relative" }}>
                    <ModalCloseBtn onClick={handleModalClose}>
                      <CloseIcon fontSize="large" />
                    </ModalCloseBtn>
                    <ModalCrew />
                  </Box>
                </Modal>
              </ModalBtnGrid>
            </StNothingMyCrewSection>
=======
      
      <Container>
      
        <StSearchBtn onClick={() => {mainActions.getSearchCrew("", dispatch, history)}} >
          <CrewSearch />
        </StSearchBtn>
        
        <ModalBtnGrid>
          <ModalOpenBtn shape="brown-outline" onClick={hadleModalOpen}>
            모임 생성하기
          </ModalOpenBtn>
          <Modal open={open}>
            <Box sx={style} style={{ position: "relative" }}>
              <ModalCloseBtn onClick={handleModalClose}>
                <CloseIcon fontSize="large" />
              </ModalCloseBtn>
              <ModalCrew />
            </Box>
          </Modal>
        </ModalBtnGrid>

        <StCrewTitle>
          <Elchip shape="Fill" width="96px" height="35px">
            <Eltext type="sub_2_bold" color="white">
              내 모임
            </Eltext>
          </Elchip>
        </StCrewTitle>

        {/* <MyCrewGrid> */}
        <CardGrid>
          {JSON.stringify(__listMyMeeting) === "{}" ? (
            <StMyCrew>
              <Eltext type="head_6_bold" color="rgba(40, 34, 36, 0.5)">
                마음의 양식을 쌓고 싶다면 모임 생성 / 참가를 해 볼까요?
              </Eltext>
            </StMyCrew>
>>>>>>> c84d771 (components(Card): Card 컴포넌트 작성 후 커밋)
          ) : (
            <MyCrewSection>
              <StCrewTitle>
                <Elchip shape="Fill" width="96px" height="35px">
                  <Eltext type="sub_2_bold" color="white">
                    내 모임
                  </Eltext>
                </Elchip>
              </StCrewTitle>
              <CardGrid>
                <div style={{ display: "flex" }}>
                  <MyCrewCard myCrewInfo={__listMyMeeting} />

                  <div
                    style={{
                      margin: "20px 0 0 30px",
                      width: "690px",
                      height: "460px",
                    }}
                  >
                    {JSON.stringify(__listMyMeetingStudy) === "[]" ? (
                      <div
                        style={{
                          textAlign: "center",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "400px",
                        }}
                      >
                        <Eltext type="head_6_bold" color="point">
                          <div>생성된 스터디가 없습니다.</div>
                          <div>내 모임에서 스터디를 만들어주세요😋</div>
                        </Eltext>
                      </div>
                    ) : (
                      __listMyMeetingStudy.map((p, idx) => {
                        return <MyCrewList {...p} key={idx} />;
                      })
                    )}
                  </div>
                </div>
              </CardGrid>
            </MyCrewSection>
          )
        ) : (
          <></>
        )}

        <CrewGroupGrid>
          <GoSearchBtnGrid>
            <GoSearchBtn
              shape="brown-outline"
              onClick={() => {
                mainActions.getSearchCrew("", dispatch, history);
              }}
            >
              전체 보기
            </GoSearchBtn>
          </GoSearchBtnGrid>
          <CrewListToday>
            <StCrewTitle>
              <Elchip shape="Fill" width="170px" height="35px">
                <Eltext type="sub_2_bold" color="white">
                  오늘 스터디하는 모임
                </Eltext>
              </Elchip>
            </StCrewTitle>

            <CardGrid>
              <Swiper
                slidesPerView={3}
                spaceBetween={1}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                autoplay={{ delay: 4000 }}
                modules={[Navigation, Autoplay]}
                className="mySwiper1"
              >
                {__listTodayMeeting.map((p, idx) => {
                  return (
                    <SwiperSlide key={idx}>
                      <Card {...p} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </CardGrid>
          </CrewListToday>
          <CrewListRecommend>
            <StCrewTitle>
              <Elchip shape="Fill" width="120px" height="35px">
                <Eltext type="sub_2_bold" color="white">
                  추천 모임
                </Eltext>
              </Elchip>
            </StCrewTitle>

            <CardGrid>
              <Swiper
                slidesPerView={3}
                spaceBetween={1}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                autoplay={{ delay: 4000 }}
                modules={[Navigation, Autoplay]}
                className="mySwiper2"
              >
                {__listRecommendMeeting.map((p, idx) => {
                  return (
                    <SwiperSlide key={idx}>
                      <Card key={idx} {...p} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </CardGrid>
          </CrewListRecommend>

          <CrewListNewest>
            <StCrewTitle>
              <Elchip shape="Fill" width="120px" height="35px">
                <Eltext type="sub_2_bold" color="white">
                  딱-끈한 모임
                </Eltext>
              </Elchip>
            </StCrewTitle>

            <CardGrid>
              <Swiper
                slidesPerView={3}
                spaceBetween={1}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                autoplay={{ delay: 4000 }}
                modules={[Navigation, Autoplay]}
                className="mySwiper3"
              >
                {__listNewMeeting.map((p, idx) => {
                  return (
                    <SwiperSlide key={idx}>
                      <Card key={idx} {...p} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </CardGrid>
          </CrewListNewest>
        </CrewGroupGrid>
      </Container>
<<<<<<< HEAD
=======
      <CrewGroupGrid>
        <GoSearchBtnGrid>
          <GoSearchBtn
            shape="brown-outline"
            onClick={() => {mainActions.getSearchCrew("", dispatch, history)
            }}
          >
            전체 보기
          </GoSearchBtn>
        </GoSearchBtnGrid>
        <TitleGridA>
          <Elchip shape="Fill" width="170px" height="35px">
            <Eltext type="sub_2_bold" color="white">
              오늘 스터디하는 모임
            </Eltext>
          </Elchip>
        </TitleGridA>
        <GroupGrid>
          <CardGrid>
            {__listTodayMeeting.map((p, idx) => {
              return (
                <CardGrid key={idx}>
                  <Cards {...p} />
                </CardGrid>
              );
            })}
          </CardGrid>
        </GroupGrid>
        <StCrewTitle>
          <Elchip shape="Fill" width="120px" height="35px">
            <Eltext type="sub_2_bold" color="white">
              추천 모임
            </Eltext>
          </Elchip>
        </StCrewTitle>
        <GroupGrid>
          <CardGrid>
          
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            autoplay={{delay:4000}}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {__listRecommendMeeting.map((p, idx) => {
                  return (
                    <>
                  <StSwiperWrapper>
                    <SwiperSlide key={idx}>
                      <Card key={idx} {...p} />
                    </SwiperSlide>
                  </StSwiperWrapper>
                  
                  </>
                  );
            })}
  
          </Swiper>
          
          </CardGrid>
        </GroupGrid>
        <StCrewTitle>
          <Elchip shape="Fill" width="120px" height="35px">
            <Eltext type="sub_2_bold" color="white">
              딱-끈한 모임
            </Eltext>
          </Elchip>
        </StCrewTitle>
        <GroupGrid>
          <CardGrid>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            autoplay={{delay:4000}}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {__listNewMeeting.map((p, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <Card key={idx} {...p} />
                </SwiperSlide>
              );
            })}
            </Swiper>
          </CardGrid>
        </GroupGrid>
      </CrewGroupGrid>
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
    </>
  );
};

export default Main;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "1300px",
  height: "906px",
  bgcolor: "#fbf9f9",
  border: "1px solid var(--point)",
  boxShadow: 24,
  borderRadius: "5px",
};

const ModalOpenBtn = styled(Elbutton)`
  width: 120px;
  height: 30px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const ModalCloseBtn = styled.button`
  position: absolute;
  right: 160px;
  top: 30px;
`;

const ModalBtnGrid = styled.div`
  ${flex("center")}
  max-width: 1000px;
  margin: 10px auto;
`;

const GoSearchBtn = styled(Elbutton)`
  width: 100px;
  height: 35px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const GoSearchBtnGrid = styled.div`
  ${flex("end")}
  max-width: 1000px;
  margin-left: 150px;
  padding: 50px 0 30px 0;
`;

const StCrewTitle = styled.div`
  width: 100%;
  height: 45px;
  margin: auto;
  padding: 0 65px;
  margin-top: 30px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;

<<<<<<< HEAD
const StNothingMyCrewSection = styled.div`
=======
const CardGrid = styled.div`
  display: flex;
  width: 1200px;
  height: 610px;
  /* margin: 10px 30px 0 0px; */
  border: 1px solid black;
`;

const StMyCrew = styled.div`
  ${flex("center", "center", true)}
>>>>>>> c84d771 (components(Card): Card 컴포넌트 작성 후 커밋)
  width: 100%;
  height: 150px;
  padding-top: 25px;
  background-color: var(--main);
`;

const StNothingCrewText = styled.div`
  ${flex("center")};
  text-align: center;
`

const MyCrewSection = styled.div`
  ${flex("start", "center", false)}
  width: 100%;
  height: 600px;
  padding: 20px 0;
  background-color: var(--main);
`;

const CardGrid = styled.div`
  display: flex;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  height: 560px;
`;

const CrewGroupGrid = styled.div`
  width: 100%;
  height: 100%;
`;

const StSearchBtn = styled.button`
  margin: 60px 0 30px 0;
  width: 100%;
`;

const CrewListToday = styled.div`
  width: 100%;
  height: 635px;
  padding: 5px 0;
  margin-top: 10px;
  background-image: linear-gradient(
    #839893 35%,
    var(--white) 35%,
    var(--white) 75%,
    #839893 75%
  );
`;
const CrewListRecommend = styled.div`
  width: 100%;
  height: 635px;
  padding: 5px 0;
  margin-top: 120px;
  background-image: linear-gradient(
    #c9998d 35%,
    var(--white) 35%,
    var(--white) 75%,
    #c9998d 75%
  );
`;
const CrewListNewest = styled.div`
  width: 100%;
  height: 635px;
  padding: 5px 0;
  margin: 120px 0 100px 0;
  background-image: linear-gradient(
    #ede1d3 35%,
    var(--white) 35%,
    var(--white) 75%,
    #ede1d3 75%
  );
`;

const StSwiperWrapper = styled.div`
  border: 1px solid black;
  padding: 100px 100px;
`
