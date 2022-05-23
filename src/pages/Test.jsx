import React, { useState } from "react";
import Header from "../components/Header";
import Slide from "../components/Slide";
import Footer from "../components/Footer";
import ModalStudy from "../components/Modal/ModalStudy";
import Card from "../components/Card";

import { Modal, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import { Elbutton } from "../elements";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../themes/main.css";


const Test = (props) => {

  return (
    <>
      <Header />
      <Slide />
    
      <div style={{width:"700px", height:"700px", marginLeft:"800px", border:"1px solid black"}}>
      </div>
      <Card />
    <div style={{width:"1200px"}}>
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
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
     

        
      </Swiper>
      </div>
      
      


      <Footer />
    </>
  );
};

export default Test;
