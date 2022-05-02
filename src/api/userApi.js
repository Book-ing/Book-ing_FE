import { instance, nonTokenInstance } from "./index";

export const userApi = {
  login: (payload) =>
    nonTokenInstance.get(`/api/auth/kakao/callback?code=${payload}`),
  // loginCheck: () => instance.get("/token"),
};
