import React, { useState } from "react";
import Header from "../components/Header";
import Slide from "../components/Slide";
import Footer from "../components/Footer";
import ModalStudy from "../components/Modal/ModalStudy";
import Card from "../components/Card";
<<<<<<< HEAD
<<<<<<< HEAD
import ModalCrew from "../components/Modal/ModalCrew";
=======
>>>>>>> c84d771 (components(Card): Card 컴포넌트 작성 후 커밋)
=======
import ModalCrew from "../components/Modal/ModalCrew";
>>>>>>> 413a052 (page(Main): 작업중 DB 재배치를 위해 커밋)

import { Modal, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import { Elbutton } from "../elements";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
<<<<<<< HEAD
<<<<<<< HEAD
import flex from "../themes/flex";
=======
>>>>>>> c84d771 (components(Card): Card 컴포넌트 작성 후 커밋)
=======
import flex from "../themes/flex";
>>>>>>> 413a052 (page(Main): 작업중 DB 재배치를 위해 커밋)

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../themes/main.css";


const Test = (props) => {

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 413a052 (page(Main): 작업중 DB 재배치를 위해 커밋)
  const [open, setOpen] = useState(false);

  const hadleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

<<<<<<< HEAD
=======
>>>>>>> c84d771 (components(Card): Card 컴포넌트 작성 후 커밋)
=======
>>>>>>> 413a052 (page(Main): 작업중 DB 재배치를 위해 커밋)
  return (
    <>
      <Header />
      <Slide />
    
      <div style={{width:"700px", height:"700px", marginLeft:"800px", border:"1px solid black"}}>
      </div>
      <Card />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <div style={{width:"1200px",border:"1px solid black", padding: "0 80px"}}>
=======
    <div style={{width:"1200px"}}>
>>>>>>> c84d771 (components(Card): Card 컴포넌트 작성 후 커밋)
=======
    <div style={{width:"1200px",border:"1px solid black", padding: "0 80px"}}>
>>>>>>> 180d649 (develop 브랜치에서 components(Card) 작업 중 커밋)
=======
      <div style={{width:"1200px",border:"1px solid black", padding: "0 80px"}}>
>>>>>>> 413a052 (page(Main): 작업중 DB 재배치를 위해 커밋)
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        autoplay={{delay:7000}}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
<<<<<<< HEAD
<<<<<<< HEAD
        <div style={{width:"1000px", border:"1px solid black"}}>
=======
>>>>>>> c84d771 (components(Card): Card 컴포넌트 작성 후 커밋)
=======
        <div style={{width:"1000px", border:"1px solid black"}}>
>>>>>>> 180d649 (develop 브랜치에서 components(Card) 작업 중 커밋)
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
<<<<<<< HEAD
<<<<<<< HEAD
        </div>
=======
     
>>>>>>> c84d771 (components(Card): Card 컴포넌트 작성 후 커밋)
=======
        </div>
>>>>>>> 180d649 (develop 브랜치에서 components(Card) 작업 중 커밋)

        
      </Swiper>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 413a052 (page(Main): 작업중 DB 재배치를 위해 커밋)
      <NotMyCrewSection>
          <div>
            모임이 없습니다 모임을 생성하러 가볼까요?
          </div>
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
<<<<<<< HEAD
=======
      
>>>>>>> c84d771 (components(Card): Card 컴포넌트 작성 후 커밋)
=======
>>>>>>> 413a052 (page(Main): 작업중 DB 재배치를 위해 커밋)
      


      <Footer />
    </>
  );
};

export default Test;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 413a052 (page(Main): 작업중 DB 재배치를 위해 커밋)
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
  /* border: 1px solid black; */
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
  margin-top: 10px;
  border: 1px solid black;
  background-image: linear-gradient(#839893 35%, var(--white) 35%, var(--white) 75%, #839893 75%);
`;
const CrewListRecommend = styled.div`
  width: 100%;
  height: 635px;
  margin-top: 120px;
  border: 1px solid black;
  background-image: linear-gradient(#C9998D 35%, var(--white) 35%, var(--white) 75%, #C9998D 75%);

`
const CrewListNewest = styled.div`
  width: 100%; 
  max-height: 610px; 
  margin: 120px 0 100px 0; 
  background-image: linear-gradient(#EDE1D3 35%, var(--white) 35%, var(--white) 75%, #EDE1D3 75%);
`
// linear-gradient
const StMyCrewStudyList = styled.div`
  width: 690px;
  height: 100px;
  margin-bottom: 20px;
  background-color: #FBF9F9;
  padding-top: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
<<<<<<< HEAD
`
=======
>>>>>>> c84d771 (components(Card): Card 컴포넌트 작성 후 커밋)
=======
`
>>>>>>> 413a052 (page(Main): 작업중 DB 재배치를 위해 커밋)
