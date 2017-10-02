import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { ListItem } from "../../components/List";
import Feednav from "../Feednav";
import InfiniteScroll from 'react-infinite-scroller';
import UserHeader from "../UserHeader";
import DeleteBtn from "../DeleteBtn";
import "./Feed.css";


class myFeed extends Component {
  state = {
    posts: [],
    userId: window.localStorage.getItem('id') || '',
    displayedItems: [],
    startItem: 0,
    hasMore: true
  };

  //when saved component loads, get the posts already saved to db
  componentDidMount() {
    this.loadPosts();
  };

  loadPosts = () => {
    API.getUserPosts(this.state.userId)
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err));
  };

  deletePost = id => {
    API.deletePost(id)
      .then(res => {
        window.location.href = '/feed/myfeed'})
      .catch(err => console.log(err));
  };

  displayItems = () => {
    var chunkSize = 10;

    if(this.state.posts.length === 0)
      return;
    console.log(this.state.startItem);
    var postSelection = this.state.posts.posts.slice(this.state.startItem,this.state.startItem+chunkSize);

    postSelection.map(post => {

      this.state.displayedItems.push(
        <ListItem key={post._id}>
          <Container>
            <Row>
              <Col size="md-2">
                <div className="name-img">
                  <div className="img-container"><img src={this.state.posts.file || this.state.posts.img} className="img-responsive feed-img" alt={this.state.posts.name} /></div>
                  <div className="username">{this.state.posts.name} </div>
                </div>
              </Col>
              <Col size="md-9">
                <div className="comment">{post.comment}</div>
                <br />
                <div className="station">Station: {post.station}</div>
                <div className="train">Line: {post.trainLine}</div>
                <div className="postType">Post Type: {post.postType}</div>
                <div className="date">{post.date}</div>
                <DeleteBtn onClick={() => this.deletePost(post._id)} />
              </Col>
            </Row>
          </Container>
        </ListItem>);
    });

    this.setState({
      startItem: (this.state.startItem + chunkSize),
      hasMore: (this.state.startItem < this.state.posts.posts.length)
    });
  }

  render() {
    const loader = <div className="loader">Loading ...</div>;

    return (
      <Container>
        <UserHeader />
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Feednav />
              <InfiniteScroll
                pageStart={0}
                initialLoad={true}
                loadMore={this.displayItems}
                hasMore={this.state.hasMore}
                loader={loader}
                >
                {this.state.displayedItems}
              </InfiniteScroll>
            </Col>
          </Row>
        </Container>
      </Container>

    );
  }
}



export default myFeed;
