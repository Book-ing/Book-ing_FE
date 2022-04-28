import React from "react";

import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";

import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

import GlobalStyle from "./GlobalStyles";

// import pages
import {
  Login,
  Crew,
  Main,
  MyCrew,
  MyPage,
  MyStudy,
  NoteWrite,
  Search,
} from "../pages/index";
import Test from "../pages/Test";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={Test} />
          {/* <Route path="/" exact component={Main} /> */}
          <Route path="/login" exact component={Login} />
          <Route path="/crew" exact component={Crew} />
          <Route path="/mypage" exact component={MyPage} />
          <Route path="/mycrew" exact component={MyCrew} />
          <Route path="/mystudy" exact component={MyStudy} />
          <Route path="/notewrite" exact component={NoteWrite} />
          <Route path="/search" exact component={Search} />
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
