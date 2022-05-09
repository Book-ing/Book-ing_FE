import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// api
import { accordionApi } from "../../api/accordion";

// action
const GET_ACCORDION_INFO = "GET_ACCORDION_INFO";

// action creators
const get_accordion_info = createAction(GET_ACCORDION_INFO, (payload) => ({
  payload,
}));

// initialState
const initialState = {
  accordionData: "",
};

// thunk
const getAccordionDB = (payload) => (dispatch, getState) => {
  accordionApi
    .getAccordion(payload)
    .then((res) => {
      console.log(res.data.studyList);
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
      }),
  },
  initialState
);

const actionCreators = { getAccordionDB };

export { actionCreators };
