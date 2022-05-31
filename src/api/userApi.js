import { instance, loginInstance, requiredInstance } from "./index";

export const userApi = {
  loginCheck: () => requiredInstance.get("/api/auth/logincheck"),
  login: (payload) =>
    loginInstance.get(`/api/auth/kakao/callback?code=${payload}`),
};
