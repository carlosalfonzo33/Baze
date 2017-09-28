import React, { Component } from "react";
import { Container, Row } from "../Grid";
import { Link, Redirect } from "react-router-dom";
import Nav from "../Nav";
import './signup.css';

class Login extends Component {

  render() {
    return (


      <Container>
        <Row>
          <Nav />
          <div className="login-container">
            <h1>
                Signup
            </h1>
            <form
                action="/signup"
                method="post"
            >
              <div className="form-group">
              <input className="form-control"
                type="text"
                placeholder="Email"
                name="email"
              >
              </input>
              </div>
              <input className="form-control"
                type="password"
                placeholder="Password"
                name="password"
              >
              </input>
              <button className="btn btn-primary"
                type='submit'
              >
                Login
              </button>
              <hr />
              <p>
                Already have an account?&nbsp;&nbsp;&nbsp;&nbsp; 
                <Link to="/">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Login;
