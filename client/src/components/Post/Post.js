import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link, Redirect } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn, Stationmenu } from "../../components/Form";
import SaveBtn from "../SaveBtn";

class Post extends Component {
  state = {
    posts: [],
    userId: "59cc10614aa2ea16c2187dad",
    comment: "",
    postType: "station",
    isAlert: false,
    station: "12th St. Oakland City Center",
    fireRedirect: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleStationChange = event => {
    const { value } = event.target;
    this.setState({
      station: value
    });
  };

  handlePostTypeChange = event => {
    const { value } = event.target;
    this.setState({
      postType: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get posts and update the posts state
    event.preventDefault();
    API.savePosts({userId: this.state.userId, comment: this.state.comment, postType: this.state.postType, station: this.state.station})
      .then(res => this.updateUserPosts(res), this.setState({ posts: [], comment: "" }))

      .catch(err => console.log(err));
    };

  updateUserPosts = res => {
    // console.log(res.data);
    API.updateUser(res.data)
    // want to re-route to feed after updating
    .then(response => this.setState({ fireRedirect: true }))
    .catch(err => console.log(err));
  };

  // redirect = res => {
  //   console.log('yo!');
  // };



  render() {
    const { fireRedirect } = this.state

    return (
      <Container>
        <Container fluid>
          <Row>
            <Col size="md-12">

              <h1>Create a Post</h1>

              <select>
                <option>Train</option>
                <option>Station</option>
                onChange={this.handlePostTypeChange}
              </select>
              <form>
                <Stationmenu
                  onChange={this.handleStationChange}
                />
                <Input
                  value={this.state.comment}
                  onChange={this.handleInputChange}
                  name="comment"
                  placeholder="Start typing your comment"
                />

                <FormBtn
                  disabled={!(this.state.comment)}
                  onClick={this.handleFormSubmit}>
                  Post
                </FormBtn>
              </form>
              {fireRedirect && (
                <Redirect to="/feed" />
              )}
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }

}

export default Post;
