import React, { Component } from "react";
import API from "../../utils/API";
import Feed from "./Feed";



class trainFeed extends Component {
  state = {
    posts: [],
    displayedItems: [],
    startItem: 0,
    hasMore: true
  };

  //when saved component loads, get the posts already saved to db
  componentDidMount() {
    if (window.localStorage.getItem('id')) {
      this.loadPosts();
    } else {
      window.location.href = '/login';
    }
  }

  loadPosts = () => {
    API.getTrainPosts()
      .then(res =>
        // console.log(res.data)
        this.setState({ posts: res.data})
      )
      .catch(err => console.log(err));

  };


  render() {
    return (
      <Feed data={this.state.posts} />
    );
  }
}

export default trainFeed;
