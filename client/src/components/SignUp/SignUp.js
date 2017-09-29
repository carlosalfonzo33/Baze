import React, { Component } from "react";
import { Container, Row } from "../Grid";
import { Link, Redirect } from "react-router-dom";
import API from "../../utils/API";
import Nav from "../Nav";
import './signup.css';

class Login extends Component {

  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
          [name]: value,
      })
  };

  handleFormSubmit = event => {
      event.preventDefault();
      API.signUp({email: this.state.email, password: this.state.password})
          .then(res => console.log('response', res))
          .catch(err => console.log(err));
  };

  render() {
    return (


      <Container>
        <Row>
          <Nav />
          <div className="login-container">
            <h1>
                Signup
            </h1>
            <form>
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
                onClick={this.handleFormSubmit}
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
