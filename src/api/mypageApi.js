import { requiredInstance } from "./index";

export const mypageApi = {
  getMyProfile: (userId) => requiredInstance.get(`/api/mypage/${userId}/profile`),
  
  putStatusMsg: (userInfo) => 
    requiredInstance.put("/api/mypage", userInfo),

  getCrew: (userId) => requiredInstance.get(`/api/mypage/${userId}/mymeeting`),
 
  getJoinedCrew: (userId) => requiredInstance.get(`/api/mypage/${userId}/joinedmeeting`),

  getMyStudy: () => requiredInstance.get(`/api/mypage/mystudy`),
  
  getJoinedStudy: () => requiredInstance.get(`/api/mypage/joinedstudy`),
};
