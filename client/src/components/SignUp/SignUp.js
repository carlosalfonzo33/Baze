import React, { Component } from "react";
import { Container, Row } from "../Grid";
import { Link, Redirect } from "react-router-dom";
import API from "../../utils/API";
import Nav from "../Nav";
import ImageUpload from "../ImageUpload";
import './signup.css';

class SignUp extends Component {

  state = {
    name: "",
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
      API.signUp({name: this.state.name, email: this.state.email, password: this.state.password})
          .then(res => console.log('response signup', res))
          .catch(err => console.log(err));
  };

  render() {
    return (


      <Container>
        <Row>
          <Nav />
          <div className="signup-container">
            <h1>
                Signup
            </h1>
            <form>
              <div className="form-group">
                <input className="form-control"
                type="text"
                placeholder="Username"
                name="name"
                onChange={this.handleInputChange}
              >
              </input>
              </div>
              <div className="form-group">
                <input className="form-control"
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={this.handleInputChange}
                >
              </input>
              </div>
              <div className="form-group">
                <input className="form-control"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleInputChange}
                >
                </input>
              </div>
              <div className="form-group">
                <ImageUpload />
              </div>
              <button className="btn btn-primary"
                type='submit'
                onClick={this.handleFormSubmit}
              >
                Sign Up
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

export default SignUp;
