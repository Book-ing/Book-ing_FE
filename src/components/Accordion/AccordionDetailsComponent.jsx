import * as React from "react";
import { useHistory, useParams } from "react-router-dom";

// mui
import { styled } from "@mui/material/styles";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Avatar, Grid } from "@mui/material";
import LinearScaleIcon from "@mui/icons-material/LinearScale";

// styled components
import styledComp from "styled-components";
import { Eltext, Elbutton } from "../../elements";

// theme
import flex from "../../themes/flex";
import Location from "../Location";

// tui-veiwer
import '@toast-ui/editor/dist/toastui-editor-viewer.css'; 
import { Viewer } from '@toast-ui/react-editor';

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(5),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const studyNote = null;

const AccordionDetailsComponent = (props) => {
  const history = useHistory();
  const params = useParams();

  console.log(params)
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
            <MenuBtn>
              <LinearScaleIcon sx={{ fontSize: 35 }} />
            </MenuBtn>
          ) : null}
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
                <Eltext type="sub_2">지은이 : {props.props.studyBookwriter}</Eltext>
                <Eltext type="sub_2">출판사 : {props.props.studyBookPublisher}</Eltext>
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


                {props.props.studyNote === undefined ? 
                ( 
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    width: "100%",
                    minHeight: "200px"}}>
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
                ) : (
                  
                    <Eltext type="head_1">
                      <Viewer initialValue={props.props.studyNote}/>
                    </Eltext>
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

// 뷰단 원래 있던 그리드 css
// <Grid
//   container
//   direction="column"
//   justifyContent="center"
//   alignItems="center"
//   sx={{
//     width: "1000px",
//     minHeight: "200px",
//   }}
// >
// </Grid>
