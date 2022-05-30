import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

<<<<<<< HEAD
<<<<<<< HEAD
// react-icons
import { FaEllipsisH } from "react-icons/fa";

// Modules
import { studyActions } from "../../redux/modules/study";
import { actionCreators as mypageActions } from "../../redux/modules/mypage";
=======
=======
// react-icons
import { FaEllipsisH } from "react-icons/fa";

>>>>>>> afcd110 (page(Main): 수정 사항 배포 확인차 커밋)
// Modules
import { studyActions } from "../../redux/modules/study";
import { actionCreators as accordionActions } from "../../redux/modules/accordion";
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)

// mui
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { Avatar, AvatarGroup, Grid } from "@mui/material";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import { Box, Popover, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// styled components
import styledComp from "styled-components";
import { Eltext, Elbutton } from "../../elements";

// components
import UserListModal from "../Modal/UserListModal/UserListModal";
import StudyUserListModal from "../Modal/UserListModal/StudyUserListModal";

// theme
import flex from "../../themes/flex";
import ModalStudy from "../Modal/ModalStudy";
<<<<<<< HEAD
<<<<<<< HEAD
import { useHistory } from "react-router-dom";
=======
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
import { useHistory } from "react-router-dom";
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    sx={{ pointerEvents: "none" }}
<<<<<<< HEAD
    style={{ paddingLeft: "40px" }}
=======
    style={{ paddingLeft: "42px", paddingRight: "42px" }}
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
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
<<<<<<< HEAD
<<<<<<< HEAD
  const history = useHistory();
=======
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
  const history = useHistory();
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)

  // Redux Store
  const __crewId = useSelector((state) => state.crew.crewData.meetingId);
  const loginId = localStorage.getItem("userId");

  // variables
  const studyId = props.props.studyId;
  const studyDate = props.props.studyDateTime;
  const [splitedStudyDate, splitedTime] = studyDate.split(" ");
  const [splitedYY, splitedMM, splitedDD] = splitedStudyDate.split("-");

<<<<<<< HEAD
<<<<<<< HEAD
  // const clickInOutStudyBtn = () => {
  //   dispatch(studyActions.inOutStudyDB(__crewId, studyId));
  // };
  console.log(props.props);

  console.log(props.props.studyMasterProfile.profileImage);
=======
  const clickInOutStudyBtn = () => {
    dispatch(studyActions.inOutStudyDB(__crewId, studyId));
  };
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
  // const clickInOutStudyBtn = () => {
  //   dispatch(studyActions.inOutStudyDB(__crewId, studyId));
  // };
>>>>>>> afcd110 (page(Main): 수정 사항 배포 확인차 커밋)

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d002026 (page(Main): 각종 사항 수정 후 커밋)
    if (props.props.isStudyEnd === true) {
      alert("이미 종료된 스터디는 수정할 수 없습니다.");
      return;
    } else {
      e.stopPropagation();
      setEditStudyModal(true);
    }
