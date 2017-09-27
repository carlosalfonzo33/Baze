import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Feed from "./components/Feed";
import myFeed from "./components/Feed/myFeed";
import delayFeed from "./components/Feed/delayFeed";
import stationFeed from "./components/Feed/stationFeed";
import trainFeed from "./components/Feed/trainFeed";
import Post from "./components/Post";
import NoMatch from "./components/NoMatch";


const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/feed/delayfeed" component={delayFeed} />
        <Route exact path="/feed/myfeed" component={myFeed} />
        <Route exact path="/feed/station" component={stationFeed} />
        <Route exact path="/feed/train" component={trainFeed} />
        <Route exact path="/post" component={Post} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
