import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Modules
import { studyActions } from "../../redux/modules/study";
import { actionCreators as mypageActions } from "../../redux/modules/mypage";
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
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

  // Redux Store
  const __crewId = props.props.meetingId;
  const loginId = localStorage.getItem("userId");

  // variables
  const studyId = props.props.studyId;
  const studyDate = props.props.studyDateTime;
  const [splitedStudyDate, splitedTime] = studyDate.split(" ");
  const [splitedYY, splitedMM, splitedDD] = splitedStudyDate.split("-");

  const clickInOutStudyBtn = () => {
    props.setCheckState(!props.checkState);
    dispatch(studyActions.inOutStudyDB(__crewId, studyId));
    dispatch(mypageActions.getJoinedStudyDB());
    const status = false;
    history.push({
      pathname: "/mypage",
      state: status,
    });
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
              ????????? ??????
            </MoreBtns>
            <MoreBtns shape="brown-outline" onClick={clickDeleteStudyBtn}>
              ????????? ??????
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
                <StudyTypeOnlineTag>?????????</StudyTypeOnlineTag>
              ) : (
                <StudyTypeOfflineTag>????????????</StudyTypeOfflineTag>
              )}
              <div title={props.props.studyTitle}>
                <TitleSection>???????????? : {props.props.studyTitle}</TitleSection>
              </div>
            </TitleText>
            {props.props.studyType === "online" ? null : (
              <InfoText type="sub_2">
                ?????? : {props.props.studyPrice}???
              </InfoText>
            )}
            <InfoText type="sub_2">
              ?????? : {splitedYY}??? {splitedMM}??? {splitedDD}??? {splitedTime}
            </InfoText>

            {props.props.studyType === "online" ? null : (
              <InfoText type="sub_2">
                <div
                  title={
                    props.props.studyAddr + "," + props.props.studyAddrDetail
                  }
                >
                  <LocationSection>
                    ?????? : {props.props.studyAddr},{" "}
                    {props.props.studyAddrDetail}
                  </LocationSection>
                </div>
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
              {props.props.studyUserCnt}??? /{props.props.studyLimitCnt}???
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
          {/*  ??????????????? ?????? section start */}
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
          {/*  ??????????????? ?????? section start */}
        </Grid>

        <RightBox>
          {props.props.isStudyEnd === true ? null : props.props.studyType ===
            "online" ? (
            <JoinOnlineStudyRoom
              onClick={() => {
                history.push({
                  pathname: `/room/${studyId}`,
                  state: { meetingId: __crewId, studyData: props.props },
                });
              }}
            >
              ????????? ???????????? ??????
            </JoinOnlineStudyRoom>
          ) : null}

          {props.props.isStudyEnd === true ? null : props.props.studyType ===
            "online" ? (
            <JoinBtn shape="red-outline" onClick={clickInOutStudyBtn}>
              ????????????
            </JoinBtn>
          ) : (
            <div style={{ position: "absolute", marginTop: "-75px" }}>
              <JoinBtn shape="red-outline" onClick={clickInOutStudyBtn}>
                ????????????
              </JoinBtn>
            </div>
          )}
        </RightBox>
      </AccordionHeaderWrap>
      {props.props.isStudyEnd === true ? (
        <NoticeTag style={{ backgroundColor: "#ED6D59" }}></NoticeTag>
      ) : (
        <NoticeTag style={{ backgroundColor: "#A2D16E" }}></NoticeTag>
      )}
    </AccordionSummaryWrap>
  );
};

export default AccordionSummaryComponent;

const AccordionSummaryWrap = styledComp.div`
  ${flex}
  width:900px;
  height:130px;
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
  display:inline-block;
  ${flex("between", "center")}
  width: 800px;

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
  width: 400px;

  @media screen and (max-width: 1260px) {
    min-width: 300px;
    margin-left: 0;
  
`;

const TitleText = styledComp(Eltext)``;

const TitleSection = styledComp.div`
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
  position: absolute;
  bottom: -20px;
  right: 55px;
  ${flex("end", "center", true)}
  width: 300px;
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

const NoticeTag = styledComp.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 10px;
  height: 100%;
`;
