import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { mainApi } from "../../api/mainApi";
import { searchActions } from "../modules/search";
import { useHistory } from "react-router-dom";

// Action

const LOAD_CREW = "main/LOAD_CREW";
const ADD_CREW = "main/ADD_CREW";

// ActionCreator

const loadCrew = createAction(LOAD_CREW, (list) => list);
const addCrew = createAction(ADD_CREW, (data) => ({ data }));

//initialState

const initialState = {
  isMeetingMaster: "",
  myMeeting: "",
  todayMeeting: "",
  recommendMeeting: "",
  newMeeting: "",
};

const login_loadCrewDB = (userId) => {
  return function (dispatch, getState) {
    mainApi
      .load(userId)
      .then((res) => {
        console.log(res.data);
        dispatch(loadCrew(res.data));
      })
      .catch((err) => {
        console.log(`모임 정보 로드에러!`);
      });
  };
};

const loadCrewDB = () => {
  return function (dispatch, getState) {
    mainApi
      .load_none()
      .then((res) => {
        console.log(res.data);
        dispatch(loadCrew(res.data));
      })
      .catch((err) => {
        console.log(`모임 정보 로드에러!`);
      });
  };
};

const addCrewDB = (newCrewInfo) => {
  return function (dispatch) {
    // console.log(newCrewInfo.name)
    // console.log(newCrewInfo.image)

    const formData = new FormData();

    formData.append("meetingName", newCrewInfo.title);
    formData.append("meetingCategory", newCrewInfo.category);
    formData.append("meetingIntro", newCrewInfo.intro);
    formData.append("meetingLocation", newCrewInfo.location);
    formData.append("meetingLimitCnt", newCrewInfo.headCnt);
    formData.append("meetingImage", newCrewInfo.image);

    // FormData의 key 확인
    for (let key of formData.keys()) {
      console.log(key);
    }

    // FormData의 value 확인
    for (let value of formData.values()) {
      console.log(value);
    }

    mainApi
      .posting(formData)
      .then((res) => {
        console.log(res);
        // dispatch(mainActions.loadCrewDB());
        window.location.replace("https://www.book-ing.co.kr/");
      })
      .catch((error) => {
        console.log("게시글 등록 에러!");
      });
  };
};

const getSearchCrew = (value, dispatch, history) => {
  // console.log(value)
  mainApi
    .searching(value)
    .then((res) => {
      const word = res.data.data.searchResult;
      console.log(word);
      console.log(JSON.stringify(word) === "{}");
      dispatch(searchActions.getSearch(word));
      if (JSON.stringify(word) === "{}") {
        // const values = {
        //   word: "",
        //   cate: "",
        //   loc: "",
        // }
        // dispatch(searchActions.getSearchDB(values))
        return alert(
          "원하는 모임이 검색되지 않았습니다! 검색 페이지를 이용해주세요"
        );
        // history.push("/search")
      } else {
        return history.push("/search");
      }
    })
    .catch((err) => console.error(err));
};

export default handleActions(
  {
    [LOAD_CREW]: (state, action) =>
      produce(state, (draft) => {
        // console.log(action.payload.data);
        draft.isMeetingMaster = action.payload.data.isMeetingMaster;
        draft.myMeeting = action.payload.data.response.myMeeting;
        draft.todayMeeting = action.payload.data.response.todayMeeting;
        draft.recommendMeeting = action.payload.data.response.recommendMeeting;
        draft.newMeeting = action.payload.data.response.newMeeting;
      }),
    [ADD_CREW]: (state, action) =>
      produce(state, (draft) => {
        // draft.list.unshift(action.payload.data);
      }),
  },
  initialState
);

const mainActions = {
  loadCrewDB,
  login_loadCrewDB,
  addCrewDB,
  getSearchCrew,
};

export { mainActions };
