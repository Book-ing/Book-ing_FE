import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import jwtDecode from "jwt-decode";
import { history } from "../configStore";

// shared & api
import { setCookie, getCookie, removeCookie } from "../../shared/cookie";
import { userApi } from "../../api/userApi";

// action
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const LOGIN_CHECK = "LOGIN_CHECK";

// action creator
const login = createAction(LOG_IN, (payload) => ({ payload }));
const logout = createAction(LOG_OUT, (payload) => ({ payload }));
const loginCheck = createAction(LOGIN_CHECK, (payload) => ({ payload }));

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
        sameSite: "None",
        secure: true,
      });
      setCookie("refreshToken", refreshToken, {
        path: "/",
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
  removeCookie("accessToken", {
    path: "/",
  });
  removeCookie("refreshToken", {
    path: "/",
  });
  localStorage.removeItem("userId");
  localStorage.removeItem("username");
  localStorage.removeItem("kakaoUserId");
  dispatch(logout());
};

const loginCheckDB = () => (dispatch, getState) => {
  userApi
    .loginCheck()
    .then((res) => {
      console.log(res);
      const status = res.status;
      const accessToken = res.data.data.accessToken;
      const refreshToken = res.data.data.refreshToken;
      if (status === 201) {
        setCookie("accessToken", accessToken, {
          path: "/",
          sameSite: "None",
          secure: true,
        });
        setCookie("refreshToken", refreshToken, {
          path: "/",
          sameSite: "None",
          secure: true,
        });
      }
      dispatch(loginCheck());
    })
    .catch((error) => {
      if (error?.response) {
        const status = error.response.status;
        if (status === 401) {
          const accessToken = getCookie("accessToken");
          const refreshToken = getCookie("refreshToken");
          removeCookie("accessToken", accessToken, {
            path: "/",
          });
          removeCookie("refreshToken", refreshToken, {
            path: "/",
          });
          localStorage.removeItem("userId");
          localStorage.removeItem("username");
          localStorage.removeItem("kakaoUserId");
          history.replace("/login");
        }
        alert("세션이 만료되었습니다. 다시 로그인 해주세요.");
      }
    });
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
  loginCheckDB,
};

export { actionCreators };
