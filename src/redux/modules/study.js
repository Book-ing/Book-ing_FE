import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { studyApi } from "../../api/studyApi";

// Action

const ADD_STUDY = "study/ADD_STUDY"

// ActionCreator

const addStudy = createAction(ADD_STUDY, (data) => ({data}));



// initialState 

const initialState = {

};

const addStudyDB = (newStudyInfo) => {
  return function(dispatch) {

  console.log(newStudyInfo)

  studyApi
  .posting(newStudyInfo)
  .then((res) => {
    console.log(res)
    // window.location.replace(`http://localhost:3000/crew/:${newStudyInfo.meetingId}`)
  })
  }};

  export default handleActions (
    {
      [ADD_STUDY]: (state, action) =>
      produce(state,(draft) => {
        console.log("전달 완료")
      })
    }
  )


const studyActions = {
  addStudyDB,
};

export {studyActions}