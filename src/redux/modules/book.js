import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// Action

const POST_BOOK = "book/POST_BOOK";

// Action Creators

const postBook = createAction(POST_BOOK, (list) => ({ list }));

//initialState

const initialState = {
  desc: "",
  imgURL: "",
  name: "",
  publisher: "",
  writer: "",
};

export default handleActions(
  {
    [POST_BOOK]: (state, action) =>
      produce(state, (draft) => {
        // draft.list = action.payload.list;
        draft.desc = action.payload.list.desc;
        draft.imgURL = action.payload.list.imgURL;
        draft.name = action.payload.list.name;
        draft.publisher = action.payload.list.publisher;
        draft.writer = action.payload.list.writer;
      }),
  },
  initialState
);

export { postBook };
