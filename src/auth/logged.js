import { cookies } from "../shared/cookie";

const logged = () => !!cookies.get("refreshToken");
export default logged;
