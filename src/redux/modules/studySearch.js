import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { studySearchApi } from "../../api/searchStudyApi";

// Actions
const SEARCH_STUDY = "SEARCH_STUDY";

// Action Creator
const search_study = createAction(SEARCH_STUDY, (payload) => ({ payload }));

// initialState
const initialState = {
  searchData: [],
};

// thunk
const searchStudyDB = (meetingId, payload) => (dispatch, getState) => {
  studySearchApi
    .searchStudy(meetingId, payload)
    .then((res) => {
      dispatch(search_study(res.data.studyList));
    })
    .catch((err) => {
      console.log(err);
    });
};

// reducer
export default handleActions(
  {
    [SEARCH_STUDY]: (state, action) =>
      produce(state, (draft) => {
        draft.searchData = action.payload.payload;
      }),
  },
  initialState
);

const actionCreators = { searchStudyDB };

export { actionCreators };
