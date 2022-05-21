import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { studyApi } from "../../api/studyApi";
import { history } from "../configStore";

// Action
const ADD_STUDY = "study/ADD_STUDY";
const INOUT_STUDY = "INOUT_STUDY";
const EDIT_STUDY = "EDIT_STUDY";
const DELETE_STUDY = "DELETE_STUDY";
const GET_STUDY_USER_LIST = "GET_STUDY_USER_LIST";
const RESET_STUDY_USER_LIST = "RESET_STUDY_USER_LIST";
const KICK_STUDY_USER = "KICK_STUDY_USER";

// ActionCreator
const addStudy = createAction(ADD_STUDY, (data) => ({ data }));
const inOutStudy = createAction(INOUT_STUDY, (payload) => ({ payload }));
const editStudy = createAction(EDIT_STUDY, (payload) => ({ payload }));
const deleteStudy = createAction(DELETE_STUDY, (payload) => ({ payload }));
const getStudyUserList = createAction(
  GET_STUDY_USER_LIST,
  (myProfile, studyMasterProfile, studyUsers) => ({
    myProfile,
    studyMasterProfile,
    studyUsers,
  })
);
const resetStudyUserList = createAction(RESET_STUDY_USER_LIST, () => ({}));
const kickStudyUser = createAction(KICK_STUDY_USER, (payload) => ({ payload }));

// initialState
const initialState = {
  studyProfileMy: "",
  studyProfileMaster: "",
  studyProfileUser: [],
  newStudyProfileUser: [],
  isStudyJoined: "",
};

// thunk
const addStudyDB = (newStudyInfo) => (dispatch, getState) => {
  studyApi
    .posting(newStudyInfo)
    .then((res) => {
      window.location.replace(
        `https://www.book-ing.co.kr/crew/${newStudyInfo.meetingId}`
      );
    })
    .catch((err) => {
      console.log(`모임 정보 로드에러!`);
    });
};

const getStudyUserListDB = (payload) => (dispatch, getState) => {
  console.log(payload);
  studyApi
    .getStudyUserList(payload)
    .then((res) => {
      const { myProfile, studyMasterProfile, studyUsers } = res.data;
      dispatch(getStudyUserList(myProfile, studyMasterProfile, studyUsers));
    })
    .catch((err) => {
      console.log(err);
    });
};

const inOutStudyDB = (crewId, studyId) => (dispatch, getState) => {
  studyApi
    .joinStudy(crewId, studyId)
    .then((res) => {
      dispatch(inOutStudy(res.data.isStudyJoined));
    })
    .catch((err) => {
      console.log(err);
    });
};

const editStudyDB = (payload) => (dispatch, getState) => {
  studyApi
    .editStudy(payload)
    .then((res) => {
      window.location.replace(
        `https://www.book-ing.co.kr/crew/${payload.meetingId}`
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteStudyDB = (studyId, meetingId) => (dispatch, getState) => {
  studyApi
    .deleteStudy(studyId, meetingId)
    .then((res) => {
      window.location.replace(`https://www.book-ing.co.kr/crew/${meetingId}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

const kickStudyUserDB = (studyId, targetId) => (dispatch, getState) => {
  studyApi
    .kickStudyUser(studyId, targetId)
    .then((res) => {
      console.log(res);
      dispatch(kickStudyUser(targetId));
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
    [GET_STUDY_USER_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.studyProfileMy = action.payload.myProfile;
        draft.studyProfileMaster = action.payload.studyMasterProfile;
        draft.studyProfileUser = action.payload.studyUsers;
      }),
    [RESET_STUDY_USER_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.studyProfileMy = "";
        draft.studyProfileMaster = "";
        draft.studyProfileUser = [];
      }),
    [KICK_STUDY_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.newStudyProfileUser = draft.studyProfileUser.filter(
          (e) => e.userId === action.payload.userId
        );
      }),
  },
  initialState
);

const studyActions = {
  addStudyDB,
  inOutStudyDB,
  deleteStudyDB,
  editStudyDB,
  getStudyUserListDB,
  resetStudyUserList,
  kickStudyUserDB,
};

export { studyActions };
