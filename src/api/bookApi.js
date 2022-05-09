import axios from "axios";

const bookApi = axios.create ({
  baseURL: 'https://dapi.kakao.com',
  headers: {
    Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_SEARCH_RESTAPI_KEY}`,
  },
});

export const bookSearch = (params) => {
  return bookApi.get('/v3/search/book', { params });
};