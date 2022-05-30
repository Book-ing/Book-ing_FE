import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Modules
import { studyActions } from "../../redux/modules/study";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { actionCreators as mypageActions } from "../../redux/modules/mypage";
=======
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
import { actionCreators as mypageActions } from "../../redux/modules/mypage";
>>>>>>> d002026 (page(Main): 각종 사항 수정 후 커밋)
=======
>>>>>>> 8ab56eb (commit before pull Taak-ee's branch)
=======
import { actionCreators as mypageActions } from "../../redux/modules/mypage";
>>>>>>> 526f94e (page(Main): Merge 과정에서 생긴 문제 해결 후 커밋)
import { actionCreators as accordionActions } from "../../redux/modules/accordion";

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
<<<<<<< HEAD
<<<<<<< HEAD
  const history = useHistory();
<<<<<<< HEAD
  // console.log(props);
<<<<<<< HEAD
  // Redux Store
  const __crewId = props.props.meetingId;
  const loginId = localStorage.getItem("userId");

  // console.log(props.checkState);
  // console.log(props.setCheckState);
=======
=======
  const history = useHistory();
<<<<<<< HEAD
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)

=======
>>>>>>> d002026 (page(Main): 각종 사항 수정 후 커밋)
=======

>>>>>>> 8ab56eb (commit before pull Taak-ee's branch)
=======
  // console.log(props);
>>>>>>> 526f94e (page(Main): Merge 과정에서 생긴 문제 해결 후 커밋)
  // Redux Store
  const __crewId = props.props.meetingId;
  const loginId = localStorage.getItem("userId");

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
  // console.log(props.checkState);
  // console.log(props.setCheckState);
>>>>>>> d002026 (page(Main): 각종 사항 수정 후 커밋)
=======
>>>>>>> 8ab56eb (commit before pull Taak-ee's branch)
=======
  // console.log(props.checkState);
  // console.log(props.setCheckState);
>>>>>>> 526f94e (page(Main): Merge 과정에서 생긴 문제 해결 후 커밋)
  // variables
  const studyId = props.props.studyId;
  const studyDate = props.props.studyDateTime;
  const [splitedStudyDate, splitedTime] = studyDate.split(" ");
  const [splitedYY, splitedMM, splitedDD] = splitedStudyDate.split("-");

  const clickInOutStudyBtn = () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    props.setCheckState(!props.checkState);
    dispatch(studyActions.inOutStudyDB(__crewId, studyId));
    dispatch(mypageActions.getJoinedStudyDB());
    const status = false;
    history.push({
      pathname:"/mypage",
      state: status});
=======
    dispatch(studyActions.inOutStudyDB(__crewId, studyId));
<<<<<<< HEAD
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
    props.setCheckState(!props.checkState);
>>>>>>> afcd110 (page(Main): 수정 사항 배포 확인차 커밋)
=======
    props.setCheckState(!props.checkState);
    dispatch(studyActions.inOutStudyDB(__crewId, studyId));
=======
    props.setCheckState(!props.checkState);
    dispatch(studyActions.inOutStudyDB(__crewId, studyId));
    dispatch(mypageActions.getJoinedStudyDB());
>>>>>>> 526f94e (page(Main): Merge 과정에서 생긴 문제 해결 후 커밋)
    const status = false;
    history.push({
      pathname:"/mypage",
      state: status});
<<<<<<< HEAD
>>>>>>> d002026 (page(Main): 각종 사항 수정 후 커밋)
=======
    dispatch(studyActions.inOutStudyDB(__crewId, studyId));
    props.setCheckState(!props.checkState);
>>>>>>> 8ab56eb (commit before pull Taak-ee's branch)
=======
>>>>>>> 526f94e (page(Main): Merge 과정에서 생긴 문제 해결 후 커밋)
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
    e.stopPropagation();
    setEditStudyModal(true);
  };

  const handleEditStudyModalClose = (e) => {
    e.stopPropagation();
    setEditStudyModal(false);
  };

  const clickDeleteStudyBtn = () => {
    dispatch(studyActions.deleteStudyDB(studyId, __crewId));
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
        {props.isJoinedCrew === true &&
        props.props.studyMasterProfile.userId ===
          parseInt(localStorage.getItem("userId")) ? (
          <MenuBtn onClick={handleClick}>
            <LinearScaleIcon sx={{ fontSize: 35 }} />
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
              <TitleText type="sub_2_bold">
=======
            <TitleText type="sub_2_bold">
>>>>>>> 8ab56eb (commit before pull Taak-ee's branch)
=======
              <TitleText type="sub_2_bold">
>>>>>>> 526f94e (page(Main): Merge 과정에서 생긴 문제 해결 후 커밋)
              {props.props.studyType === "online" ? (
                <StudyTypeOnlineTag>온라인</StudyTypeOnlineTag>
              ) : (
                <StudyTypeOfflineTag>오프라인</StudyTypeOfflineTag>
              )}
            <div title={props.props.studyTitle}>
              <TitleSection>
                스터디명 : {props.props.studyTitle}
              </TitleSection>
            </div>
              </TitleText>
              {props.props.studyType === "online" ? null : (
              <InfoText type="sub_2">
                금액 : {props.props.studyPrice}원
              </InfoText>
<<<<<<< HEAD
<<<<<<< HEAD
              )}
<<<<<<< HEAD
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
            )}

=======
            <TitleText type="sub_2_bold">
              스터디명 :{props.props.studyTitle}
            </TitleText>
            <InfoText type="sub_2">금액 : {props.props.studyPrice}원</InfoText>
=======
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
=======
            )}
>>>>>>> 8ab56eb (commit before pull Taak-ee's branch)
=======
              )}
>>>>>>> 526f94e (page(Main): Merge 과정에서 생긴 문제 해결 후 커밋)
            <InfoText type="sub_2">
              일시 : {splitedYY}년 {splitedMM}월 {splitedDD}일 {splitedTime}
            </InfoText>

            {props.props.studyType === "online" ? null : (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 526f94e (page(Main): Merge 과정에서 생긴 문제 해결 후 커밋)
            <InfoText type="sub_2">
              <div title={props.props.studyAddr + "," + props.props.studyAddrDetail}>
                <LocationSection>
                  위치 : {props.props.studyAddr}, {props.props.studyAddrDetail}
                </LocationSection>
              </div>
            </InfoText>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
            )}

>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
=======
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
>>>>>>> 8ab56eb (commit before pull Taak-ee's branch)
=======
            )}

