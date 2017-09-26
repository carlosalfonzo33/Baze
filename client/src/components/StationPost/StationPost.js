import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn, Stationmenu } from "../../components/Form";
import SaveBtn from "../SaveBtn";

class StationPost extends Component {
  state = {
    posts: [],
    userId: "59c9de02544c7f0849aa19c3",
    comment: "",
    postType: "station",
    isAlert: false,
    station: "Bay Fair"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get posts and update the posts state
    event.preventDefault();
    API.savePosts({userId: this.state.userId, comment: this.state.comment, postType: this.state.postType, station: this.state.station})
      // .then(res => console.log("HANDLEFORMSUBMIT RESULTS IN SEARCH.JS", res.data.response.docs))
      .then(res => this.setState({ posts: [], comment: "" }))

      .catch(err => console.log(err));
      // console.log("ARTICLES STATE FROM SEARCH.JS", this.state.posts);
    };


  render() {
    return (
      <Container>
        <Container fluid>
          <Row>
            <Col size="md-12">

                <h1>Create a Post</h1>

              <form>
                <Stationmenu />
                <Input
                  value={this.state.comment}
                  onChange={this.handleInputChange}
                  name="comment"
                  placeholder="Start typing your comment"
                />


                <FormBtn
                  disabled={!(this.state.comment)}
                  onClick={this.handleFormSubmit}
                >
                  Post
                </FormBtn>
              </form>
              </Col>
              </Row>

            </Container>

      </Container>
    );
  }

}

export default StationPost;
