import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Modules
import { studyActions } from "../../redux/modules/study";
import { actionCreators as accordionActions } from "../../redux/modules/accordion";

// mui
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { Avatar, AvatarGroup, Grid } from "@mui/material";
import { Box, Popover, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// react-icons
import { FaEllipsisH } from "react-icons/fa";

// styled components
import styledComp from "styled-components";
import { Eltext, Elbutton } from "../../elements";

// components
import UserListModal from "../Modal/UserListModal/UserListModal";
import StudyUserListModal from "../Modal/UserListModal/StudyUserListModal";

// theme
import flex from "../../themes/flex";
import ModalStudy from "../Modal/ModalStudy";
import { history } from "../../redux/configStore";

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    sx={{ pointerEvents: "none" }}
    style={{ paddingLeft: "42px", paddingRight: "42px" }}
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "25px", color: "var(--point)", pointerEvents: "auto" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "#fbf9f9",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(0),
  },
}));

const AccordionSummaryComponent = (props) => {
  const dispatch = useDispatch();

  // Redux Store
  const __crewId = useSelector((state) => state.crew.crewData.meetingId);
  const __CrewMasterId = useSelector(
    (state) => state.crew.crewData.meetingMasterProfile.userId
  );
  const loginId = localStorage.getItem("userId");

  // variables
  const studyId = props.props.studyId;
  const studyDate = props.props.studyDateTime;
  const isJoinedCrew = props.isJoinedCrew;
  const [splitedStudyDate, splitedTime] = studyDate.split(" ");
  const [splitedYY, splitedMM, splitedDD] = splitedStudyDate.split("-");

  const clickInOutStudyBtn = () => {
    props.setCheckState(!props.checkState);
    dispatch(studyActions.inOutStudyDB(__crewId, studyId));
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "study-popover" : undefined;

  const [editStudyModal, setEditStudyModal] = useState(false);

  const handleEditStudyModalOpen = (e) => {
    if (props.props.isStudyEnd === true) {
      alert("이미 종료된 스터디는 수정할 수 없습니다.");
      return;
    } else {
      e.stopPropagation();
      setEditStudyModal(true);
    }
  };

  const handleEditStudyModalClose = (e) => {
    e.stopPropagation();
    setEditStudyModal(false);
  };

  const clickDeleteStudyBtn = () => {
    dispatch(studyActions.deleteStudyDB(studyId, __crewId));
  };

  const [studyUserListOpen, setStudyUserListOpen] = useState(false);
  const handlestudyUserListModalOpen = () => {
    if (!loginId || !isJoinedCrew) return;
    setStudyUserListOpen(true);
  };
  const handlestudyUserListModalClose = () => setStudyUserListOpen(false);

  return (
    <AccordionSummaryWrap>
      <AccordionSummary
      // aria-controls="panel1d-content"
      // id="panel1d-header"
      ></AccordionSummary>
      <AccordionHeaderWrap>
        {(props.isJoinedCrew === true &&
          props.props.studyMasterProfile.userId ===
            parseInt(localStorage.getItem("userId"))) ||
        __CrewMasterId === parseInt(localStorage.getItem("userId")) ? (
          <MenuBtn onClick={handleClick}>
            <FaEllipsisH />
          </MenuBtn>
        ) : null}
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          PaperProps={{
            styles: {
              width: "100%",
            },
          }}
        >
          <Box sx={styles}>
            <MoreBtns shape="brown-outline" onClick={handleEditStudyModalOpen}>
              스터디 수정
            </MoreBtns>
            <MoreBtns shape="brown-outline" onClick={clickDeleteStudyBtn}>
              스터디 삭제
            </MoreBtns>
            <Modal open={editStudyModal}>
              <Box sx={editStudyModalstyle}>
                <ModalCloseBtn onClick={handleEditStudyModalClose}>
                  <CloseIcon fontSize="large" />
                </ModalCloseBtn>
                <ModalStudy isEdit={editStudyModal} studyInfo={props.props} />
              </Box>
            </Modal>
          </Box>
        </Popover>

        <Grid container>
          <CrewInfo>
            <TitleText type="sub_2_bold">
              {props.props.studyType === "online" ? (
                <StudyTypeOnlineTag>온라인</StudyTypeOnlineTag>
              ) : (
                <StudyTypeOfflineTag>오프라인</StudyTypeOfflineTag>
              )}
              스터디명 :{props.props.studyTitle}
            </TitleText>
            {props.props.studyType === "online" ? null : (
              <InfoText type="sub_2">
                금액 : {props.props.studyPrice}원
              </InfoText>
            )}

            <InfoText type="sub_2">
              일시 : {splitedYY}년 {splitedMM}월 {splitedDD}일 {splitedTime}
            </InfoText>
            {props.props.studyType === "online" ? null : (
              <InfoText type="sub_2">
                위치 : {props.props.studyAddr}, {props.props.studyAddrDetail}
              </InfoText>
            )}
          </CrewInfo>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="start"
          alignItems="center"
        >
          <MemberSection onClick={handlestudyUserListModalOpen}>
            <TotalMember type="sub_2">
              {props.props.studyUserCnt}명 /{props.props.studyLimitCnt}명
            </TotalMember>
            <Avatar
              style={{
                marginRight: "10px",
                border: "2px solid var(--point)",
              }}
              src={props.props.studyMasterProfile.profileImage}
            />
            <AvatarGroup max={4}>
              {props.props.together.map((cur, idx) => (
                <Avatar
                  key={idx}
                  src={props.props.together[idx].profileImage}
                ></Avatar>
              ))}
            </AvatarGroup>
          </MemberSection>
          {/*  유저리스트 모달 section start */}
          <Modal
            open={studyUserListOpen}
            disableScrollLock={true}
            onBackdropClick={handlestudyUserListModalClose}
            BackdropProps={{ style: { opacity: 0 } }}
          >
            <Box sx={studyUserListstyle}>
              <StudyModalCloseBtn onClick={handlestudyUserListModalClose}>
                <CloseIcon fontSize="large" />
              </StudyModalCloseBtn>
              <StudyUserListModal
                isStudyUserList={studyUserListOpen}
                eachStudyData={props.props}
              />
            </Box>
          </Modal>
          {/*  유저리스트 모달 section start */}
        </Grid>

        <RightBox>
          {props.props.studyStatus === "B" ? null : props.props
              .isStudyJoined === true && props.props.studyType === "online" ? (
            <JoinOnlineStudyRoom
              onClick={() => {
                history.push({
                  pathname: `/room/${studyId}`,
                  state: { meetingId: __crewId, studyData: props.props },
                });
              }}
            >
              온라인 스터디룸 입장
            </JoinOnlineStudyRoom>
          ) : null}
          {props.isJoinedCrew === false ||
          props.props.studyMasterProfile.userId === parseInt(loginId) ||
          props.props.isStudyEnd === true ? null : props.props.isStudyJoined ===
            true ? (
            <JoinBtn shape="red-outline" onClick={clickInOutStudyBtn}>
              취소하기
            </JoinBtn>
          ) : (
            <JoinBtn shape="brown-outline" onClick={clickInOutStudyBtn}>
              참가하기
            </JoinBtn>
          )}
        </RightBox>
      </AccordionHeaderWrap>
      {props.props.isStudyEnd === true ? (
        <NoticeTag style={{ backgroundColor: "#ED6D59" }}></NoticeTag>
      ) : (
        <NoticeTag style={{ backgroundColor: "#A2D16E" }}></NoticeTag>
      )}
      {props.props.studyMasterProfile.userId ===
      parseInt(localStorage.getItem("userId")) ? (
        <MineStudyTag>
          <div
            style={{
              width: "90px",
              height: "35px",
              opacity: "0.1",
              backgroundColor: "var(--gray)",
            }}
          ></div>
          <StickerBox
            style={{
              width: "60px",
              height: "35px",
              backgroundColor: "#2e9cff",
              boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.5)",
            }}
          >
            <MyText>My</MyText>
          </StickerBox>
        </MineStudyTag>
      ) : null}
    </AccordionSummaryWrap>
  );
};

