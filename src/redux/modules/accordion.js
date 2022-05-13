import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// api
import { accordionApi } from "../../api/accordionApi";

// action
const GET_ACCORDION_INFO = "GET_ACCORDION_INFO";
const RESET_ACCORDION = "RESET_ACCORDION";

// action creators
const get_accordion_info = createAction(GET_ACCORDION_INFO, (payload) => ({
  payload,
}));
const reset_accordion = createAction(RESET_ACCORDION, () => ({}));

// initialState
const initialState = {
  accordionData: "",
  isLoading: true,
};

// thunk
const getAccordionDB = (payload) => (dispatch, getState) => {
  accordionApi
    .getAccordion(payload)
    .then((res) => {
      dispatch(get_accordion_info(res.data.studyList));
    })
    .catch((err) => {
      console.log("스터디 정보 받아오는 중 에러 발생", err);
    });
};

// reducer
export default handleActions(
  {
    [GET_ACCORDION_INFO]: (state, action) =>
      produce(state, (draft) => {
        draft.accordionData = action.payload.payload;
        draft.isLoading = false;
      }),
    [RESET_ACCORDION]: (state, action) =>
      produce(state, (draft) => {
        draft.accordionData = "";
        console.log(draft.accordionData);
      }),
  },
  initialState
);

const actionCreators = { getAccordionDB, reset_accordion };

export { actionCreators };
