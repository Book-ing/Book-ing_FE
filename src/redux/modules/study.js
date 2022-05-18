import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { studyApi } from "../../api/studyApi";

// Action
const ADD_STUDY = "study/ADD_STUDY";
const INOUT_STUDY = "INOUT_STUDY";
const EDIT_STUDY = "EDIT_STUDY";
const DELETE_STUDY = "DELETE_STUDY";

// ActionCreator
const addStudy = createAction(ADD_STUDY, (data) => ({ data }));
const inOutStudy = createAction(INOUT_STUDY, (payload) => ({ payload }));
const editStudy = createAction(EDIT_STUDY, (payload) => ({ payload }));
const deleteStudy = createAction(DELETE_STUDY, (payload) => ({ payload }));

// initialState
const initialState = {};

// thunk
const addStudyDB = (newStudyInfo) => {
  return function (dispatch) {
    console.log(newStudyInfo);

    studyApi
      .posting(newStudyInfo)
      .then((res) => {
        console.log(res);
        window.location.replace(
          `http://localhost:3000/crew/${newStudyInfo.meetingId}`
        );
      })
      .catch((err) => {
        console.log(`모임 정보 로드에러!`);
      });
  };
};

const inOutStudyDB = (crewId, studyId) => (dispatch, getState) => {
  studyApi
    .joinStudy(crewId, studyId)
    .then((res) => {
      console.log(res.data);
      dispatch(inOutStudy(res.data.isStudyJoined));
    })
    .catch((err) => {
      console.log(err);
    });
};

const editStudyDB = () => (dispatch, getState) => {
  studyApi
    .editStudy()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteStudyDB = (studyId, meetingId) => (dispatch, getState) => {
  console.log(studyId, meetingId);
  studyApi
    .deleteStudy(studyId, meetingId)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default handleActions(
  {
    [ADD_STUDY]: (state, action) =>
      produce(state, (draft) => {
        // console.log("전달 완료")
      }),
    [INOUT_STUDY]: (state, action) =>
      produce(state, (draft) => {
        draft.isStudyJoined = action.payload.payload;
      }),
  },
  initialState
);

const studyActions = {
  addStudyDB,
  inOutStudyDB,
  deleteStudyDB,
  editStudyDB,
};

export { studyActions };