export default AccordionSummaryComponent;

const AccordionSummaryWrap = styledComp.div`
  ${flex}
  background-color: #fbf9f9;
  padding: 10px 0;
  position: relative;
`;

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "150px",
  height: "85px",
  bgcolor: "#fbf9f9",
  boxShadow: 24,
  borderRadius: "5px",
  position: "relative",
};

const MoreBtns = styledComp(Elbutton)`
  width: 100%;
  height: 50%;
  border: transparent;
`;

const AccordionHeaderWrap = styledComp.div`
  position: relative;
  ${flex("between", "center")}
  width: 100%;

  @media screen and (max-width: 1260px) {
    ${flex("start", "center", false)}
  }
`;

const MenuBtn = styledComp.button`
  ${flex("center", "center", false)}
  position: absolute;
  height: 20px;
  right: 10px;
  top: 0;
  color: var(--point);
  font-size: 35px;

  &:hover {
    color: var(--notice)
  }
`;

const CrewInfo = styledComp.div`
  ${flex("center", "start", false)}
  margin-left: 40px;
  min-width: 400px;

  @media screen and (max-width: 1260px) {
    min-width: 300px;
    margin-left: 0;
  
`;

const StudyTypeOnlineTag = styledComp(Eltext)`
  ${flex}
  width: 80px;
  border-radius: 4px;
  background-color: #c9998d;
  color: white;
`;

