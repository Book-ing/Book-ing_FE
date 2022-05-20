import { createStore, combineReducers, applyMiddleware, compose } from "redux";

// modules
import main from "./modules/main";
import user from "./modules/user";
import mypage from "./modules/mypage";
import crew from "./modules/crew";
import accordion from "./modules/accordion";
import book from "./modules/book";
import study from "./modules/study";
import search from "./modules/search";
import editor from "./modules/editor";
import studySearch from "./modules/studySearch";

// middlewares
import thunk from "redux-thunk";

// redux router
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import postcode from "./modules/postcode";
export const history = createBrowserHistory();

const rootReducer = combineReducers({
  editor: editor,
  search: search,
  study: study,
  postcode: postcode,
  book: book,
  main: main,
  user: user,
  mypage: mypage,
  crew: crew,
  accordion: accordion,
  router: connectRouter(history),
  studySearch: studySearch,
});

const env = process.env.NODE_ENV;
const middlewares = [thunk.withExtraArgument({ history: history })];

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
