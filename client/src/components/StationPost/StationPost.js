import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import SaveBtn from "../SaveBtn";

class StationPost extends Component {
  state = {
    posts: [],
    comment: "",
    postType: "station",
    isAlert: false,
    station: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  savePost = post => {
      API.savePost(
        {
          comment: "",
          postType: "",
          isAlert: "",
          station: ""
      }
      )
        .then(res => console.log(post))
        .catch(err => console.log(err));
  };



  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get posts and update the posts state
    event.preventDefault();
    API.searchPost(this.state.topic, this.state.startyear, this.state.endyear)
      // .then(res => console.log("HANDLEFORMSUBMIT RESULTS IN SEARCH.JS", res.data.response.docs))
      .then(res => this.setState({ posts: res.data.response.docs, topic: "", startyear: "", endyear: "", searchClicked: true }))

      .catch(err => console.log(err));
      // console.log("ARTICLES STATE FROM SEARCH.JS", this.state.posts);
    };


  render() {
    return (
      <Container>
        <Container fluid>
          <Row>
            <Col size="md-12">

                <h1>Search</h1>

              <form>
                <Input
                  value={this.state.topic}
                  onChange={this.handleInputChange}
                  name="topic"
                  placeholder="Topic (required)"
                />
                <Input
                  value={this.state.startyear}
                  onChange={this.handleInputChange}
                  name="startyear"
                  placeholder="20161109"
                />
                <Input
                  value={this.state.endyear}
                  onChange={this.handleInputChange}
                  name="endyear"
                  placeholder="20170915"
                />

                <FormBtn
                  disabled={!(this.state.topic && this.state.startyear && this.state.endyear)}
                  onClick={this.handleFormSubmit}
                >
                  Find Posts
                </FormBtn>
              </form>
              </Col>
              </Row>

            </Container>
            <Container fluid>
              <Row>
                <Col size="md-12">
                 {this.state.posts.length ? (
                  <div>
                    <h2>Search Results</h2>
                    <List>
                      {this.state.posts.map(post => (

                        <ListItem key={post._id}>
                        <Link target="_blank" to={post.web_url}>
                          <strong>
                            {post.headline.main}
                          </strong>
                        </Link>
                        <br />
                          {post.pub_date}
                          <SaveBtn onClick={() => this.savePost({post})} />

                        </ListItem>
                      ))}
                    </List>
                  </div>
                ) : (
                  <h3>{this.state.searchClicked ? (
                    "No Results Found"
                  ) : (
                    ""
                  )} </h3>
                )}
            </Col>
          </Row>
        </Container>

      </Container>
    );
  }

}

export default StationPost;