>>>>>>> 526f94e (page(Main): Merge 과정에서 생긴 문제 해결 후 커밋)
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
<<<<<<< HEAD
<<<<<<< HEAD
        {props.props.isStudyEnd === true ? null : (
          props.props.studyType === "online" ? (
=======
        {props.props.studyType === "online" ? (
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
=======
        {props.props.isStudyEnd === true ? null : (
          props.props.studyType === "online" ? (
>>>>>>> d002026 (page(Main): 각종 사항 수정 후 커밋)
=======
          {props.props.studyType === "online" ? (
>>>>>>> 8ab56eb (commit before pull Taak-ee's branch)
=======
        {props.props.isStudyEnd === true ? null : (
          props.props.studyType === "online" ? (
>>>>>>> 526f94e (page(Main): Merge 과정에서 생긴 문제 해결 후 커밋)
            <JoinOnlineStudyRoom
              onClick={() => {
                history.push({
                  pathname: `/room/${studyId}`,
                  state: { meetingId: __crewId },
                });
              }}
            >
              온라인 스터디룸 입장
            </JoinOnlineStudyRoom>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          ) : null
        )}
=======
          ) : null}
>>>>>>> 8ab56eb (commit before pull Taak-ee's branch)

          {/* {props.isJoinedCrew === false ||
=======
          {props.isJoinedCrew === false ||
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
          ) : null}
=======
          ) : null
        )}
>>>>>>> d002026 (page(Main): 각종 사항 수정 후 커밋)
=======
          ) : null
        )}
>>>>>>> 526f94e (page(Main): Merge 과정에서 생긴 문제 해결 후 커밋)

          {/* {props.isJoinedCrew === false ||
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
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
        {props.props.isStudyEnd === true ? null : (
          props.props.studyType === "online" ? (
            <JoinBtn shape="red-outline" onClick={clickInOutStudyBtn}>
            취소하기
            </JoinBtn>
            ) : (
            <div style={{position:"absolute", marginTop:"-75px"}}>
            <JoinBtn shape="red-outline" onClick={clickInOutStudyBtn}>
            취소하기
            </JoinBtn>
            </div>
            )
        )}    
 
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
        {props.props.isStudyEnd === true ? null : (
          props.props.studyType === "online" ? (
            <JoinBtn shape="red-outline" onClick={clickInOutStudyBtn}>
            취소하기
            </JoinBtn>
            ) : (
            <div style={{position:"absolute", marginTop:"-75px"}}>
            <JoinBtn shape="red-outline" onClick={clickInOutStudyBtn}>
            취소하기
            </JoinBtn>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
            )
        )}    
 
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
=======
            )
        )}    
 
>>>>>>> 526f94e (page(Main): Merge 과정에서 생긴 문제 해결 후 커밋)
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
=======
          )}
        </RightBox>
      </AccordionHeaderWrap>
>>>>>>> 8ab56eb (commit before pull Taak-ee's branch)
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

  &:hover {
    color: var(--notice)
  }
`;

const CrewInfo = styledComp.div`
  ${flex("center", "start", false)}
  margin-left: 40px;
<<<<<<< HEAD
<<<<<<< HEAD
  width: 400px;
=======
  min-width: 400px;
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
  width: 400px;
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)

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
  width: 390px;
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
=======
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
const JoinOnlineStudyRoom = styledComp(Elbutton)`
  width: 160px;
  height: 30px;
  margin-right: 20px;
  border-radius: 5px;
`;

<<<<<<< HEAD
=======
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
const JoinBtn = styledComp(Elbutton)`
  width: 96px;
  height: 30px;
  margin-right: 20px;
  border-radius: 5px;
`;

const RightBox = styledComp.div`
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
  position: absolute;
  bottom: -20px;
  // margin-top: -20px;
  right: 55px;
<<<<<<< HEAD
  ${flex("end", "center", true)}
  width: 300px;
  // border:1px solid black;
=======
  ${flex("end", "center", true)}
  width: 100%;
>>>>>>> f0be747 (page(Mypage):Mypage 작성 완료 후 merge 위한 커밋)
=======
  ${flex("end", "center", true)}
  width: 300px;
  // border:1px solid black;
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
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
`;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d002026 (page(Main): 각종 사항 수정 후 커밋)

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
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
=======
`;
>>>>>>> d002026 (page(Main): 각종 사항 수정 후 커밋)
=======
>>>>>>> 8ab56eb (commit before pull Taak-ee's branch)
