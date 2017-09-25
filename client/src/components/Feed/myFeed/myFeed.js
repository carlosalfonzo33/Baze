import React, { Component } from "react";
import API from "../../../utils/API";
import { Col, Row, Container } from "../../../components/Grid";
import { ListItem } from "../../../components/List";
import DeleteBtn from "../../DeleteBtn";
import Feednav from "../../Feednav";
import InfiniteScroll from 'react-infinite-scroller';


class myFeed extends Component {
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

  displayItems = () => {
    var chunkSize = 10;

    console.log(this.state.posts);
    // console.log("displayItems");
    if(this.state.posts.length === 0)
      return;
    console.log(this.state.startItem);
    var postSelection = this.state.posts.slice(this.state.startItem,this.state.startItem+chunkSize);

    postSelection.map(post => {
        this.state.displayedItems.push(
          <ListItem key={post._id}>
          {post.station}
          <br />
          {post.comment}
          <br />
          {post.date}
          <DeleteBtn onClick={() => this.deletePost(post._id)} />
          </ListItem>);
      }

    );

    this.setState({
      startItem: (this.state.startItem + chunkSize),
      hasMore: (this.state.startItem < this.state.posts.length)
    });
  }

  render() {
    console.log("render");

    const loader = <div className="loader">Loading ...</div>;

    return (
      <Container>
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
