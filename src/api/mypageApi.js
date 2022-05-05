import axios from "axios";
import { instance, nonTokenInstance } from "./index";

export const mypageApi = {
  getCrew: () => axios.get("http://localhost:3001/myMeeting"),
  // getCrew: () => {
  //   instance.get("/");
  // }
  getJoinedCrew: () => axios.get("http://localhost:3001/joinedMeeting"),
  // getJoinedCrew: () => {
  //   instance.get("/");
  // }
  getMyProfile: () => axios.get("http://localhost:3001/profile"),
  // getMyProfile: (payload) => {
  //   instance.get(`/api/mypage/${payload}/profile`);
  // }
  putStatusMsg: (userId, statusMessage) => {
    instance.put("/api/mypage", { data: { userId, statusMessage } });
  },
  getMyStudy: () => axios.get("http://localhost:3001/myStudy"),
  // getMyStudy: (payload) => {
  //   instance.get(`/api/mypage/${payload}/mystudy`);
  // }
};
