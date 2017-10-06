import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import LoginCheck from "./components/LoginCheck";
import AllFeed from "./components/Feed/AllFeed";
import myFeed from "./components/Feed/myFeed";
import delayFeed from "./components/Feed/delayFeed";
import stationFeed from "./components/Feed/stationFeed";
import trainFeed from "./components/Feed/trainFeed";
import Post from "./components/Post";
import NoMatch from "./components/NoMatch";
import SignUp from "./components/SignUp";



const App = () => {

  return(<Router>
    <div style={{ "margin-right": "5px", "margin-left": "5px"}}>
      <Switch>
        <Route exact path="/" component={LoginCheck}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/feed" component={AllFeed} />
        <Route exact path="/feed/delayfeed" component={delayFeed} />
        <Route exact path="/feed/myfeed" component={myFeed} />
        <Route exact path="/feed/station" component={stationFeed} />
        <Route exact path="/feed/train" component={trainFeed} />
        <Route exact path="/post" component={Post} />

        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>);
}

export default App;
