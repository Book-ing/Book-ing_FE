import { instance } from "./index";

export const searchApi = {

  search: (value) => instance.get(`/api/search?location=${value.loc}&keyword=${value.word}&category=${value.cate}`) 

};