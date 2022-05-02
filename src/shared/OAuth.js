const CLIENT_ID = process.env.REACT_APP_KAKAO_RESTAPI_KEY;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
const LOGOUT_REDIRECT_URI = process.env.REACT_APP_LOGOUT_REDIRECT_URI;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export const LOGOUT_KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/logout?client_id=${CLIENT_ID}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;
