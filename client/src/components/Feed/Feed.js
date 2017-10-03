import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { ListItem } from "../../components/List";
import Feednav from "../Feednav"
import InfiniteScroll from 'react-infinite-scroller';
import UserHeader from "../UserHeader";
import "./Feed.css";
import CreatePost from '../CreatePost';
import BartAlerts from '../BartAlerts';



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
    console.log(this.state.startItem);
    var postSelection = this.props.data.slice(this.state.startItem,this.state.startItem+chunkSize);

    postSelection.map(post => {

        this.state.displayedItems.push(
          <ListItem key={post._id}>
            <Container>
              <Row>
                <Col size="md-2">
                <div>
                  <div className="img-container"><img src={post.userId.file || post.userId.img} className="img-responsive feed-img" alt={post.userId.name}/></div>
                  <div className="username">{post.userId.name} </div>
                </div>
                </Col>
                <Col size="md-3">
                  <div className="station">Station: {post.station} / Line: {post.trainLine}</div>
                  <div className="postType">Post Type: {post.postType} / Date: {post.date}</div>
                </Col>
                <Col size="md-6">
                  <div className="photo"><img src={post.photo || ""} className="img-responsive post-img"/></div>
                  <div className="comment">{post.comment || ""}</div>
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
        <Container fluid>
        <UserHeader />
        <BartAlerts />
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

    );
  }
}

export default Feed;
