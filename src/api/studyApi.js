import { requiredInstance } from "./index";

export const studyApi = {
  posting: (payload) => requiredInstance.post(`/api/study`, payload),
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
<<<<<<< HEAD
<<<<<<< HEAD
  editStudy: (payload) => requiredInstance.put("/api/study", payload),
  editOnlineStudyInfo: (payload) => requiredInstance.put("/api/study", payload),
  deleteStudy: (studyId, meetingId) =>
    requiredInstance.delete(`/api/study/${studyId}/${meetingId}`),
  getStudyUserList: (payload) =>
    requiredInstance.get(`/api/study/${payload}/user`),
  kickStudyUser: (studyId, targetId) =>
    requiredInstance.post("/api/study/kickuser", {
      studyId,
      targetId,
    }),
<<<<<<< HEAD
=======
  editStudy: (payload) => requiredInstance.put("/api/study", {}),
=======
  editStudy: (payload) => requiredInstance.put("/api/study", payload),
>>>>>>> 9cb1af1 (chore(feature/crewpage): 상호 작업상황 반영을 위한 커밋입니다.)
  deleteStudy: (studyId, meetingId) =>
    requiredInstance.delete(`/api/study/${studyId}/${meetingId}`),
>>>>>>> 5079c71 (chore(feature/crewpage): 주탁님 에디터 작업 현황 반영 커밋입니다)
=======
>>>>>>> 9b3d7ed (feature(crewpage): 모임페이지 기능 완료)
};
