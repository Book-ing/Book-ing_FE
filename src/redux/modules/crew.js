import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// api
import { crewInfoApi } from "../../api/crewInfoApi";
import { crewApi } from "../../api/crewApi";
import { history } from "../configStore";

// action
const GET_CREW_INFO = "GET_CREW_INFO";
const DELETE_CREW = "DELETE_CREW";
const JOIN_CREW = "JOIN_CREW";
const QUIT_CREW = "QUIT_CREW";
const GET_CREW_USERLIST = "GET_CREW_USERLIST";
const RESET_CREW_USER_LIST = "RESET_CREW_USER_LIST";
const KICK_CREW_USER = "KICK_CREW_USER";
const EDIT_CREW_INFO = "EDIT_CREW_INFO";

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

const resetCrewUserList = createAction(RESET_CREW_USER_LIST, () => ({}));

const kick_crew_user = createAction(KICK_CREW_USER, (payload) => ({ payload }));

const edit_crew_info = createAction(EDIT_CREW_INFO, (payload) => ({ payload }));

// initialState
const initialState = {
  crewData: "",
  meetingId: "",
  isJoinedCrew: "",
  profileMy: "",
  profileMaster: "",
  profileUser: [],
  newProfileUser: [],
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
      const message = err.response.data.message;
      if (message === "강퇴당한 유저는 모임 참여가 불가능합니다.") {
        alert(message);
      }
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

const kickCrewUserDB =
  (payloadUserId, payloadMeetingId) => (dispatch, getState) => {
    crewApi
      .deleteCrewUserList(payloadUserId, payloadMeetingId)
      .then((res) => {
        console.log(res.data);
        dispatch(kick_crew_user(payloadUserId));
      })
      .catch((err) => {
        console.log(err);
      });
  };

const editCrewDB =
  (meetingId, editCrewInfo, closeFunc) => (dispatch, getState) => {
    console.log(closeFunc);
    const formData = new FormData();

    formData.append("meetingCategory", editCrewInfo.category);
    formData.append("meetingIntro", editCrewInfo.intro);
    formData.append("meetingLocation", editCrewInfo.location);
    formData.append("meetingImage", editCrewInfo.image);
    formData.append("meetingId", Number(meetingId));

    // FormData의 key 확인
    for (let key of formData.keys()) {
      console.log(key);
    }

    // FormData의 value 확인
    for (let value of formData.values()) {
      console.log(value);
    }

    crewApi
      .editCrewInfo(formData)
      .then((res) => {
        console.log(res);
        const status = res.status;
        if (status === 200) {
          alert("빈 칸을 모두 입력해주세요.");
        }
        if (status === 201) {
          dispatch(edit_crew_info(res.data.data));
          closeFunc();
          crewInfoApi
            .getCrewInfo(meetingId)
            .then((res) => {
              dispatch(
                get_crew_info(
                  res.data.data,
                  meetingId,
                  res.data.data.isMeetingJoined
                )
              );
            })
            .catch((err) => {
              console.log("모임정보 받아오는 중 에러 발생", err);
            });
        }
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
    [RESET_CREW_USER_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.profileMy = "";
        draft.profileMaster = "";
        draft.profileUser = [];
      }),
    [KICK_CREW_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.newProfileUser = draft.profileUser.filter(
          (e) => e.userId === action.payload.userId
        );
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
  resetCrewUserList,
  kickCrewUserDB,
  editCrewDB,
};

export { actionCreators };
