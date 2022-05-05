import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { mainApi } from "../../api/mainApi";

// Action

const LOAD_CREW = "main/LOAD_CREW"
const ADD_CREW = "main/ADD_CREW"

// ActionCreator

const loadCrew = createAction(LOAD_CREW, (list)=>(list));
const addCrew = createAction(ADD_CREW, (data) => ({data}));


//initialState

const initialState = {
  isMeetingMaster:"",
  myMeeting:"",
  todayMeeting:"",
  recommendMeeting:"",
  newMeeting:""
};

const loadCrewDB = () => {
  return function (dispatch, getState){
  mainApi
    .load()
    .then((res) => {
      console.log(res.data);
      dispatch(loadCrew(res.data));
    })
    .catch((err) => {
      console.log(`모임 정보 로드에러!`)
    });
  };
};

const addCrewDB = ({modalCrewInfo, file}) => {

  return function(dispatch, {history}) {
    console.log(modalCrewInfo)
    console.log(modalCrewInfo.region)
    console.log(file)
    const formData = new FormData();

    formData.append (

      "meetingInfo", new Blob(
        {
          meetingName: modalCrewInfo.title,
          meetingCategory : modalCrewInfo.category,
          meetingIntro : modalCrewInfo.intro,
          meetingLocation : modalCrewInfo.region,
          meetingLimitCtn : Number(modalCrewInfo.headCount),
          // meetingImage: file
        },
        {type: "application/json"})

      );
          console.log(formData);
    // formData.append("meetingImage", file, `${file.name}`);
  

    mainApi
    .posting(formData)
    .then((res) => {
      console.log(res)
      dispatch(mainActions.loadCrewDB());
      history.push("/main");
    })
    .catch((error) => {
      console.log("게시글 등록 에러!")
    });
}};

export default handleActions (
  {
    [LOAD_CREW]:(state, action) =>
    produce (state, (draft) => {
      // console.log(action.payload.data);
      draft.isMeetingMaster = action.payload.data.isMeetingMaster;
      draft.myMetting = action.payload.data.response.myMetting;
      draft.todayMeeting = action.payload.data.response.todayMeeting;
      draft.recommendMeeting = action.payload.data.response.recommendMeeting;
      draft.newMeeting = action.payload.data.response.newMeeting;
    }),
    [ADD_CREW]: (state, action) =>
    produce(state,(draft) => {
            // draft.list.unshift(action.payload.data);
    }),
  }, 
  initialState
);

const mainActions = {
  loadCrewDB,
  addCrewDB,
};

export {mainActions}
