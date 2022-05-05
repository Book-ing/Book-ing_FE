import { createStore, combineReducers, applyMiddleware, compose } from "redux";

// modules
import main from "./modules/main";
import user from "./modules/user";
import mypage from "./modules/mypage";

// middlewares
import thunk from "redux-thunk";

// redux router
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
export const history = createBrowserHistory();

const rootReducer = combineReducers({
  main: main,
  user: user,
  mypage: mypage,
  router: connectRouter(history),
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
