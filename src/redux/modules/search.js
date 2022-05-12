import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { searchApi } from "../../api/searchApi";


// Action

const GET_SEARCH = "search/GET_SEARCH"

// Action Creators

const getSearch = createAction(GET_SEARCH, (list)=>(list));

//initialState

const initialState = {
  result:""
};

const getSearchDB = (value) => {
  return function (dispatch) {
    console.log(value);

  searchApi
    .search(value)
    .then((res) => {
      console.log(res);
      dispatch(searchActions.getSearch(res.data.data.searchResult))
    })
  }
}


export default handleActions (
  {
    [GET_SEARCH]: (state=initialState, action) =>
    produce (state, (draft) => {
     console.log(action);
    draft.result=action.payload;
    }),
  },
  initialState
);

const searchActions  = {
  getSearch,
  getSearchDB,
};

export { searchActions }