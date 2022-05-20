import { requiredInstance } from "./index";

export const studyApi = {
  posting: (newStudyInfo) => requiredInstance.post(`/api/study`, newStudyInfo),
  joinStudy: (crewId, studyId) =>
    requiredInstance.post("/api/study/inout", {
      studyId: studyId,
      meetingId: crewId,
    }),
  quitStudy: (crewId, studyId) =>
    requiredInstance.post("/api/study/inout", {
      studyId: studyId,
      meetingId: crewId,
    }),
  editStudy: (payload) => requiredInstance.put("/api/study", payload),
  deleteStudy: (studyId, meetingId) =>
    requiredInstance.delete(`/api/study/${studyId}/${meetingId}`),
  getStudyUserList: (payload) =>
    requiredInstance.get(`/api/study/${payload}/user`),
  kickStudyUser: (studyId, targetId) =>
    requiredInstance.post("/api/study/kickuser", {
      studyId,
      targetId,
    }),
};
