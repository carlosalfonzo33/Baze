import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Feednav from "../Feednav";
import Moment from 'react-moment';
import 'moment-timezone';
import UserHeader from "../UserHeader";
import DeleteBtn from "../DeleteBtn";
import "./Feed.css";
import BartAlerts from '../BartAlerts';


class myFeed extends Component {
  state = {
    user: {},
    posts: [],
    userId: window.localStorage.getItem('id') || '',
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
    API.getUserPosts(this.state.userId)
      .then(res => {
        console.log("loadpost res", res.data)
        this.setState({ user: res.data, posts: res.data.posts })
      })
      .catch(err => console.log(err));
  };

  deletePost = id => {
    API.deletePost(id)
      .then(res => {
        this.loadPosts()
      })
      .catch(err => console.log(err));
  };


  render() {
    const loader = <div className="loader">Loading ...</div>;
    console.log("rendering myfeed", this.state.posts);
    return (
    <div>
        <UserHeader />
        <BartAlerts />
        <Feednav />
          <Row>
            <Col size="md-12">
              {this.state.posts.length ? (
              <div>
                {this.state.posts.map(post => (

                  <ListItem key={post._id}>
                      <Container>
                        <Row>
                          <Col size="md-4">
                            <div>
                            <div className="img-container"><img src={this.state.user.file || this.state.user.img || "http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/13627991_1786762981582482_1865255854_n.jpg?ig_cache_key=MTI5MDEyNzkzODEzODUxNjQyNQ%3D%3D.2"} className="img-responsive feed-img"/></div>
                              <div className="username">{this.state.user.name} </div>
                              <div>
                                <div className="station"><strong>Station:</strong> {post.station} </div>
                                <div className="train"><strong>Line:</strong> {post.trainLine}</div>
                                <div className="postType"><strong>Post Type:</strong> {post.postType} </div>
                                <div className="date"><strong>Date:</strong> <Moment format="MM/DD/YYYY - hh:mm a">{post.date}</Moment></div>
                              </div>
                            </div>
                          </Col>

                          <Col size="md-5">
                          {post.photo && <div className="photo"><img src={post.photo} className="img-responsive post-img" alt=""/></div>}
                          {post.url && <div className="photo"><img src={post.url} className="img-responsive post-img" alt={post.comment || "no description"}/></div>}
                          {post.comment && <div className="comment">{post.comment}</div>}
                          </Col>
                          <Col size="md-3">
                            <DeleteBtn onClick={() => this.deletePost(post._id)} />
                          </Col>
                        </Row>
                      </Container>
                  </ListItem>
                ))}
                </div>

              ) : (
                  <h3>You do not have any posts</h3>
              )}
            </Col>
          </Row>
      </div>
    );
  }
}



export default myFeed;
