import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import jwtDecode from "jwt-decode";
import { history } from "../configStore";

// shared & api
import { setCookie, getCookie } from "../../shared/cookie";
import { userApi } from "../../api/userApi";

// action
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

// action creator
const login = createAction(LOG_IN, (payload) => ({ payload }));
const logout = createAction(LOG_OUT, (payload) => ({ payload }));

// initialState
const initialstate = {
  is_login: false,
};

// thunk
const kakaoLogin = (payload) => (dispatch, getState) => {
  
  userApi
    .login(payload)
    .then((res) => {
      console.log(res);
      const accessToken = res.data.data.accessToken;
      const refreshToken = res.data.data.refreshToken;
      const { userId, username, kakaoUserId } = jwtDecode(accessToken);
      setCookie("accessToken", accessToken, {
        path: "/",
        maxAge: 3600, // 1시간
        sameSite: "None",
        secure: true,
      });
      setCookie("refreshToken", refreshToken, {
        path: "/",
        maxAge: 432000, // 5일
        sameSite: "None",
        secure: true,
      });
      localStorage.setItem("userId", userId);
      localStorage.setItem("username", username);
      localStorage.setItem("kakaoUserId", kakaoUserId);
      dispatch(login());
      history.replace("/");
    })
    .catch((error) => {
      console.log("소셜로그인 에러", error);
      window.alert("로그인에 실패하였습니다.");
      history.replace("/login");
    });
};

const kakaoLogout = (payload) => (dispatch, getState) => {
  const accessToken = getCookie("accessToken");
  const refreshToken = getCookie("refreshToken");
  setCookie("accessToken", accessToken, {
    path: "/",
    maxAge: 0, // 로그아웃 실행시 토큰 만료
  });
  setCookie("refreshToken", refreshToken, {
    path: "/",
    maxAge: 0, // 로그아웃 실행시 토큰 만료
  });
  localStorage.removeItem("userId");
  localStorage.removeItem("username");
  localStorage.removeItem("kakaoUserId");
  dispatch(logout());
};

// reducer
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.is_login = false;
      }),
  },
  initialstate
);

const actionCreators = {
  kakaoLogin,
  kakaoLogout,
};

export { actionCreators };
