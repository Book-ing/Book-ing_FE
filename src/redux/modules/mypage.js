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

// initialState
const initialState = {
  myCrew: "",
  joinedMyCrew: "",
  myProfile: {},
  myStudy: "",
};

// thunk
const getMyProfileDB = (payload) => (dispatch, getState) => {
  mypageApi
    .getMyProfile()
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

const getCrewDB = (payload) => (dispatch, getState) => {
  mypageApi
    .getCrew()
    .then((res) => {
      const { data } = res;
      dispatch(get_mycrew(data));
    })
    .catch((error) => {
      console.log("내가 만든 모임 GET 요청중 에러 발생", error);
      alert("내가 만든 모임 데이터를 불러오는데에 실패하였습니다.");
      history.replace("/mypage");
    });
};

const getJoinedCrewDB = (payload) => (dispatch, getState) => {
  mypageApi
    .getJoinedCrew()
    .then((res) => {
      const { data } = res;
      dispatch(get_joined_mycrew(data));
    })
    .catch((error) => {
      console.log("내가 가입한 모임 GET 요청중 에러 발생", error);
      alert("가입한 모임 목록 데이터를 불러오는데에 실패하였습니다.");
      history.replace("/mypage");
    });
};

const changeStatusMsgDB = (userId, statusMessage) => (dispatch, getState) => {
  mypageApi
    .putStatusMsg(userId, statusMessage)
    .then((res) => {
      console.log(res);
      dispatch(put_status_message());
    })
    .catch((error) => {
      console.log("상태메시지 변경 PUT 요청중 에러 발생", error);
      alert("상태 메시지를 변경하는데에 실패하였습니다.");
      history.replace("/mypage");
    });
};

const getMyStudyDB = (payload) => (dispatch, getState) => {
  mypageApi
    .getMyStudy()
    .then((res) => {
      console.log(res.data);
      const data = res.data;
      dispatch(get_mystudy(data));
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
};

export { actionCreators };
