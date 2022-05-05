import { instance, nonTokenInstance, requiredInstance } from "./index";

export const userApi = {
  loginCheck: () => requiredInstance.get("/api/auth/logincheck"),
  login: (payload) =>
    nonTokenInstance.get(`/api/auth/kakao/callback?code=${payload}`),
  // loginCheck: () => instance.get("/token"),
};
