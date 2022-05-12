import { instance, requiredInstance, formDataInstance } from "./index";

export const mainApi = {
  load: (userId) => requiredInstance.get(`/api/main?userId=${userId}`),

  load_none: () => instance.get(`/api/main`),

  // posting: (formData) => instance.post(`/api/meeting`, formData),
  posting: (formData) => formDataInstance.post(`/api/meeting`, formData),

  searching: (value) => instance.get(`/api/search?location=&keyword=${value}&category=`), 

};
