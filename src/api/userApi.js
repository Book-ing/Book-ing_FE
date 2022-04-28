import { instance, nonTokenInstance } from "./index";

export const userApi = {
  login: (payload) => nonTokenInstance.post("/api/auth/kakao", payload),
  // loginCheck: () => instance.get("/token"),
};
