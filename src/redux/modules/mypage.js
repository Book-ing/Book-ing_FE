import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { history } from "../configStore";

// api
import { mypageApi } from "../../api/mypageApi";
import axios from "axios";

// action
const GET_MY_PROFILE = "GET_MY_PROFILE";
const GET_MYCREW = "GET_MYCREW";
const GET_JOINED_MYCREW = "GET_JOINED_MYCREW";
const PUT_STATUS_MESSAGE = "PUT_STATUS_MESSAGE";

const GET_MYSTUDY = "GET_MYSTUDY";
const RESET_MYSTUDY = "RESET_MYSTUDY";
<<<<<<< HEAD

const GET_JOINED_MYSTUDY = "GET_JOINED_MYSTUDY";
const RESET_JOINED_MYSTUDY = "RESET_JOINED_MYSTUDY";
=======
>>>>>>> 4017e03 (page(Mypage): 내가 참여한 스터디 불러오는 기능 전까지 구현)

// action creators
const get_my_profile = createAction(GET_MY_PROFILE, (payload) => ({ payload }));
const get_mycrew = createAction(GET_MYCREW, (payload) => ({ payload }));
const get_joined_mycrew = createAction(GET_JOINED_MYCREW, (payload) => ({
  payload,
}));
const put_status_message = createAction(PUT_STATUS_MESSAGE, (payload) => ({
  payload,
}));

const get_mystudy = createAction(GET_MYSTUDY, (payload) => ({ payload }));
const reset_mystudy = createAction(RESET_MYSTUDY, () => ({}));
<<<<<<< HEAD

const get_joined_mystudy = createAction(GET_JOINED_MYSTUDY, (payload) => ({ payload }));
const reset_joined_mystudy = createAction(RESET_JOINED_MYSTUDY, () => ({}));
=======
>>>>>>> 4017e03 (page(Mypage): 내가 참여한 스터디 불러오는 기능 전까지 구현)

// initialState
const initialState = {
  myCrew: {data: {myMeeting: ""}},
  joinedMyCrew: {data: {joinedMeeting:""}},
  myProfile: {},
  myStudy: "",
<<<<<<< HEAD
  myStudyData:"",
  myJoinedStudy:"",
  myJoinedStudyData:"",
=======
  accordionData:"",
>>>>>>> 4017e03 (page(Mypage): 내가 참여한 스터디 불러오는 기능 전까지 구현)
  isLoading: true
};

// thunk
const getMyProfileDB = (userId) => (dispatch, getState) => {
  mypageApi
    .getMyProfile(userId)
    .then((res) => {
      const data = res.data.data;
      console.log(data);
      dispatch(get_my_profile(data));
    })
    .catch((error) => {
      console.log("프로필 정보 GET 요청중 에러", error);
      alert("내 정보 불러오기에 실패하였습니다.");
      history.replace("/mypage");
    });
};

const getCrewDB = (userId) => (dispatch, getState) => {
  mypageApi
    .getCrew(userId)
    .then((res) => {
      const { data } = res;
      console.log(data);
      dispatch(get_mycrew(data));
    })
    .catch((error) => {
      console.log("내가 만든 모임 GET 요청중 에러 발생", error);
      alert("내가 만든 모임 데이터를 불러오는데에 실패하였습니다.");
      history.replace("/mypage");
    });
};

const getJoinedCrewDB = (userId) => (dispatch, getState) => {
  mypageApi
    .getJoinedCrew(userId)
    .then((res) => {
      console.log(res)
      const { data } = res;
      console.log(data)
      dispatch(get_joined_mycrew(data));
    })
    .catch((error) => {
      console.log("내가 가입한 모임 GET 요청중 에러 발생", error);
      alert("가입한 모임 목록 데이터를 불러오는데에 실패하였습니다.");
      history.replace("/mypage");
    });
};

const changeStatusMsgDB = (userInfo) => (dispatch, getState) => {
  mypageApi
    .putStatusMsg(userInfo)
    .then((res) => {
      dispatch(put_status_message(userInfo.statusMessage));
    })
    .catch((error) => {
      console.log("상태메시지 변경 PUT 요청중 에러 발생", error);
      alert("상태 메시지를 변경하는데에 실패하였습니다.");
      history.replace("/mypage");
    });
};

const getMyStudyDB = () => (dispatch, getState) => {
  mypageApi
    .getMyStudy()
    .then((res) => {
      console.log(res.data.myStudyList);
      dispatch(get_mystudy(res.data.myStudyList));
    })
    .catch((error) => {
      console.log("내가만든 스터디 GET 요청중 에러 발생", error);
      alert("내 스터디 목록 데이터를 불러오는데에 실패하였습니다.");
    });
};

const getJoinedStudyDB = () => (dispatch, getState) => {
  mypageApi
    .getJoinedStudy()
    .then((res) => {
<<<<<<< HEAD
      console.log(res.data.myJoinedStudy);
      dispatch(get_joined_mystudy(res.data.myJoinedStudy));
=======
      console.log(res.data);
      const data = res.data;
      dispatch(get_mystudy(data));
>>>>>>> 4017e03 (page(Mypage): 내가 참여한 스터디 불러오는 기능 전까지 구현)
    })
    .catch((error) => {
      console.log("내가만든 스터디 GET 요청중 에러 발생", error);
      alert("내 스터디 목록 데이터를 불러오는데에 실패하였습니다.");
    });
};


// reducer
export default handleActions(
  {
    [GET_MYCREW]: (state, action) =>
      produce(state, (draft) => {
        draft.myCrew = action.payload.payload;
      }),
    [GET_JOINED_MYCREW]: (state, action) =>
      produce(state, (draft) => {
        draft.joinedMyCrew = action.payload.payload;
      }),
    [GET_MY_PROFILE]: (state, action) =>
      produce(state, (draft) => {
        draft.myProfile = action.payload.payload;
      }),
    [GET_MYSTUDY]: (state, action) =>
      produce(state, (draft) => {
        draft.myStudy = action.payload.payload;
        draft.isLoading = false;
      }),
    [RESET_MYSTUDY]: (state, action) =>
      produce(state, (draft) => {
<<<<<<< HEAD
        draft.myStudyData = "";
        console.log(draft.myStudyData);
      }),

    [GET_JOINED_MYSTUDY]: (state, action) =>
      produce(state, (draft) => {
        draft.myJoinedStudy = action.payload.payload;
        draft.isLoading = false;
      }),
    [RESET_JOINED_MYSTUDY]: (state, action) =>
      produce(state, (draft) => {
        draft.myJoinedStudyData = "";
        console.log(draft.myJoinedStudyData);
=======
        draft.accordionData = "";
        console.log(draft.accordionData);
>>>>>>> 4017e03 (page(Mypage): 내가 참여한 스터디 불러오는 기능 전까지 구현)
      }),
  },
  initialState
);

const actionCreators = {
  getCrewDB,
  getJoinedCrewDB,
  getMyProfileDB,
  changeStatusMsgDB,
  getMyStudyDB,
  getJoinedStudyDB,
  reset_mystudy,
<<<<<<< HEAD
  reset_joined_mystudy,
=======
>>>>>>> 4017e03 (page(Mypage): 내가 참여한 스터디 불러오는 기능 전까지 구현)
};

export { actionCreators };
