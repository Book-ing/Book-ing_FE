import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// api
import { crewInfoApi } from "../../api/crewInfoApi";

// action
const GET_CREW_INFO = "GET_CREW_INFO";

// action creators
const get_crew_info = createAction(GET_CREW_INFO, (payload, meetingId) => ({
  payload,
  meetingId,
}));

// initialState
const initialState = {
  crewData: "",
  meetingId: "",
};

// thunk
const getCrewInfoDB = (payload) => (dispatch, getState) => {
  crewInfoApi
    .getCrewInfo(payload)
    .then((res) => {
      dispatch(get_crew_info(res.data.data, payload));
    })
    .catch((err) => {
      console.log("모임정보 받아오는 중 에러 발생", err);
    });
};

// reducer
export default handleActions(
  {
    [GET_CREW_INFO]: (state, action) =>
      produce(state, (draft) => {
        draft.crewData = action.payload.payload;
        draft.meetingId = action.payload.meetingId;
      }),
  },
  initialState
);

const actionCreators = { getCrewInfoDB };

export { actionCreators };
