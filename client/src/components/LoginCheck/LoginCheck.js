import React, { Component } from "react";
import { Container, Row } from "../Grid";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Nav from "../Nav";

class LoginCheck extends Component {

  state = {
    id: window.localStorage.getItem('id') || '',
  };

  componentDidMount() {
    this.loggedIn();
  };

  loggedIn = () => {

    if (this.state.id) {
      window.location.href = '/feed';
    } else {
      window.location.href = '/login';
    }
  };

  render() {

    return (
      <Container>
        <h3>BAZE - Social Commute</h3>
      </Container>

    );
  }

}

export default LoginCheck;
