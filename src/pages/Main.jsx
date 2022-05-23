import React, { useState } from "react";
import Slide from "../components/Slide";
import ModalCrew from "../components/Modal/ModalCrew";
import Card from "../components/Card";
import Cards from "../components/Cards";

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
import { IoIosArrowDropleft } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/fa";

const Main = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  // ======================================================================== 새로고침 시 오류로 데이터를 리듀스에서부터 분리하여 로직 구성 추후 원인을 파악하고 리팩토링 예정

  const __isMaster = useSelector((state) => state.main.isMeetingMaster);
  const __listMyMeeting = useSelector((state) => state.main.myMeeting);
  const __listTodayMeeting = useSelector((state) => state.main.todayMeeting);
  const __listRecommendMeeting = useSelector(
    (state) => state.main.recommendMeeting
  );
  const __listNewMeeting = useSelector((state) => state.main.newMeeting);

  // const isMaster = useSelector((state) => state);
  // console.log(isMaster)
  console.log(__listMyMeeting);
  console.log(__listTodayMeeting);
  console.log(__listRecommendMeeting);
  // ========================================================================
  const userId = localStorage.getItem("userId");
  // console.log(userId)

  // ==================== 민우님이 요청한 loginCheckDB ========================
  // React.useEffect(() => {
  //   dispatch(userActions.loginCheckDB());
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
    __isMaster === "" &&
    __listMyMeeting === "" &&
    __listTodayMeeting === "" &&
    __listRecommendMeeting === "" &&
    __listNewMeeting === ""
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

        {/* <MyCrewGrid> */}
        <MyCrewSection>
          <StCrewTitle>
            <Elchip shape="Fill" width="96px" height="35px">
              <Eltext type="sub_2_bold" color="white">
                내 모임
              </Eltext>
            </Elchip>
          </StCrewTitle>
          <CardGrid>
            {JSON.stringify(__listMyMeeting) === "{}" ? (
              <StMyCrew>
                <Eltext type="head_6_bold" color="rgba(40, 34, 36, 0.5)">
                  마음의 양식을 쌓고 싶다면 모임 생성 / 참가를 해 볼까요?
                </Eltext>
              </StMyCrew>
            ) : (
              __listMyMeeting.map((p, idx) => {
                return <Cards key={idx} {...p} />;
              })
            )}
          </CardGrid>
        </MyCrewSection>

        {/* </MyCrewGrid> */}

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
          </CrewListToday>
          <CrewListRecommend>
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
                  slidesPerGroup={3}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  navigation={true}
                  autoplay={{ delay: 7000 }}
                  modules={[Navigation, Autoplay]}
                  className="mySwiper"
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
            </GroupGrid>
          </CrewListRecommend>
          <CrewListNewest>
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
                  slidesPerGroup={3}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  navigation={true}
                  autoplay={{ delay: 7000 }}
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
  width: 147px;
  height: 35px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const GoSearchBtnGrid = styled.div`
  ${flex("end")}
  max-width: 1000px;
  margin: auto;
  padding: 40px 0 20px 0;
`;

const StCrewTitle = styled.div`
  width: 100%;
  height: 45px;
  margin: auto;
  padding: 0 65px;
  margin-bottom: 40px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;

const MyCrewSection = styled.div`
  ${flex("start", "center", false)}
  width: 100%;
  max-height: 600px;
  padding: 20px 0;
  background-color: var(--main);
`;

const CardGrid = styled.div`
  display: flex;
  width: 1200px;
  height: 610px;
`;

const StMyCrew = styled.div`
  ${flex("center", "center", true)}
  width: 100%;
  color: rgba(40, 34, 36, 0.5);
`;

const CrewGroupGrid = styled.div`
  width: 100%;
  height: 100%;
`;

const GroupGrid = styled.div`
  display: flex;
`;

const StSearchBtn = styled.button`
  width: 100%;
`;

const CrewListToday = styled.div`
  width: 100%;
  max-height: 610px;
  margin-top: 120px;
  background: linear-gradient(to top, #839893, var(--white));
`;
const CrewListRecommend = styled.div`
  width: 100%;
  max-height: 610px;
  margin-top: 120px;
  background: linear-gradient(to top, #c9998d, var(--white));
`;
const CrewListNewest = styled.div`
  width: 100%;
  max-height: 610px;
  margin: 120px 0 100px 0;
  background: linear-gradient(to top, #ede1d3, var(--white));
`;
