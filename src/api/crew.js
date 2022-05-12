import {
  instance,
  nonTokenInstance,
  requiredInstance,
  formDataInstance,
} from "./index";

export const crewApi = {
  deleteCrew: (payload) => requiredInstance.delete(`/api/meeting/${payload}`),
  joinCrew: (payload) =>
    requiredInstance.post("/api/meeting/inout", { meetingId: payload }),
  quitCrew: (payload) =>
    requiredInstance.post("/api/meeting/inout", { meetingId: payload }),
  getCrewUserList: (payload) =>
    requiredInstance.get(`/api/meeting/${payload}/users`),
  deleteCrewUserList: (payloadUserId, payloadMeetingId) =>
    requiredInstance.post("/api/meeting/kickuser", {
      targetId: payloadUserId,
      meetingId: payloadMeetingId,
    }),
  editCrewInfo: (meetingId, formData) =>
    requiredInstance.put("/api/meeting", {
      meetingId,
      formData,
    }),
};
