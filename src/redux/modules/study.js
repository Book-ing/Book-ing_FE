import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { studyApi } from "../../api/studyApi";
import { history } from "../configStore";

// Action
const ADD_STUDY = "study/ADD_STUDY";
const ADD_ONLINE_STUDY = "ADD_ONLINE_STUDY";
const INOUT_STUDY = "INOUT_STUDY";
const EDIT_STUDY = "EDIT_STUDY";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3240a35 (fix(accordion): study type에 따른 조건부 렌더링 추가)
const EDIT_ONLINE_STUDY = "EDIT_ONLINE_STUDY";
const DELETE_STUDY = "DELETE_STUDY";
const GET_STUDY_USER_LIST = "GET_STUDY_USER_LIST";
const RESET_STUDY_USER_LIST = "RESET_STUDY_USER_LIST";
const KICK_STUDY_USER = "KICK_STUDY_USER";
<<<<<<< HEAD
=======
const DELETE_STUDY = "DELETE_STUDY";
>>>>>>> 5079c71 (chore(feature/crewpage): 주탁님 에디터 작업 현황 반영 커밋입니다)
=======
>>>>>>> 9b3d7ed (feature(crewpage): 모임페이지 기능 완료)

// ActionCreator
const addStudy = createAction(ADD_STUDY, (data) => ({ data }));
const addOnlineStudy = createAction(ADD_ONLINE_STUDY, (payload) => ({
  payload,
}));
const inOutStudy = createAction(INOUT_STUDY, (payload) => ({ payload }));
const editStudy = createAction(EDIT_STUDY, (payload) => ({ payload }));
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3240a35 (fix(accordion): study type에 따른 조건부 렌더링 추가)
const editOnlineStudy = createAction(EDIT_ONLINE_STUDY, (payload) => ({
  payload,
}));
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
<<<<<<< HEAD
      );
    })
    .catch((err) => {
      console.log(`모임 정보 로드에러!`);
    });
};

