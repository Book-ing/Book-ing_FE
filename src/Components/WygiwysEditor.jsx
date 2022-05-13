import React from "react";
import Prism from "prismjs";

import { uploadFile } from "../shared/uploadFile";

import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "../themes/toastEditor.css";
import "@toast-ui/editor/dist/i18n/ko-kr"

const WygiwysEditor = ({ option, functions }) => {
  // 추가 가능 옵션 ref
  // functions : handleSave, handleEdit, handleCancle

  const defaultOpt = {
    previewStyle: "vertical",
    initialEditType: "wysiwyg",
    height: "1137px",
    useCommandShortcut: true,
    previewHighlight: false,
    hideModeSwitch: true,
    language: "ko-KR",
    // colorSyntax: 글자 색 바꾸는 기능 / condeSyntaxHighlight : 언어에 따른 코드 색 변경
    plugins: [colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]],
    initialValue: "모임이 종료 후 모임에 대한 노트 정리를 해주세요!!",
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

  return <Editor {...resultOpt} />;
};

export default WygiwysEditor;