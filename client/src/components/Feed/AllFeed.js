import React, { Component } from "react";
import API from "../../utils/API";
import Feed from "./Feed";


class AllFeed extends Component {
  state = {
    posts: [],
  };

  //when saved component loads, get the posts already saved to db
  componentDidMount() {
    if (window.localStorage.getItem('id')) {
      this.loadPosts();
    } else {
      window.location.href = '/login';
    }

  };

  loadPosts = () => {
    API.getPosts()
      .then(res => this.setState({ posts: res.data}))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Feed data={this.state.posts} />
    );
  }
}

export default AllFeed;
