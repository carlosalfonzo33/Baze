import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { ListItem } from "../../components/List";
import Feednav from "../Feednav"
import InfiniteScroll from 'react-infinite-scroller';
import UserHeader from "../UserHeader";
import DeleteBtn from "../DeleteBtn";
import Wrapper from "../Wrapper";



class Feed extends Component {
  state = {
    displayedItems: [],
    startItem: 0,
    hasMore: true,
  };

  props = {
    data: [],
    deleteable: false,
    handleDelete: () => {}
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
          <div className="img-container"><img src={post.userId.img} className="img-responsive feed-img" alt={post.userId.name} style={{}}/></div>
          {post.station}
          <br />
          {post.comment}
          <br />
          {post.date}
          {this.props.deleteable && <DeleteBtn onClick={() => this.props.handleDelete(post._id)} />}

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

export default Feed;
