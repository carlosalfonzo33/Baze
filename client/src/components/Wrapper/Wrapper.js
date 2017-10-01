import React, { Component } from "react";
import "./Wrapper.css";
import API from "../../utils/API";
import App from "../../App.js"
import Login from "../Login";

class Wrapper extends Component {

  state = {
    currentUser: ""
  };

  props = {
    data: [],
    setSession: (name) => {
      console.log("HIT");
      API.login(name)
      .then(res => console.log('response', res))
      .catch(err => console.log(err));
    }
  }



  render() {

    return (
      <div>
        <App />
      </div>
    );
  }



};




export default Wrapper;
