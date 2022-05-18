import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { editorApi } from "../../api/editorApi";

// Action

// const LOAD_CREW = "main/LOAD_CREW";
const ADD_STUDY_NOTE = "editor/ADD_STUDY_NOTE";

// ActionCreator

// const loadCrew = createAction(LOAD_CREW, (list) => list);
const addStudyNote = createAction(ADD_STUDY_NOTE, (data) => ({ data }));

//initialState

const initialState = {
  isMeetingMaster: "",
  myMeeting: "",
  todayMeeting: "",
  recommendMeeting: "",
  newMeeting: "",
};


// const loadCrewDB = () => {
//   return function (dispatch, getState) {
//     editorApi
//       .load_none()
//       .then((res) => {
//         console.log(res.data);
//         dispatch(loadCrew(res.data));
//       })
//       .catch((err) => {
//         console.log(`모임 정보 로드에러!`);
//       });
//   };
// };

const addStudyNoteDB = (studyNoteInfo) => {
  return function (dispatch) {
    console.log(studyNoteInfo)
    
    editorApi
      .posting(studyNoteInfo)
      .then((res) => {
        console.log(res);
        // dispatch(mainActions.loadCrewDB());
        // window.location.replace("http://localhost:3000/");
      })
      .catch((error) => {
        console.log("게시글 등록 에러!");
      });
  };
};

export default handleActions(
  {
    // [LOAD_CREW]: (state, action) =>
    //   produce(state, (draft) => {
        
        
    //   }),
    [ADD_STUDY_NOTE]: (state, action) =>
      produce(state, (draft) => {
        // draft.list.unshift(action.payload.data);
      }),
  },
  initialState
);

const editorActions = {
  addStudyNoteDB,
};

export { editorActions };