import React, { useRef } from "react";
import Prism from "prismjs";
import styled from "styled-components";
import Elchip from "../elements/Elchip";
import { useDispatch } from "react-redux";

import { uploadFile } from "../shared/uploadFile";
import { editorActions } from "../redux/modules/editor";
import { actionCreators as mypageActions } from "../redux/modules/mypage";

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

const WygiwysEditor = ({ option, studyInfo }) => {
  // 추가 가능 옵션 ref
  // functions : handleSave, handleEdit, handleCancle
  const history = useHistory();
  const editorRef = useRef();
  const dispatch = useDispatch();

  const onChangeIntroFunction = () => {
    const editorInstance = editorRef.current.getInstance();
    const getContent_md = editorInstance.getMarkdown();

    const status = true;

    const studyNoteInfo = {
      studyId: studyInfo.studyId,
      studyNote: getContent_md,
    };

    studyInfo.studyNote === undefined
      ? dispatch(editorActions.addStudyNoteDB(studyNoteInfo))
      : (dispatch(editorActions.modifyStudyNoteDB(studyNoteInfo)));
      history.push({
        pathname:"/mypage",
        state: status,
        search: `?study=${studyInfo.studyId}`
      })
  };

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
    initialValue: `${studyInfo.studyValue ? studyInfo.studyValue : ""}`,
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
  );
};

export default WygiwysEditor;

const BtnGrid = styled.div`
  margin-left: 500px;
  margin-top: 100px;
`;
