import { instance, requiredInstance } from "./index";

export const mainApi = {
  load: (userId) => requiredInstance.get(`/api/main?userId=${userId}`),

  load_none: () => instance.get(`/api/main`),

  posting: (formData) => instance.post(`/api/meeting`, formData),
};
