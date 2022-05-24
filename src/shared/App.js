import React from "react";

import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";

import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

import GlobalStyle from "./GlobalStyles";

// styled comopnents
import styled from "styled-components";

// import pages
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {
  Login,
  Crew,
  Main,
  MyPage,
  Search,
  NoteWrite,
  NoteWrites,
  Test,
} from "../pages/index";
=======
import { Login, Crew, Main, MyPage, Search, NoteWrites } from "../pages/index";
>>>>>>> 4017e03 (page(Mypage): 내가 참여한 스터디 불러오는 기능 전까지 구현)
=======
import { Login, Crew, Main, MyPage, Search, NoteWrites, Test } from "../pages/index";
>>>>>>> c84d771 (components(Card): Card 컴포넌트 작성 후 커밋)
=======
import { Login, Crew, Main, MyPage, Search, NoteWrites, Test} from "../pages/index";
>>>>>>> 413a052 (page(Main): 작업중 DB 재배치를 위해 커밋)
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
<<<<<<< HEAD
<<<<<<< HEAD
            <Route path="/test" exact component={Test} />
            <Route path="/" exact component={Main} />
=======
            <Route path="/" exact component={Test} />
            <Route path="/main" exact component={Main} />
>>>>>>> c84d771 (components(Card): Card 컴포넌트 작성 후 커밋)
=======
            <Route path="/test" exact component={Test} />
            <Route path="/" exact component={Main} />
>>>>>>> 413a052 (page(Main): 작업중 DB 재배치를 위해 커밋)
            <Route path="/crew/:meetingId" exact component={Crew} />
            <Route path="/mypage" exact component={MyPage} />
<<<<<<< HEAD
            <Route path="/notewrites" exact component={NoteWrites} />
            <Route path="/notewrite" exact component={NoteWrite} />
=======
            <Route path="/notewrite" exact component={NoteWrites} />
>>>>>>> 4017e03 (page(Mypage): 내가 참여한 스터디 불러오는 기능 전까지 구현)
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
