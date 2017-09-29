import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";


class Post extends Component {
  state = {
    posts: [],
    userId: "59cd655cbd1d0402842ae948",
    comment: "",
    postType: "Train",
    isAlert: false,
    station: "12th St. Oakland City Center",
    trainLine: "Pittsburg Bay Point - SFIA Millbrae",
    fireRedirect: false
  };

  render() {

    return (
      <Container>
        <Container fluid>
          <Row>
            <Col size="md-12">
              <h1>{this.state.userId}</h1>

            </Col>
          </Row>
        </Container>
      </Container>
    );
  }

}

export default Post;
