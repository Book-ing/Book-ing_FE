import { instance, nonTokenInstance, requiredInstance } from "./index";

export const accordionApi = {
  getAccordion: (payload) => instance.get(`/api/meeting/${payload}/study`),
};
