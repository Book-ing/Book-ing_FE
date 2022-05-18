import * as React from "react";
<<<<<<< HEAD:src/components/Accordion/AccordionDetailsComponent.jsx
import { useHistory } from "react-router-dom";
=======
import { useState } from "react";
>>>>>>> 5079c71 (chore(feature/crewpage): 주탁님 에디터 작업 현황 반영 커밋입니다):src/Components/Accordion/AccordionDetailsComponent.jsx

// mui
import { styled } from "@mui/material/styles";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Avatar, Grid } from "@mui/material";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import { Box, Popover } from "@mui/material";

// styled components
import styledComp from "styled-components";
import { Eltext, Elbutton } from "../../elements";

// theme
import flex from "../../themes/flex";
import Location from "../Location";

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(5),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const studyNote = null;


const AccordionDetailsComponent = (props) => {
<<<<<<< HEAD:src/components/Accordion/AccordionDetailsComponent.jsx
  const history = useHistory();
=======
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

>>>>>>> 5079c71 (chore(feature/crewpage): 주탁님 에디터 작업 현황 반영 커밋입니다):src/Components/Accordion/AccordionDetailsComponent.jsx
  return (
    <AccordionDetails>
      <Grid container sx={{ mb: "45px" }}>
        <Grid item xs={6}>
          <StudysectionTag type="sub_2_bold">스터디 공지</StudysectionTag>

          <StudyNoticeText type="sub_2">
            {props.props.studyNotice}
          </StudyNoticeText>
        </Grid>

        <Grid item xs={6}>
          <StudysectionTag type="sub_2_bold">위치</StudysectionTag>
          {/* Markered 지도 삽입 */}
          <KAKAOMAPSECTION style={{ marginTop: "20px" }}>
            <Location props={props.props} />
          </KAKAOMAPSECTION>
        </Grid>
      </Grid>

      {/* NoteSection */}
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <StudysectionTag type="sub_2_bold">노트 정리</StudysectionTag>
        <NoteSection>
          {props.isJoinedCrew === true ? (
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
              <MoreBtns shape="brown-outline">스터디 노트 수정</MoreBtns>
              <MoreBtns shape="brown-outline">스터디 노트 삭제</MoreBtns>
            </Box>
          </Popover>

          <Grid>
            <NoteBookInfoTag type="sub_2_bold">스터디 책 정보</NoteBookInfoTag>
            <Grid
              container
              direction="row"
              justifyContent="start"
              alignItems="start"
              style={{ marginBottom: " 80px" }}
            >
              <Grid
                item
                style={{
                  maxWidth: "150px",
                }}
              >
                <Avatar
                  sx={{ width: "150px", height: "220px" }}
                  variant="square"
                  src={props.props.studyBookImg}
                />
              </Grid>
              <Grid item xs style={{ marginLeft: "40px" }}>
                <Eltext type="sub_2_bold">
                  책 제목 : {props.props.studyBookTitle}
                </Eltext>
                <Eltext type="sub_2">지은이 : 필요값{}</Eltext>
                <Eltext type="sub_2">출판사 : 필요값{}</Eltext>
                <Eltext type="sub_2">
                  책 소개 :
                  <br />
                  {props.props.studyBookInfo}...
                </Eltext>
              </Grid>
            </Grid>
            <Grid>
              <StudyNoteTag type="sub_2_bold">스터디 노트</StudyNoteTag>
              <Grid sx={{ minHeight: "200px" }}>
                {studyNote !== null ? (
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      width: "100%",
                      minHeight: "200px",
                    }}
                  >
                    <NoneNoteText type="sub_2">
                      스터디 노트가 작성되지 않았습니다.
                    </NoneNoteText>
                    <CreateStudyNote shape="brown-outline">
                      작성하기
                    </CreateStudyNote>
                  </Grid>
                ) : (
                  // <Grid
                  //   container
                  //   direction="column"
                  //   justifyContent="center"
                  //   alignItems="center"
                  //   sx={{
                  //     width: "100%",
                  //     minHeight: "200px",
                  //   }}
                  // >
                  //   <Eltext type="head_1">
                  //     이곳에 TOAST Editor Viewer 삽입
                  //   </Eltext>
                  // </Grid>
                  <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    width: "100%",
                    minHeight: "200px",
                  }}
                >
                  <NoneNoteText type="sub_2">
                      스터디 노트가 작성되지 않았습니다.
                    </NoneNoteText>
                    <CreateStudyNote shape="brown-outline"
                      onClick={()=> {history.push({
                        pathname: "/notewrites",
                        state: {bookInfo: props}
                      })}}
                    >
                      작성하기
                    </CreateStudyNote>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </NoteSection>
      </Grid>
    </AccordionDetails>
  );
};

export default AccordionDetailsComponent;

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

const MenuBtn = styledComp.button`
  ${flex("center", "center", false)}
  position: absolute;
  height: 20px;
  right: 10px;
  top: 10px;
  color: var(--point);

  &:hover {
    color: var(--notice)
  }
`;

const StudysectionTag = styled(Eltext)`
  ${flex}
  width: 96px;
  height: 35px;
  margin-bottom: 10px;
  border-radius: 7px;
  color: var(--white);
  background-color: var(--point);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const StudyNoticeText = styled(Eltext)`
  width: 80%;
  margin: 20px 0 0 10px;
`;

const NoteSection = styledComp.div`
  position: relative;
  border: 1px dashed var(--point);
  width: 100%;
  padding: 30px 90px;
`;

const NoteBookInfoTag = styled(Eltext)`
  ${flex}
  width: 148px;
  height: 35px;
  margin-bottom: 10px;
  border-radius: 7px;
  color: var(--white);
  background-color: var(--point);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const StudyNoteTag = styled(Eltext)`
  ${flex}
  width: 120px;
  height: 35px;
  margin-bottom: 10px;
  border-radius: 7px;
  color: var(--white);
  background-color: var(--point);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const NoneNoteText = styled(Eltext)`
  color: var(--point);
`;

const CreateStudyNote = styled(Elbutton)`
  width: 96px;
  height: 30px;
  border-radius: 5px;
  margin-top: 20px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const KAKAOMAPSECTION = styledComp.div`
  border: 2px solid var(--point);
  width: 100%;
  min-height: 300px;
`;
