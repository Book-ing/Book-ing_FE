import React from "react";
import styled from "styled-components";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../assets/slideImg/slideImg1.png";
import img2 from "../assets/slideImg/slideImg2.png";

const Slide = () => {
  return (
    <StDiv>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        transitionTime={500}
        emulateTouch
        showArrows={false}
        className="main-slider"
      >
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <button
            onClick={() => {
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLScavM-MMAsDG-YvmxvVjEL_geLkGLuAreDCV1A0VWeKhuesyQ/viewform",
                "_blank"
              );
            }}
          >
            <img src={img2} alt="" />
          </button>
        </div>
      </Carousel>
    </StDiv>
  );
};

export default Slide;

const StDiv = styled.div`
  max-width: 1200px;
  margin: auto;
`;
