import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { ListItem } from "../../components/List";
import Feednav from "../Feednav"
import InfiniteScroll from 'react-infinite-scroller';
import UserHeader from "../UserHeader";
import "./Feed.css";
import CreatePost from '../CreatePost';
import BartAlerts from '../BartAlerts';
import LikeIt from '../LikeIt';



class Feed extends Component {
  state = {
    displayedItems: [],
    startItem: 0,
    hasMore: true,
  };

  props = {
    data: [],
  };


  displayItems = () => {
    var chunkSize = 10;

    console.log(this.props.data);
    // console.log("displayItems");
    if(this.props.data.length === 0)
      return;
    var postSelection = this.props.data.slice(this.state.startItem,this.state.startItem+chunkSize);

    postSelection.map(post => {
        this.state.displayedItems.push(
          <ListItem key={post._id}>
            <Container>
              <Row>
                <Col size="md-3">
                <div>
                  <div className="img-container"><img src={post.userId.file || post.userId.img} className="img-responsive feed-img" alt={post.userId.name}/></div>
                  <div className="username">{post.userId.name} </div>
                  <div>
                    <div className="station"><strong>Station:</strong> {post.station} </div>
                    <div className="train"><strong>Line:</strong> {post.trainLine}</div>
                    <div className="postType"><strong>Post Type:</strong> {post.postType} </div>
                    <div className="date">Date: {post.date}</div>
                  </div>
                </div>
                </Col>
                <Col size="md-5">
                  <div className="post-wrapper">
                    {post.photo && <div className="photo"><img src={post.photo} className="img-responsive post-img" alt={post.comment || "no description"}/></div>}
                    {post.url && <div className="photo"><img src={post.url} className="img-responsive post-img" alt={post.comment || "no description"}/></div>}
                    {post.comment && <div className="comment">{post.comment}</div>}
                  </div>
                </Col>
                <Col size="md-3">
                  <LikeIt
                  postLiked={post._id}
                  likes={post.likes}/>
                </Col>
              </Row>
            </Container>
          </ListItem>);
      }
    );

    this.setState({
      startItem: (this.state.startItem + chunkSize),
      hasMore: (this.state.startItem < this.props.data.length)
    });
  }

  render() {
    console.log("render");

    const loader = <div className="loader">Loading ...</div>;

    return (
    <div>
      <UserHeader />
      <BartAlerts />
      <Feednav />


          <Row>
            <Col size="md-12">

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
      </div>
    );
  }
}

export default Feed;
