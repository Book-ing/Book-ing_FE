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
  studyList: "",
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
        dispatch(loadCrew(res.data));
      })
      .catch((err) => {
        console.log(`모임 정보 로드에러!`);
      });
  };
};

const addCrewDB = (newCrewInfo) => {
  return function (dispatch) {
    const formData = new FormData();

    formData.append("meetingName", newCrewInfo.title);
    formData.append("meetingCategory", newCrewInfo.category);
    formData.append("meetingIntro", newCrewInfo.intro);
    formData.append("meetingLocation", newCrewInfo.location);
    formData.append("meetingLimitCnt", newCrewInfo.headCnt);
    formData.append("meetingImage", newCrewInfo.image);

    mainApi
      .posting(formData)
      .then((res) => {
        window.location.replace("https://www.book-ing.co.kr/");
      })
      .catch((error) => {
        console.log("게시글 등록 에러!");
      });
  };
};

const getSearchCrew = (value, dispatch, history) => {
  mainApi
    .searching(value)
    .then((res) => {
      const word = res.data.data.searchResult;
      dispatch(searchActions.getSearch(word));
      if (JSON.stringify(word) === "{}") {
        return alert(
          "원하는 모임이 검색되지 않았습니다! 검색 페이지를 이용해주세요"
        );
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
        draft.studyList = action.payload.data.studylist;
        draft.myMeeting = action.payload.data.response.myMeeting;
        draft.todayMeeting = action.payload.data.response.todayMeeting;
        draft.recommendMeeting = action.payload.data.response.recommendMeeting;
        draft.newMeeting = action.payload.data.response.newMeeting;
      }),
    [ADD_CREW]: (state, action) => produce(state, (draft) => {}),
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
