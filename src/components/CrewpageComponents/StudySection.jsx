import React, { useState, useEffect, useRef } from "react";
import { Modal, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";

// modules
import { actionCreators as studySearchActinos } from "../../redux/modules/studySearch";

// styled components
import styled from "styled-components";

// components
import CustomAccordions from "../Accordion/Accordion";
import ModalStudy from "../Modal/ModalStudy";

// elements
import { Elbutton, Elinput, Eltext } from "../../elements";

// themes
import flex from "../../themes/flex";

const StudySection = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const hadleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  // redux store
  const __isJoinedCrew = useSelector((state) => state.crew.isJoinedCrew);
  const loggedId = localStorage.getItem("userId");

  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    dispatch(
      studySearchActinos.searchStudyDB(props.crewInfo.meetingId, searchValue)
    );
  };

  return (
    <StudySectionWrap>
      <StudySectionBox>
        <StudySectionBoxLeft>
          <StudysectionTag type="sub_2_bold">
            스터디 목록({props.crewInfo.meetingStudyCnt})
          </StudysectionTag>

          <SearchForm onSubmit={handleSubmitSearch}>
            <StudysectionSearchInput
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="원하는 스터디를 검색해주세요."
            />
            <SearchSubmitBtn shape="brown-outline">검색</SearchSubmitBtn>
          </SearchForm>
        </StudySectionBoxLeft>
        <StudySectionBoxRight>
          {/* <CreateStudyBtn shape="brown-outline">스터디 생성하기</CreateStudyBtn> */}

          {__isJoinedCrew === true && loggedId ? (
            <>
              {/* // <CreateStudyBtn shape="brown-outline">
            //   스터디 생성하기
            // </CreateStudyBtn> */}
              <ModalOpenBtn shape="brown-outline" onClick={hadleModalOpen}>
                스터디 생성하기
              </ModalOpenBtn>

              <Modal open={open}>
                <Box sx={style}>
                  <ModalCloseBtn onClick={handleModalClose}>
                    <CloseIcon fontSize="large" />
                  </ModalCloseBtn>
                  <ModalStudy
                    meetingLimitCnt={props.crewInfo.meetingLimitCnt}
                  />
                </Box>
              </Modal>
            </>
          ) : null}
        </StudySectionBoxRight>
      </StudySectionBox>
      <AccordionSection>
        <CustomAccordions isJoinedCrew={__isJoinedCrew}></CustomAccordions>
      </AccordionSection>
    </StudySectionWrap>
  );
};

export default StudySection;

const StudySectionWrap = styled.div`
  width: 100%;
  min-height: 700px;
  padding-bottom: 40px;
  height: auto;
  background-color: var(--main);
`;

const StudySectionBox = styled.div`
  ${flex("between", "center", true)}
  width: 90%;
  margin: auto;
  padding: 60px 0 25px 0;
`;

const StudySectionBoxLeft = styled.div`
  ${flex("between", "start", true)}
  max-width: 700px;
`;

const StudysectionTag = styled(Eltext)`
  ${flex}
  width: 147px;
  height: 35px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 7px;
  color: var(--white);
  background-color: var(--point);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const StudysectionSearchInput = styled.input`
  min-width: 343px;
  height: 35px;
  margin-right: 5px;
  padding-left: 10px;
  border: 1px solid var(--point);
  border-radius: 3px;
`;

const StudySectionBoxRight = styled.div``;

// const CreateStudyBtn = styled(Elbutton)`
//   width: 147px;
//   height: 35px;
//   border-radius: 7px;
//   box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
// `;

const AccordionSection = styled.div`
  width: 90%;
  margin: auto;
`;

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

const SearchForm = styled.form`
  ${flex}
`;

const SearchSubmitBtn = styled(Elbutton)`
  width: 80px;
  height: 35px;
  border-radius: 3px;
`;
