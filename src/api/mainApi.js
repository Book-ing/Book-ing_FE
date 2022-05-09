import { instance, loginInstance } from "./index";

export const mainApi = {
  load: () => loginInstance.get(`/api/main`),

  posting: (formData) => instance.post(`/api/meeting`, formData),
};