const addOnlineStudyDB = (payload) => (dispatch, getState) => {
  console.log(payload);
  studyApi
    .posting(payload)
    .then((res) => {
      console.log(res);
      window.location.replace(
        `https://www.book-ing.co.kr/crew/${payload.meetingId}`
      );
<<<<<<< HEAD
    })
    .catch((err) => {
      console.log(err);
      alert("온라인 스터디 생성에 실패하였습니다.");
    });
};
=======
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
<<<<<<< HEAD
const addStudyDB = (newStudyInfo) => {
  return function (dispatch) {
    console.log(newStudyInfo);
>>>>>>> 5079c71 (chore(feature/crewpage): 주탁님 에디터 작업 현황 반영 커밋입니다)
=======
const addStudyDB = (newStudyInfo) => (dispatch, getState) => {
  studyApi
    .posting(newStudyInfo)
    .then((res) => {
      window.location.replace(
        `http://localhost:3000/crew/${newStudyInfo.meetingId}`
=======
>>>>>>> ef4e324 (chore(setenv): env 파일 수정커밋입니다.)
      );
    })
    .catch((err) => {
      console.log(`모임 정보 로드에러!`);
    });
};
>>>>>>> 9b3d7ed (feature(crewpage): 모임페이지 기능 완료)

const addOnlineStudyDB = (payload) => (dispatch, getState) => {
  console.log(payload);
  studyApi
    .posting(payload)
    .then((res) => {
      console.log(res);
      // window.location.replace(
      //   `https://www.book-ing.co.kr/crew/${payload.meetingId}`
      // );
=======
>>>>>>> 3126241 (chore(modalStudy): modalStudy 온라인, 오프라인 생성테스트 완료)
    })
    .catch((err) => {
      console.log(err);
      alert("온라인 스터디 생성에 실패하였습니다.");
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
<<<<<<< HEAD
<<<<<<< HEAD
      // dispatch(inOutStudy(res.data.isStudyJoined));
    })
    .catch((err) => {
      const message = err.response.data.message;
      if (message === "종료된 스터디") {
        alert("이미 종료된 스터디입니다.");
      }
    });
};

const editStudyDB = (payload) => (dispatch, getState) => {
  studyApi
    .editStudy(payload)
    .then((res) => {
      window.location.replace(
        `https://www.book-ing.co.kr/crew/${payload.meetingId}`
      );
=======
      console.log(res.data);
=======
>>>>>>> 9b3d7ed (feature(crewpage): 모임페이지 기능 완료)
      dispatch(inOutStudy(res.data.isStudyJoined));
>>>>>>> 5079c71 (chore(feature/crewpage): 주탁님 에디터 작업 현황 반영 커밋입니다)
    })
    .catch((err) => {
      console.log(err);
    });
};

<<<<<<< HEAD
<<<<<<< HEAD
const editOnlineStudyInfoDB = (payload) => (dispatch, getState) => {
  studyApi
    .editOnlineStudyInfo(payload)
    .then((res) => {
      window.location.replace(
        `https://www.book-ing.co.kr/crew/${payload.meetingId}`
      );
=======
const editStudyDB = () => (dispatch, getState) => {
=======
const editStudyDB = (payload) => (dispatch, getState) => {
>>>>>>> 9cb1af1 (chore(feature/crewpage): 상호 작업상황 반영을 위한 커밋입니다.)
  studyApi
    .editStudy(payload)
    .then((res) => {
<<<<<<< HEAD
      console.log(res);
<<<<<<< HEAD
>>>>>>> 5079c71 (chore(feature/crewpage): 주탁님 에디터 작업 현황 반영 커밋입니다)
=======
=======
>>>>>>> 9b3d7ed (feature(crewpage): 모임페이지 기능 완료)
      window.location.replace(
        `https://www.book-ing.co.kr/crew/${payload.meetingId}`
      );
>>>>>>> 9cb1af1 (chore(feature/crewpage): 상호 작업상황 반영을 위한 커밋입니다.)
    })
    .catch((err) => {
      console.log(err);
    });
};

const editOnlineStudyInfoDB = (payload) => (dispatch, getState) => {
  studyApi
    .editOnlineStudyInfo(payload)
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
<<<<<<< HEAD
<<<<<<< HEAD
  studyApi
    .deleteStudy(studyId, meetingId)
    .then((res) => {
      window.location.replace(`https://www.book-ing.co.kr/crew/${meetingId}`);
<<<<<<< HEAD
    })
    .catch((err) => {
      console.log(err);
    });
};

const kickStudyUserDB = (studyId, targetId) => (dispatch, getState) => {
  studyApi
    .kickStudyUser(studyId, targetId)
    .then((res) => {
=======
  console.log(studyId, meetingId);
  studyApi
    .deleteStudy(studyId, meetingId)
    .then((res) => {
>>>>>>> 5079c71 (chore(feature/crewpage): 주탁님 에디터 작업 현황 반영 커밋입니다)
      console.log(res);
<<<<<<< HEAD
      dispatch(kickStudyUser(targetId));
=======
=======
  studyApi
    .deleteStudy(studyId, meetingId)
    .then((res) => {
>>>>>>> 9b3d7ed (feature(crewpage): 모임페이지 기능 완료)
      window.location.replace(`http://localhost:3000/crew/${meetingId}`);
>>>>>>> 9cb1af1 (chore(feature/crewpage): 상호 작업상황 반영을 위한 커밋입니다.)
=======
>>>>>>> ef4e324 (chore(setenv): env 파일 수정커밋입니다.)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9b3d7ed (feature(crewpage): 모임페이지 기능 완료)
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
<<<<<<< HEAD
=======
>>>>>>> 5079c71 (chore(feature/crewpage): 주탁님 에디터 작업 현황 반영 커밋입니다)
=======
>>>>>>> 9b3d7ed (feature(crewpage): 모임페이지 기능 완료)
  },
  initialState
);

const studyActions = {
  addStudyDB,
  addOnlineStudyDB,
  inOutStudyDB,
  deleteStudyDB,
  editStudyDB,
<<<<<<< HEAD
<<<<<<< HEAD
  getStudyUserListDB,
  resetStudyUserList,
  kickStudyUserDB,
  editOnlineStudyInfoDB,
=======
>>>>>>> 5079c71 (chore(feature/crewpage): 주탁님 에디터 작업 현황 반영 커밋입니다)
=======
  getStudyUserListDB,
  resetStudyUserList,
  kickStudyUserDB,
<<<<<<< HEAD
>>>>>>> 9b3d7ed (feature(crewpage): 모임페이지 기능 완료)
=======
  editOnlineStudyInfoDB,
>>>>>>> 3240a35 (fix(accordion): study type에 따른 조건부 렌더링 추가)
};

export { studyActions };
