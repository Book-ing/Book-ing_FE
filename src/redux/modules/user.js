import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import jwtDecode from "jwt-decode";
import { history } from "../configStore";

// shared & api
import { setCookie, getCookie } from "../../shared/cookie";
import { userApi } from "../../api/userApi";

// action
const LOG_IN = "LOG_IN";

// action creator
const login = createAction(LOG_IN, (payload) => ({ payload }));

// initialState
const initialstate = {
  is_login: false,
};

// thunk
// export const kakaoLogin = (payload) => async (dispatch, getState) => {
//   console.log(payload);
//   try {
//     const {
//       data: { accessToken, refreshToken },
//     } = await userApi.login(payload);
//     // console.log(jwtDecode(accessToken));
//     console.log(getCookie("accessToken", accessToken));
//     // const { id, avatar, color } = jwtDecode(accessToken);
//     setCookie("accessToken", accessToken, {
//       path: "/",
//       maxAge: 1800, // 30분
//     });
//     setCookie("refreshToken", refreshToken, {
//       path: "/",
//       maxAge: 604800, // 7일
//     });
//     // localStorage.setItem("userId", id);
//     dispatch(login());
//     history.replace("/");
//   } catch (error) {
//     console.log("소셜로그인 에러", error);
//     window.alert("로그인에 실패하였습니다.");
//     history.replace("/login");
//   }
// };
export const kakaoLogin = (payload) => (dispatch, getState) => {
  console.log(payload);
  userApi
    .login(payload)
    .then((res) => {
      console.log(res);
      // console.log(jwtDecode(accessToken));
      // console.log(getCookie("accessToken", accessToken));
      // // const { id, avatar, color } = jwtDecode(accessToken);
      // setCookie("accessToken", accessToken, {
      //   path: "/",
      //   maxAge: 1800, // 30분
      // });
      // setCookie("refreshToken", refreshToken, {
      //   path: "/",
      //   maxAge: 604800, // 7일
      // });
      // // localStorage.setItem("userId", id);
      // dispatch(login());
      // history.replace("/");
    })
    .catch((error) => {
      console.log("소셜로그인 에러", error);
      window.alert("로그인에 실패하였습니다.");
      history.replace("/login");
    });
};

// reducer
const user = handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        draft.is_login = true;
      }),
  },
  initialstate
);

export default user;
