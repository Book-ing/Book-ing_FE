import { instance, nonTokenInstance, requiredInstance } from "./index";

export const crewApi = {
  deleteCrew: (payload) => requiredInstance.delete(`/api/meeting/${payload}`),
  joinCrew: (payload) =>
    requiredInstance.post("/api/meeting/inout", { meetingId: payload }),
  quitCrew: (payload) =>
    requiredInstance.post("/api/meeting/inout", { meetingId: payload }),
  getCrewUserList: (payload) =>
    requiredInstance.get(`/api/meeting/${payload}/users`),
};
