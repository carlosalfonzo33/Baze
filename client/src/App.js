import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Feed from "./components/Feed";
import myFeed from "./components/Feed/myFeed";
import delayFeed from "./components/Feed/delayFeed";
import stationFeed from "./components/Feed/stationFeed";
import trainFeed from "./components/Feed/trainFeed";
import TrainPost from "./components/TrainPost";
import StationPost from "./components/StationPost";
import NoMatch from "./components/NoMatch";
import SignUp from "./components/SignUp";


const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/feed/delayfeed" component={delayFeed} />
        <Route exact path="/feed/myfeed" component={myFeed} />
        <Route exact path="/feed/station" component={stationFeed} />
        <Route exact path="/feed/train" component={trainFeed} />
        <Route exact path="/post/train" component={TrainPost} />
        <Route exact path="/post/station" component={StationPost} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
