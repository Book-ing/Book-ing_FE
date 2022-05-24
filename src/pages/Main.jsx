import React, { useState } from "react";
import Slide from "../components/Slide";
import ModalCrew from "../components/Modal/ModalCrew";
import Card from "../components/Card";
import Cards from "../components/Cards";
import MyCrewCard from "../components/MyCrewCard";

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
import MyCrewList from "../components/MyCrewList";

const Main = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  // ======================================================================== 새로고침 시 오류로 데이터를 리듀스에서부터 분리하여 로직 구성 추후 원인을 파악하고 리팩토링 예정

  // const __isMaster = useSelector((state) => state.main.isMeetingMaster);
  const __listMyMeeting = useSelector((state) => state.main.myMeeting);
  const __listTodayMeeting = useSelector((state) => state.main.todayMeeting);
  const __listRecommendMeeting = useSelector(
    (state) => state.main.recommendMeeting
  );
  const __listNewMeeting = useSelector((state) => state.main.newMeeting);
  const __listMyMeetingStudy = useSelector((state) => state.main.studyList);

  // const isMaster = useSelector((state) => state);
  // console.log(isMaster)
  console.log(__listMyMeeting);
  console.log(__listTodayMeeting);
  console.log(__listRecommendMeeting);
  console.log(__listMyMeetingStudy);
  // ========================================================================
  const userId = localStorage.getItem("userId");
  // console.log(userId)

  // ==================== 민우님이 요청한 loginCheckDB ========================
  // React.useEffect(() => {
  //   dispatch(mainActions.login_loadCrewDB(userId)
  //   );
  // }, []);
  // ==================== 민우님이 요청한 loginCheckDB ========================

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
            <NotMyCrewSection>
              <div>모임이 없습니다 모임을 생성하러 가볼까요?</div>
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
            </NotMyCrewSection>
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
  ${flex("end")}
  max-width: 1000px;
  margin: 80px auto;
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

const NotMyCrewSection = styled.div`
  width: 100%;
  height: 200px;
  background-color: var(--main);
`;

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

const StMyCrew = styled.div`
  ${flex("center", "center", true)}
  width: 100%;
  color: rgba(40, 34, 36, 0.5);
`;

const CrewGroupGrid = styled.div`
  width: 100%;
  height: 100%;
  /* margin-top: 40px; */
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
// linear-gradient
const StMyCrewStudyList = styled.div`
  width: 690px;
  height: 100px;
  margin-bottom: 20px;
  background-color: #fbf9f9;
  padding-top: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