const StudyTypeOfflineTag = styledComp(Eltext)`
  ${flex}
  width: 80px;
  border-radius: 4px;
  background-color: #839893;
  color: white;
`;

const TitleText = styledComp(Eltext)``;

const InfoText = styledComp(Eltext)``;

const MemberSection = styledComp.div`
  ${flex}
  cursor: pointer
`;

const studyUserListstyle = {
  position: "absolute",
  width: "300px",
  height: "600px",
  right: "1%",
  top: "1%",
  bgcolor: "#fbf9f9",
  border: "1px solid var(--point)",
  boxShadow: 24,
};

const StudyModalCloseBtn = styledComp.button`
  z-index: 20;
  position: absolute;
  right: 1%;
  top: 1%;
  color: var(--point);
  &:hover {
    cursor: pointer;
  }
`;

const TotalMember = styledComp(Eltext)`
  ${flex}
  width: 96px;
  height: 30px;
  margin-right: 10px;
  border-radius: 7px;
  border: 1px solid var(--point);
  color: var(--point);
`;

const JoinOnlineStudyRoom = styledComp(Elbutton)`
  width: 160px;
  height: 30px;
  margin-right: 20px;
  border-radius: 5px;
`;

const JoinBtn = styledComp(Elbutton)`
  width: 96px;
  height: 30px;
  margin-right: 20px;
  border-radius: 5px;
`;

const RightBox = styledComp.div`
  ${flex("end", "center", true)}
  width: 100%;
`;

const editStudyModalstyle = {
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

const ModalCloseBtn = styledComp.button`
  position: absolute;
  right: 160px;
  top: 30px;
`;

const NoticeTag = styledComp.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 10px;
  height: 100%;
`;

const MineStudyTag = styledComp.div`
  ${flex}
  position: absolute;
  right: -60px;
  bottom:0;
  width: 150px;
  height: 35px;
`;

const StickerBox = styledComp.div`
  ${flex}
  color: #333;
`;

const MyText = styledComp.span`
  font-family: 'Hi Melody', cursive;
  font-size: 25px;
  font-weight: bold;
  transform: rotate(340deg)
`;
