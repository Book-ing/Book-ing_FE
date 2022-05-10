import { requiredInstance } from "./index";

export const studyApi = {

  posting: (newStudyInfo) => requiredInstance.post(`/api/study`, newStudyInfo),

};