<<<<<<< HEAD
=======
    e.stopPropagation();
    setEditStudyModal(true);
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
>>>>>>> d002026 (page(Main): 각종 사항 수정 후 커밋)
  };

  const handleEditStudyModalClose = (e) => {
    e.stopPropagation();
    setEditStudyModal(false);
  };

  const clickDeleteStudyBtn = () => {
    dispatch(studyActions.deleteStudyDB(studyId, __crewId));
<<<<<<< HEAD
    // dispatch(mypageActions.getMyStudyDB());
=======
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
  };

  const [studyUserListOpen, setStudyUserListOpen] = useState(false);
  const handlestudyUserListModalOpen = () => setStudyUserListOpen(true);
  const handlestudyUserListModalClose = () => setStudyUserListOpen(false);

  return (
    <AccordionSummaryWrap>
      <AccordionSummary
      // aria-controls="panel1d-content"
      // id="panel1d-header"
      ></AccordionSummary>
      <AccordionHeaderWrap>
<<<<<<< HEAD
<<<<<<< HEAD
        {/* {props.isJoinedCrew === true && */}
        {props.props.studyMasterProfile.userId ===
        parseInt(localStorage.getItem("userId")) ? (
          <MenuBtn onClick={handleClick}>
            <FaEllipsisH />
=======
        {props.isJoinedCrew === true &&
        props.props.studyMasterProfile.userId ===
=======
        {/* {props.isJoinedCrew === true && */}
        {props.props.studyMasterProfile.userId ===
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
          parseInt(localStorage.getItem("userId")) ? (
          <MenuBtn onClick={handleClick}>
<<<<<<< HEAD
            <LinearScaleIcon sx={{ fontSize: 35 }} />
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
            <FaEllipsisH/>
>>>>>>> afcd110 (page(Main): 수정 사항 배포 확인차 커밋)
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
<<<<<<< HEAD
<<<<<<< HEAD
            <div title={props.props.studyTitle}>
              <TitleText type="sub_2_bold">
                {props.props.studyType === "online" ? (
                  <StudyTypeOnlineTag>온라인</StudyTypeOnlineTag>
                ) : (
                  <StudyTypeOfflineTag>오프라인</StudyTypeOfflineTag>
                )}
                <TitleSection>스터디명 : {props.props.studyTitle}</TitleSection>
=======
          <div title={props.props.studyTitle}>
              <TitleText type="sub_2_bold">
              {props.props.studyType === "online" ? (
                <StudyTypeOnlineTag>온라인</StudyTypeOnlineTag>
              ) : (
                <StudyTypeOfflineTag>오프라인</StudyTypeOfflineTag>
              )}
            <TitleSection>
                스터디명 : {props.props.studyTitle}
            </TitleSection>
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
              </TitleText>
            </div>
            {props.props.studyType === "online" ? null : (
              <InfoText type="sub_2">
                금액 : {props.props.studyPrice}원
              </InfoText>
            )}
<<<<<<< HEAD
            <InfoText type="sub_2">
              일시 : {splitedYY}년 {splitedMM}월 {splitedDD}일 {splitedTime}
            </InfoText>

            {props.props.studyType === "online" ? null : (
              <InfoText type="sub_2">
                <div
                  title={
                    props.props.studyAddr + "," + props.props.studyAddrDetail
                  }
                >
                  <LocationSection>
                    위치 : {props.props.studyAddr},{" "}
                    {props.props.studyAddrDetail}
                  </LocationSection>
                </div>
              </InfoText>
            )}
=======
            <TitleText type="sub_2_bold">
              스터디명 :{props.props.studyTitle}
            </TitleText>
            <InfoText type="sub_2">금액 : {props.props.studyPrice}원</InfoText>
=======
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
            <InfoText type="sub_2">
              일시 : {splitedYY}년 {splitedMM}월 {splitedDD}일 {splitedTime}
            </InfoText>

            {props.props.studyType === "online" ? null : (
            <InfoText type="sub_2">
              <div title={props.props.studyAddr + "," + props.props.studyAddrDetail}>
                <LocationSection>
                  위치 : {props.props.studyAddr}, {props.props.studyAddrDetail}
                </LocationSection>
              </div>
            </InfoText>
<<<<<<< HEAD
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
            )}

>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          {props.props.isStudyEnd === true ? null : props.props.studyType ===
            "online" ? (
=======
        {props.props.studyType === "online" ? (
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
=======
        {props.props.isStudyEnd === true ? null : (
          props.props.studyType === "online" ? (
>>>>>>> d002026 (page(Main): 각종 사항 수정 후 커밋)
            <JoinOnlineStudyRoom
              onClick={() => {
                history.push({
                  pathname: `/room/${studyId}`,
<<<<<<< HEAD
                  state: { meetingId: props.props.meetingId },
=======
                  state: { meetingId: __crewId },
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
                });
              }}
            >
              온라인 스터디룸 입장
            </JoinOnlineStudyRoom>
<<<<<<< HEAD
          ) : null}
<<<<<<< HEAD
<<<<<<< HEAD

=======
          ) : null
        )}
        
>>>>>>> d002026 (page(Main): 각종 사항 수정 후 커밋)
          {/* {props.isJoinedCrew === false ||
=======
=======
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
          {props.isJoinedCrew === false ||
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
          {/* {props.isJoinedCrew === false ||
>>>>>>> 8c60712 (page(Main): 버그 및 css 수정 후 커밋)
          props.props.studyMasterProfile.userId ===
            parseInt(loginId) ? null : props.props.isStudyJoined === true ? (
            <JoinBtn shape="red-outline" onClick={clickInOutStudyBtn}>
              취소하기
            </JoinBtn>
          ) : (
            <JoinBtn shape="brown-outline" onClick={clickInOutStudyBtn}>
              참가하기
            </JoinBtn>
<<<<<<< HEAD
<<<<<<< HEAD
          )} */}
        </RightBox>
      </AccordionHeaderWrap>
      {props.props.isStudyEnd === true ? (
        <NoticeTag style={{ backgroundColor: "#ED6D59" }}></NoticeTag>
      ) : (
        <NoticeTag style={{ backgroundColor: "#A2D16E" }}></NoticeTag>
      )}
=======
          )}
=======
          )} */}
>>>>>>> 8c60712 (page(Main): 버그 및 css 수정 후 커밋)
        </RightBox>
      </AccordionHeaderWrap>
<<<<<<< HEAD
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
      {props.props.isStudyEnd === true ? (
        <NoticeTag style={{ backgroundColor: "#ED6D59" }}></NoticeTag>
      ) : (
        <NoticeTag style={{ backgroundColor: "#A2D16E" }}></NoticeTag>
      )}
>>>>>>> d002026 (page(Main): 각종 사항 수정 후 커밋)
    </AccordionSummaryWrap>
  );
};

export default AccordionSummaryComponent;

const AccordionSummaryWrap = styledComp.div`
  ${flex}
<<<<<<< HEAD
<<<<<<< HEAD
  width:900px;
  height:130px;
=======
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
  width:900px;
  height:130px;
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
  background-color: #fbf9f9;
  padding: 10px 0;
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
<<<<<<< HEAD
<<<<<<< HEAD
  display:inline-block;
  ${flex("between", "center")}
  width: 800px;
  
=======
  ${flex("between", "center")}
  width: 100%;

>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
  display:inline-block;
  ${flex("between", "center")}
  width: 800px;
  
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
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
<<<<<<< HEAD
<<<<<<< HEAD
  font-size: 35px;
=======

>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
  font-size: 35px;
>>>>>>> afcd110 (page(Main): 수정 사항 배포 확인차 커밋)
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

const TitleText = styledComp(Eltext)``;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
const TitleSection = styledComp.div`
// border: 1px solid black;
  width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const InfoText = styledComp(Eltext)``;

const LocationSection = styledComp.div`
  width: 390px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

<<<<<<< HEAD
=======
const InfoText = styledComp(Eltext)``;

>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
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

<<<<<<< HEAD
<<<<<<< HEAD
const JoinOnlineStudyRoom = styledComp(Elbutton)`
  width: 160px;
=======
=======
const JoinOnlineStudyRoom = styledComp(Elbutton)`
  width: 160px;
  height: 30px;
  margin-right: 20px;
  border-radius: 5px;
`;

<<<<<<< HEAD
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
const JoinBtn = styledComp(Elbutton)`
  width: 96px;
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
  height: 30px;
  margin-right: 20px;
  border-radius: 5px;
`;
=======
// const JoinBtn = styledComp(Elbutton)`
//   width: 96px;
//   height: 30px;
//   margin-right: 20px;
//   border-radius: 5px;
// `;
>>>>>>> 8c60712 (page(Main): 버그 및 css 수정 후 커밋)

<<<<<<< HEAD
// const JoinBtn = styledComp(Elbutton)`
//   width: 96px;
//   height: 30px;
//   margin-right: 20px;
//   border-radius: 5px;
// `;

const RightBox = styledComp.div`
  // ${flex("end", "center", true)}
  // width: 100%;
  position: absolute;
  bottom: -20px;
  // margin-top: -20px;
  right: 180px;
  ${flex("end", "center", true)}
  width: 300px;
=======
const RightBox = styledComp.div`
  // ${flex("end", "center", true)}
  // width: 100%;
  position: absolute;
  bottom: -20px;
  // margin-top: -20px;
  right: 180px;
  ${flex("end", "center", true)}
<<<<<<< HEAD
  width: 100%;
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
  width: 300px;
>>>>>>> 8c60712 (page(Main): 버그 및 css 수정 후 커밋)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d002026 (page(Main): 각종 사항 수정 후 커밋)
`;

const NoticeTag = styledComp.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 10px;
  height: 100%;
<<<<<<< HEAD
`;
=======
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
`;
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
=======
`;
>>>>>>> d002026 (page(Main): 각종 사항 수정 후 커밋)
