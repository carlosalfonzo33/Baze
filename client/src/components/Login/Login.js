import React, { Component } from "react";
import { Container, Row } from "../Grid";
import { Link, Redirect } from "react-router-dom";
import API from "../../utils/API";
import Nav from "../Nav";
import './login.css';

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
      API.login({email: this.state.email, password: this.state.password})
          .then(res => console.log('response', res))
          .catch(err => console.log(err));
  };


  render() {
    return (


      <Container>
        <Row>
          <Nav />
          <div className="login-container">
            <form>
              <h1>
                Login
              </h1>
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
                Need an account?&nbsp;&nbsp;&nbsp;&nbsp; 
                <Link to="/signup">
                  Signup
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
