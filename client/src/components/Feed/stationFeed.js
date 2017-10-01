import React, { Component } from "react";
import API from "../../utils/API";
import Feed from "./Feed";



class stationFeed extends Component {
  state = {
    posts: [],
    displayedItems: [],
    startItem: 0,
    hasMore: true
  };

  //when saved component loads, get the posts already saved to db
  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    API.getStationPosts()
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

export default stationFeed;
