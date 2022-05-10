import React, { useState } from "react";
import Header from "../components/Header";
import Slide from "../components/Slide";
import Footer from "../components/Footer";
import ModalStudy from "../components/Modal/ModalStudy";

import { Modal, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import { Elbutton } from "../elements";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import React, { useState } from 'react';
// import PopupDom from './PopupDom';
// import PopupPostCode from './PopupPostCode';

// const Test = () => {
// 	// 팝업창 상태 관리
//     const [isPopupOpen, setIsPopupOpen] = useState(false)

// 	// 팝업창 열기
//     const openPostCode = () => {
//         setIsPopupOpen(true)
//     }

// 	// 팝업창 닫기
//     const closePostCode = () => {
//         setIsPopupOpen(false)
//     }

//     return(
//         <div>
//         	// 버튼 클릭 시 팝업 생성
//             <button type='button' onClick={openPostCode}>우편번호 검색</button>
//             // 팝업 생성 기준 div
//             <div id='popupDom'>
//                 {isPopupOpen && (
//                     <PopupDom>
//                         <PopupPostCode onClose={closePostCode} />
//                     </PopupDom>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default Test;

const Test = (props) => {
  const [open, setOpen] = useState(false);

  const hadleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  const [date, setDate] = useState(new Date());

  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");

  return (
    <>
      <Header />
      <Slide />
      <DatePicker />
      <ModalOpenBtn shape="brown-outline" onClick={hadleModalOpen}>
        스터디 생성하기
      </ModalOpenBtn>
      <Modal open={open}>
        <Box sx={style} style={{ position: "relative" }}>
          <ModalCloseBtn onClick={handleModalClose}>
            <CloseIcon fontSize="large" />
          </ModalCloseBtn>
          <ModalStudy />
        </Box>
      </Modal>
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen}
      />

      <Footer />
    </>
  );
};

export default Test;

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
  width: 147px;
  height: 35px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const ModalCloseBtn = styled.button`
  position: absolute;
  right: 160px;
  top: 30px;
`;

const StAccordion = styled.div`
  margin: auto;
  width: 1440px;
  height: 500px;
`;
