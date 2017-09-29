import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import UserHeaderContainer from "../UserHeaderContainer";


class UserHeader extends Component {
  state = {
    userData: [],
    userId: "59cd655cbd1d0402842ae948",

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

    return (

      <Container fluid>
        <UserHeaderContainer>
          <Row>
            <Col size="md-12">
              <div><img src={this.state.userData.img} className="img-responsive header-img" alt={this.state.userData.name} /></div>
              <h1>Welcome, {this.state.userData.name}!</h1>


            </Col>
          </Row>
        </UserHeaderContainer>
      </Container>

    );
  }

}

export default UserHeader;
