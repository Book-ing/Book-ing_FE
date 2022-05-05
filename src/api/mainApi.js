import { instance, nonTokenInstance } from "./index";

export const mainApi = {
  load: () =>
    nonTokenInstance.get(`/api/main`),

  posting: (formData) =>
    instance.post(`/api/meeting`, formData),
    
  };
