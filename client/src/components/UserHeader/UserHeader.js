import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import UserHeaderContainer from "../UserHeaderContainer";
import "./userHeader.css";
import LogoutBtn from "../LogoutBtn";
import CreatePost from '../CreatePost';
import Nav from "../Nav";


class UserHeader extends Component {
  state = {
    userData: [],
    userId: window.localStorage.getItem('id') || '',

  };

  componentDidMount() {
    this.getUserInfo();
  }

  getUserInfo = () => {
    API.getUserPosts(this.state.userId)
      .then(res => this.setState({ userData: res.data}))
      .catch(err => console.log(err));
  };

  render() {
    // console.log("userheader", this.state.userData.img, this.state.userData.name, this.state.userId);
    return (
        <UserHeaderContainer
        >
          <Row>
            <Col size="md-12">
              <div className="topnav">
                <div className="navbar-inverse nav">
                  <LogoutBtn
                    onClick={()=>window.localStorage.setItem('id', "")}
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col size="md-2">

              <div><img src={this.state.userData.file || this.state.userData.img || "http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/13627991_1786762981582482_1865255854_n.jpg?ig_cache_key=MTI5MDEyNzkzODEzODUxNjQyNQ%3D%3D.2"} className="img-responsive header-img" alt={this.state.userData.name} /></div>
            </Col>
            <Col size="md-6">
              <div className="welcome-and-create">
                <h1 className="welcome">Welcome, {this.state.userData.name}! <CreatePost /></h1>
              </div>
            </Col>

          </Row>

        </UserHeaderContainer>

    );
  }

}

export default UserHeader;
