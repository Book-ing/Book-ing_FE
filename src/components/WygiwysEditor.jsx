import React, { useRef } from "react";
import Prism from "prismjs";
import styled from "styled-components";
import Elchip from "../elements/Elchip";
import { useDispatch } from "react-redux";

import { uploadFile } from "../shared/uploadFile";
import { editorActions } from "../redux/modules/editor";

import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";

import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";

import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "../themes/toastEditor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import { useHistory } from "react-router-dom";

<<<<<<< HEAD
<<<<<<< HEAD
const WygiwysEditor = ({ option, studyInfo }) => {
=======
const WygiwysEditor = ({ option, studyInfo}) => {
>>>>>>> 668866c (components(Editor):수정, 케이스별로 보여줄 버튼 로직 구현)
=======
const WygiwysEditor = ({ option, studyInfo }) => {
>>>>>>> ef4e324 (chore(setenv): env 파일 수정커밋입니다.)
  // 추가 가능 옵션 ref
  // functions : handleSave, handleEdit, handleCancle
  const history = useHistory();
  const editorRef = useRef();
  const dispatch = useDispatch();

  const onChangeIntroFunction = () => {
    const editorInstance = editorRef.current.getInstance();
    const getContent_md = editorInstance.getMarkdown();
    console.log(getContent_md);
<<<<<<< HEAD
<<<<<<< HEAD
    console.log(studyInfo);
=======
    console.log(studyInfo)
>>>>>>> 668866c (components(Editor):수정, 케이스별로 보여줄 버튼 로직 구현)
=======
    console.log(studyInfo);
>>>>>>> ef4e324 (chore(setenv): env 파일 수정커밋입니다.)

    const studyNoteInfo = {
      studyId: studyInfo.studyId,
      studyNote: getContent_md,
    };

    studyInfo.studyNote === undefined
      ? dispatch(editorActions.addStudyNoteDB(studyNoteInfo))
      : dispatch(editorActions.modifyStudyNoteDB(studyNoteInfo));
    window.location.replace(
      `https://www.book-ing.co.kr/crew/${studyInfo.meetingId}`
    );
  };
<<<<<<< HEAD

<<<<<<< HEAD
=======
     
    studyInfo.studyNote === undefined ? 
    dispatch(editorActions.addStudyNoteDB(studyNoteInfo)) 
    :
    dispatch(editorActions.modifyStudyNoteDB(studyNoteInfo))
    window.location.replace(`http://localhost:3000/crew/${studyInfo.meetingId}`)
  }
=======
>>>>>>> ef4e324 (chore(setenv): env 파일 수정커밋입니다.)

>>>>>>> 668866c (components(Editor):수정, 케이스별로 보여줄 버튼 로직 구현)
  const defaultOpt = {
    previewStyle: "vertical",
    initialEditType: "wysiwyg",
    height: "1137px",
    useCommandShortcut: true,
    previewHighlight: false,
    // hideModeSwitch: true,
    language: "ko-KR",
    // colorSyntax: 글자 색 바꾸는 기능 / condeSyntaxHighlight : 언어에 따른 코드 색 변경
    plugins: [colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]],
<<<<<<< HEAD
<<<<<<< HEAD
    initialValue: `${
      studyInfo.studyValue ? studyInfo.studyValue : ""
    }`,
=======
    initialValue: `${studyInfo.studyValue ? studyInfo.studyValue : "새글을 작석하세요"}`,
>>>>>>> 668866c (components(Editor):수정, 케이스별로 보여줄 버튼 로직 구현)
=======
    initialValue: `${
      studyInfo.studyValue ? studyInfo.studyValue : ""
    }`,
>>>>>>> ef4e324 (chore(setenv): env 파일 수정커밋입니다.)
    hooks: {
      addImageBlobHook: async (blob, callback) => {
        const imgUrl = await uploadFile(blob);
        callback(imgUrl, "alt text");
      },
    },
  };

  const resultOpt = {
    ...defaultOpt,
    ...option,
  };

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ef4e324 (chore(setenv): env 파일 수정커밋입니다.)
  return (
    <>
      <Editor {...resultOpt} ref={editorRef} />
      {studyInfo.studyValue === undefined ? (
        <BtnGrid>
          <Elchip
            shape="LineBtn"
            width="148px"
            height="45px"
            onClick={onChangeIntroFunction}
          >
            게시하기
          </Elchip>
        </BtnGrid>
      ) : (
        <BtnGrid>
          <Elchip
            shape="LineBtn"
            width="148px"
            height="45px"
            onClick={onChangeIntroFunction}
          >
            수정하기
          </Elchip>
        </BtnGrid>
      )}
    </>
<<<<<<< HEAD
=======
  return ( 
      <>
      <Editor {...resultOpt} 
        ref={editorRef}/>   
      {studyInfo.studyValue === undefined ?  
      <BtnGrid>
        <Elchip shape="LineBtn" width="148px" height="45px"
        onClick={onChangeIntroFunction}>
          게시하기
        </Elchip>
      </BtnGrid>
      :
      <BtnGrid>
        <Elchip shape="LineBtn" width="148px" height="45px"
          onClick={onChangeIntroFunction}>
          수정하기
        </Elchip>
      </BtnGrid>
      }
      </>
>>>>>>> 668866c (components(Editor):수정, 케이스별로 보여줄 버튼 로직 구현)
=======
>>>>>>> ef4e324 (chore(setenv): env 파일 수정커밋입니다.)
  );
};

export default WygiwysEditor;

const BtnGrid = styled.div`
  margin-left: 500px;
  margin-top: 100px;
<<<<<<< HEAD
<<<<<<< HEAD
`;
=======
`;
>>>>>>> 668866c (components(Editor):수정, 케이스별로 보여줄 버튼 로직 구현)
=======
`;
>>>>>>> ef4e324 (chore(setenv): env 파일 수정커밋입니다.)
