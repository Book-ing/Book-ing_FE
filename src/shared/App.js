import React from "react";

import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";

import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

import GlobalStyle from "./GlobalStyles";

// styled comopnents
import styled from "styled-components";

// import pages
import {
  Login,
  Crew,
  Main,
  MyPage,
  Search,
  NoteWrite,
  NoteWrites,
} from "../pages/index";
import OAuth2RedirectHandler from "../pages/OAuth2RedirectHandler";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Room from "../pages/Room";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route
            path="/api/auth/kakao/callback"
            component={OAuth2RedirectHandler}
          />
          <Route path="/room/:studyId" exact component={Room} />
          <Wraper>
            <Header />
            <Route path="/" exact component={Main} />
            <Route path="/crew/:meetingId" exact component={Crew} />
            <Route path="/mypage" exact component={MyPage} />
            <Route path="/notewrites" exact component={NoteWrites} />
            <Route path="/notewrite" exact component={NoteWrite} />
            <Route path="/search" exact component={Search} />
            <Footer />
          </Wraper>
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;

const Wraper = styled.div`
  height: auto;
  min-height: 100vh;
`;
