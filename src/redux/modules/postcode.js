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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
      console.log(action)
      // console.log(action.payload.list.roadAddress)
      draft.jibunAdd = action.payload.list.jibunAdd;
      draft.roadAdd = action.payload.list.roadAdd;
      draft.zoneCode = action.payload.list.zoneCode;
<<<<<<< HEAD
=======
      console.log(action.payload.list.jibunAddress)
      console.log(action.payload.list.roadAddress)
      draft.jibunAdd = action.payload.list.jibunAddress;
      draft.roadAdd = action.payload.list.roadAddress;
      draft.zonecode = action.payload.list.zonecode;
>>>>>>> 7b21e18 (develop_online: WebRTC 버전관리 따로위한 브랜치 생성 커밋)
=======
>>>>>>> 151e069 (page(Mypage): Main,Mypage,MyCrew,MyStudy 수정 후 커밋)
      // console.log(action.payload.list.roadAdress)

    }),
  },
  initialState
);

export {postCode}