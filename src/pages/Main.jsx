import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slide from "../components/Slide";
import ModalCrew from "../components/Modal/ModalCrew";
import Cards from "../components/Cards";

import { Modal, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

import flex from "../themes/flex";
import { Elbutton, Eltext, Elchip } from "../elements";
import { useDispatch, useSelector } from "react-redux";
import { mainActions } from "../redux/modules/main";
import { useHistory } from "react-router-dom";

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
      {/* container St 작업 */}
      <Container>
        <StSearchBox>
          <StInputLine>
            <StInput
              name="title"
              placeholder="원하는 모임을 검색해주세요."

              // onChange={onChangeInputHandler}
            />
            <StSearchBtn>
              <SearchIcon fontSize="large" />
            </StSearchBtn>
          </StInputLine>
        </StSearchBox>

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
          ) : (
            __listMyMeeting.map((p, idx) => {
              return <Cards key={idx} {...p} />;
            })
          )}
        </CardGrid>

        {/* </MyCrewGrid> */}
      </Container>
      <CrewGroupGrid>
        <GoSearchBtnGrid>
          <GoSearchBtn
            shape="brown-outline"
            onClick={() => {
              history.push("/search");
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
            {__listRecommendMeeting.map((p, idx) => {
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
              딱-끈한 모임
            </Eltext>
          </Elchip>
        </StCrewTitle>
        <GroupGrid>
          <CardGrid>
            {__listNewMeeting.map((p, idx) => {
              return (
                <CardGrid key={idx}>
                  <Cards {...p} />
                </CardGrid>
              );
            })}
          </CardGrid>
        </GroupGrid>
      </CrewGroupGrid>
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

const ModalBtnGrid = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 62px 73px 0px 0px;
  /* border: 1px solid black; */
`;

const GoSearchBtn = styled(Elbutton)`
  width: 147px;
  height: 35px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const GoSearchBtnGrid = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 62px 73px 0px 0px;
`;

const StCrewTitle = styled.div`
  width: 100%;
  height: 45px;
  margin: 20px 0 0 15px;
  /* border: 1px solid #815854; */
`;

const TitleGridA = styled.div`
  width: 100%;
  height: 45px;
  margin-left: 15px;
  /* border: 1px solid #815854; */
`;

const Container = styled.div`
  margin: auto;
  padding-left: 80px;
  width: 95vw;
  max-width: 1440px;
  height: 700px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  /* border: 1px solid black; */
`;

const CardGrid = styled.div`
  display: flex;
  width: 1260px;
  height: 390px;
  margin: 10px 30px 0 0px;
  /* border: 1px solid black; */
`;

const StMyCrew = styled.div`
  ${flex("center", "center", true)}
  width: 100%;
  /* margin-left: 70px; */
  color: rgba(40, 34, 36, 0.5);
  /* border: 1px solid black; */
`;

const CrewGroupGrid = styled.div`
  padding: 20px 0 0 80px;
  margin: auto;
  width: 95vw;
  max-width: 1440px;
  height: 1515px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const GroupGrid = styled.div`
  display: flex;
  /* margin-left: 40px; */
`;

const StSearchBox = styled.div`
  display: flex;
  width: 1440px;
  margin-left: 130px;
`;

const StSearchBtn = styled.button`
  vertical-align: middle;
`;

const StInputLine = styled.div`
  width: 1045px;
  height: 35px;
  margin-top: 62px;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--point);
`;

const StInput = styled.input`
  width: 1000px;
  height: 35px;
  background-color: transparent;
  /* border-radius: 5px; */
  /* border: 1px solid var(--point); */
`;
