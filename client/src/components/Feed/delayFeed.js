import React, { Component } from "react";
import API from "../../utils/API";
import Feed from "./Feed";


class delayFeed extends Component {
  state = {
    posts: []
  };

  //when saved component loads, get the posts already saved to db
  componentDidMount() {
    this.loadPosts();
  };

  loadPosts = () => {
    API.getDelayPosts()
      .then(res => this.setState({ posts: res.data}))
      .catch(err => console.log(err));

  };

  render() {

    return (
      <Feed data={this.state.posts} />
    );
  }
}

export default delayFeed;
