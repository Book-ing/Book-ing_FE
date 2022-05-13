import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { studyApi } from "../../api/studyApi";

// Action

const ADD_STUDY = "study/ADD_STUDY";
const INOUT_STUDY = "INOUT_STUDY";

// ActionCreator

const addStudy = createAction(ADD_STUDY, (data) => ({ data }));
const inOutStudy = createAction(INOUT_STUDY, (payload) => ({ payload }));

// initialState

const initialState = {};

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
  },
  initialState
);

const studyActions = {
  addStudyDB,
  inOutStudyDB,
};

export { studyActions };
