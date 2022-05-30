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

const GET_JOINED_MYSTUDY = "GET_JOINED_MYSTUDY";
const RESET_JOINED_MYSTUDY = "RESET_JOINED_MYSTUDY";

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

const get_joined_mystudy = createAction(GET_JOINED_MYSTUDY, (payload) => ({
  payload,
}));
const reset_joined_mystudy = createAction(RESET_JOINED_MYSTUDY, () => ({}));

// initialState
const initialState = {
  myCrew: { data: { myMeeting: "" } },
  joinedMyCrew: { data: { joinedMeeting: "" } },
  myProfile: {},
  myStudy: "",
  myStudyData: "",
  myJoinedStudy: "",
  myJoinedStudyData: "",
  isLoading: true,
};

// thunk
const getMyProfileDB = (userId) => (dispatch, getState) => {
  mypageApi
    .getMyProfile(userId)
    .then((res) => {
      const data = res.data.data;
      dispatch(get_my_profile(data));
    })
    .catch((error) => {
      alert("내 정보 불러오기에 실패하였습니다.");
      history.replace("/mypage");
    });
};

const getCrewDB = (userId) => (dispatch, getState) => {
  mypageApi
    .getCrew(userId)
    .then((res) => {
      const { data } = res;
      dispatch(get_mycrew(data));
    })
    .catch((error) => {
      alert("내가 만든 모임 데이터를 불러오는데에 실패하였습니다.");
      history.replace("/mypage");
    });
};

const getJoinedCrewDB = (userId) => (dispatch, getState) => {
  mypageApi
    .getJoinedCrew(userId)
    .then((res) => {
      const { data } = res;
      dispatch(get_joined_mycrew(data));
    })
    .catch((error) => {
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
      alert("상태 메시지를 변경하는데에 실패하였습니다.");
      history.replace("/mypage");
    });
};

const getMyStudyDB = () => (dispatch, getState) => {
  mypageApi
    .getMyStudy()
    .then((res) => {
      dispatch(get_mystudy(res.data.myStudyList));
    })
    .catch((error) => {
      alert("내 스터디 목록 데이터를 불러오는데에 실패하였습니다.");
    });
};

const getJoinedStudyDB = () => (dispatch, getState) => {
  mypageApi
    .getJoinedStudy()
    .then((res) => {
      dispatch(get_joined_mystudy(res.data.myJoinedStudy));
    })
    .catch((error) => {
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
        draft.myStudyData = "";
      }),

    [GET_JOINED_MYSTUDY]: (state, action) =>
      produce(state, (draft) => {
        draft.myJoinedStudy = action.payload.payload;
        draft.isLoading = false;
      }),
    [RESET_JOINED_MYSTUDY]: (state, action) =>
      produce(state, (draft) => {
        draft.myJoinedStudyData = "";
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
  reset_joined_mystudy,
};

export { actionCreators };
