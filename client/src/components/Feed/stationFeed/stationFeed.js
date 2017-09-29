import React, { Component } from "react";
import API from "../../../utils/API";
import { Col, Row, Container } from "../../../components/Grid";
import { ListItem } from "../../../components/List";
import Feednav from "../../Feednav";
import InfiniteScroll from 'react-infinite-scroller';
import '../Feed.css';
import Feed from "../Feed";



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
    API.getPosts()
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
