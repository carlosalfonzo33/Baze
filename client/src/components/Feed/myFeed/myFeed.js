import React, { Component } from "react";
import API from "../../../utils/API";
import { Col, Row, Container } from "../../../components/Grid";
import { ListItem } from "../../../components/List";
import Feednav from "../../Feednav";
import InfiniteScroll from 'react-infinite-scroller';
import Feed from "../Feed";
import UserHeader from "../../UserHeader";


class myFeed extends Component {
  state = {
    id:"59cd655cbd1d0402842ae948",
    posts: [],
  };

  //when saved component loads, get the posts already saved to db
  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    API.getUserPosts(this.state.id)
      .then(res => this.setState({ posts: res.data.posts}))
      .catch(err => console.log(err));
  };

  deletePost = id => {
    API.deletePost(id)
      .then(res => this.loadPosts(this.state.userId))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Feed data={this.state.posts} handleDelete={this.deletePost} deleteable />
    );
  }
}



export default myFeed;
