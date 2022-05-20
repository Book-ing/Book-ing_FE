import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { editorApi } from "../../api/editorApi";

// Action

// const LOAD_CREW = "main/LOAD_CREW";
const ADD_STUDY_NOTE = "editor/ADD_STUDY_NOTE";
const MODIFY_STUDY_NOTE = "editor/MODIFY_STUDY_NOTE";

// ActionCreator

// const loadCrew = createAction(LOAD_CREW, (list) => list);
const addStudyNote = createAction(ADD_STUDY_NOTE, (data) => ({ data }));
const modifyStudyNote = createAction(MODIFY_STUDY_NOTE, (data) => ({ data }));

//initialState

const initialState = {
  isMeetingMaster: "",
  myMeeting: "",
  todayMeeting: "",
  recommendMeeting: "",
  newMeeting: "",
};

const addStudyNoteDB = (studyNoteInfo) => {
  return function (dispatch) {
    console.log(studyNoteInfo);

    editorApi
      .posting(studyNoteInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log("게시글 등록 에러!");
      });
  };
};

const modifyStudyNoteDB = (studyNoteInfo) => {
  return function (dispatch) {
    console.log(studyNoteInfo);

    editorApi
      .modifying(studyNoteInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log("게시글 등록 에러!");
      });
  };
};

export default handleActions(
  {
    [ADD_STUDY_NOTE]: (state, action) => produce(state, (draft) => {}),
    [MODIFY_STUDY_NOTE]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const editorActions = {
  addStudyNoteDB,
  modifyStudyNoteDB,
};

export { editorActions };
