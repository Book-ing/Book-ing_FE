import { instance, nonTokenInstance, requiredInstance } from "./index";

export const crewInfoApi = {
  getCrewInfo: (payload) => instance.get(`/api/meeting/${payload}`),
};
