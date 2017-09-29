import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link, Redirect } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn, Stationmenu, PostType, TrainLines } from "../../components/Form";
import SaveBtn from "../SaveBtn";

class Post extends Component {
  state = {
    posts: [],
    userId: "59cdba52e4e990cda9001dd0",
    comment: "",
    postType: "Train",
    isAlert: false,
    station: "12th St. Oakland City Center",
    trainLine: "Pittsburg Bay Point - SFIA Millbrae",
    fireRedirect: false
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
    API.savePosts(
      { userId: this.state.userId,
        comment: this.state.comment,
        postType: this.state.postType,
        isAlert: this.state.isAlert,
        station: this.state.station,
        trainLine: this.state.trainLine
      })
      .then(res => this.updateUserPosts(res), this.setState(
        { posts: [],
          comment: "",
          postType: "Train",
          isAlert: false,
          station: "12th St. Oakland City Center",
          trainLine: "Pittsburg Bay Point - SFIA Millbrae",
          fireRedirect: false
      }))
      .catch(err => console.log(err));
    };

  updateUserPosts = res => {
    // console.log(res.data);
    API.updateUser(res.data)
    // want to re-route to feed after updating
    .then(response => this.setState({ fireRedirect: true }))
    .catch(err => console.log(err));
  };

  render() {
    const { fireRedirect } = this.state

    return (
      <Container>
        <Container fluid>
          <Row>
            <Col size="md-12">

              <h1>Create a Post</h1>

              <form>
              <label>
                On the train or at the station?
                <br />
                <PostType
                  className="form-control"
                  name="postType"
                  onChange={this.handleInputChange}
                />
                  <label>
                    check if delay alert:
                    <input
                      name="isAlert"
                      type="checkbox"
                      checked={this.state.isAlert}
                      onChange={this.handleInputChange} />
                  </label>
                </label>
                <br />
                <label>
                  Select current or next station:
                  <br />
                  <Stationmenu
                    className="form-control"
                    name="station"
                    onChange={this.handleInputChange}
                  />
                </label>
                <br />
                <label>
                  Select train line you are on or waiting for:
                  <br />
                  <TrainLines
                    className="form-control"
                    name="trainLine"
                    onChange={this.handleInputChange}
                  />
                </label>
                <br />
                <label>
                  Your comment here:
                  <br />
                  <textarea
                    className="form-control"
                    name="comment"
                    value={this.state.comment}
                    onChange={this.handleInputChange}
                  />
                </label>
                <br />
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
