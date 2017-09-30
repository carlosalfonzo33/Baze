import React, { Component } from "react";
import { Container, Row } from "../Grid";
import { Link, Redirect } from "react-router-dom";
import API from "../../utils/API";
import Nav from "../Nav";
import './login.css';
import Wrapper from "../Wrapper";

class Login extends Component {

  state = {
    name: "",
    password: ""
  };

  setSession = (name) => {
    console.log("HIT");
    API.login(name)
    .then(res => {
      window.localStorage.setItem('id', res.data[0]._id);

      console.log('response', res.data[0]._id)

    })
    .catch(err => console.log(err));
  };

  handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
          [name]: value,
      })
  };

  handleFormSubmit = event => {
    console.log("myprops", this.props)
      event.preventDefault();
      this.setSession(this.state.name)

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
                placeholder="Username"
                name="name"
                onChange={this.handleInputChange}

              >
              </input>
              </div>
              <input className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.handleInputChange}

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
