import React, { Component } from "react";
import { Container, Row } from "../Grid";
import { Link, Redirect } from "react-router-dom";
import API from "../../utils/API";
import Nav from "../Nav";
import './imageupload.css';

class ImageUpload extends Component {
  //   state = {
  //     file: "",
  //   };
  //
  //   constructor(props) {
  //     super(props);
  //     this.state = {file: '', imagePreviewUrl: ''};
  //   }
  //
  //
  ////  <button className="btn btn-primary submitButton"
  //     type="submit"
  //     onClick={(e)=>this._handleSubmit(e)}>Upload Profile Picture
  //  </button>
  //   _handleImageChange(e) {
  //     e.preventDefault();
  //
  //     let reader = new FileReader();
  //     let file = e.target.files[0];
  //
  //     reader.onloadend = () => {
  //       this.setState({
  //         file: file,
  //         imagePreviewUrl: reader.result
  //       });
  //     }
  //
  //     reader.readAsDataURL(file)
  //   }
  //
  //   render() {
  //     return()
  //   }
  }

  export default ImageUpload;
