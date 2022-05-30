import { instance } from "./index";

export const studySearchApi = {
  searchStudy: (meetingId, payload) =>
    instance.get(`/api/study/${meetingId}/search?keyword=${payload}`),
};
