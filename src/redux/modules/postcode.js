import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";


// Action

const POST_CODE = "postcode/POST_CODE"

// Action Creators

const postCode = createAction(POST_CODE, (list)=>({list}));

//initialState

const initialState = {
  jibunAdd:"지번 주소",
  roadAdd:"도로명 주소",
  zoneCode:"우편번호",
};


export default handleActions (
  {
    [POST_CODE]: (state, action) =>
    produce (state, (draft) => {
      console.log(action)
      // console.log(action.payload.list.roadAddress)
      draft.jibunAdd = action.payload.list.jibunAdd;
      draft.roadAdd = action.payload.list.roadAdd;
      draft.zoneCode = action.payload.list.zoneCode;
      // console.log(action.payload.list.roadAdress)

    }),
  },
  initialState
);

export {postCode}