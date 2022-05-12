import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// api
import { crewInfoApi } from "../../api/crewInfoApi";
import { crewApi } from "../../api/crew";
import { history } from "../configStore";

// action
const GET_CREW_INFO = "GET_CREW_INFO";
const DELETE_CREW = "DELETE_CREW";
const JOIN_CREW = "JOIN_CREW";
const QUIT_CREW = "QUIT_CREW";
const GET_CREW_USERLIST = "GET_CREW_USERLIST";
const DELETE_CREW_USER_LIST = "DELETE_CREW_USER_LIST";

// action creators
const get_crew_info = createAction(
  GET_CREW_INFO,
  (payload, meetingId, isCrewJoined) => ({
    payload,
    meetingId,
    isCrewJoined,
  })
);

const join_crew = createAction(JOIN_CREW, (payload) => ({ payload }));
const quit_crew = createAction(QUIT_CREW, (payload) => ({ payload }));
const get_crew_user_list = createAction(
  GET_CREW_USERLIST,
  (profileMy, profileMaster, profileUser) => ({
    profileMy,
    profileMaster,
    profileUser,
  })
);
const delete_crew_user_list = createAction(
  DELETE_CREW_USER_LIST,
  (payload) => ({ payload })
);

// initialState
const initialState = {
  crewData: "",
  meetingId: "",
  isJoinedCrew: "",
  profileMy: "",
  profileMaster: "",
  profileUser: [],
};

// thunk
const getCrewInfoDB = (payload) => (dispatch, getState) => {
  crewInfoApi
    .getCrewInfo(payload)
    .then((res) => {
      dispatch(
        get_crew_info(res.data.data, payload, res.data.data.isMeetingJoined)
      );
    })
    .catch((err) => {
      console.log("모임정보 받아오는 중 에러 발생", err);
    });
};

const deleteCrewDB = (payload) => (dispatch, getState) => {
  crewApi
    .deleteCrew(payload)
    .then((res) => {
      console.log(res);
      history.replace("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

const joinCrewDB = (payload) => (dispatch, getState) => {
  crewApi
    .joinCrew(payload)
    .then((res) => {
      console.log(res);
      dispatch(join_crew(payload));
    })
    .catch((err) => {
      console.log(err);
    });
};

const quitCrewDB = (payload) => (dispatch, getState) => {
  crewApi
    .quitCrew(payload)
    .then((res) => {
      console.log(res);
      dispatch(quit_crew(payload));
    })
    .catch((err) => {
      console.log(err);
    });
};

const getCrewUserListDB = (payload) => (dispatch, getState) => {
  crewApi
    .getCrewUserList(payload)
    .then((res) => {
      console.log(res.data);
      const { myProfile, meetingMasterProfile, meetingUsers } = res.data.data;
      dispatch(
        get_crew_user_list(myProfile, meetingMasterProfile, meetingUsers)
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteCrewUserListDB = (payload) => (dispatch, getState) => {
  crewApi
    .deleteCrewUserList()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

// reducer
export default handleActions(
  {
    [GET_CREW_INFO]: (state, action) =>
      produce(state, (draft) => {
        draft.crewData = action.payload.payload;
        draft.meetingId = action.payload.meetingId;
        draft.isJoinedCrew = action.payload.isCrewJoined;
      }),
    [JOIN_CREW]: (state, action) =>
      produce(state, (draft) => {
        draft.isJoinedCrew = true;
      }),
    [QUIT_CREW]: (state, action) =>
      produce(state, (draft) => {
        draft.isJoinedCrew = false;
      }),
    [DELETE_CREW]: (state, action) => produce(state, (draft) => {}),
    [GET_CREW_USERLIST]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        draft.profileMy = action.payload.profileMy;
        draft.profileMaster = action.payload.profileMaster;
        draft.profileUser = action.payload.profileUser;
      }),
  },
  initialState
);

const actionCreators = {
  getCrewInfoDB,
  joinCrewDB,
  quitCrewDB,
  deleteCrewDB,
  getCrewUserListDB,
  deleteCrewUserListDB,
};

export { actionCreators };
