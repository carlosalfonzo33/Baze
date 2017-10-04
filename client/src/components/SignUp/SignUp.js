import React, { Component } from "react";
import { Container, Row } from "../Grid";
import { Link, Redirect } from "react-router-dom";
import API from "../../utils/API";
import Nav from "../Nav";
import ImageUpload from "../ImageUpload";
import './signup.css';
import { Input } from "../../components/Form";


class SignUp extends Component {

  state = {
    name: "",
    email: "",
    password: "",
    img: "",
    file: "",
    imagePreviewUrl: ""

  };

  props = {
    uploadedImg: [],
  };

  handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
          [name]: value,
      })
  };

  handleImageChange = event => {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  };

  handleFormSubmit = event => {
      event.preventDefault();
      API.signUp({name: this.state.name, email: this.state.email, password: this.state.password, img: this.state.img, file: this.state.imagePreviewUrl})
          .then(res => console.log('response signup', res))
          .catch(err => console.log(err));
  };

  render() {
    let imagePreviewUrl = this.state.imagePreviewUrl;
    // console.log("img preview url", imagePreviewUrl);
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img className="previewImg" src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText"></div>);
    }

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
              <Input
                value={this.state.img}
                onChange={this.handleInputChange}
                name="img"
                placeholder="Image(URL)"
              />
              <input className="fileInput form-control-file"
                 type="file"
                 onChange={this.handleImageChange} />


               <div className="imgPreview">
                {$imagePreview}
               </div>
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
                <Link to="/login">
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
