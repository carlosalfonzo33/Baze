import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Feed from "./components/Feed";
import TrainPost from "./components/TrainPost";
import StationPost from "./components/StationPost";
import NoMatch from "./components/NoMatch";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/post/train" component={TrainPost} />
        <Route exact path="/post/station" component={StationPost} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
