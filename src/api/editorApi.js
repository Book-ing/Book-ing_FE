import { requiredInstance } from "./index";

export const editorApi = {
 
  posting: (editorInfo) => requiredInstance.post(`/api/study/note`, editorInfo),

  modifying: (editorInfo) => requiredInstance.put(`/api/study/note`, editorInfo)

};