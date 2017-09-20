import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class TrainPost extends Component {
  state = {
    posts: []
  };

  //when saved component loads, get the posts already saved to db
  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    API.getPosts()
      .then(res =>
        this.setState({ posts: res.data})
      )
      .catch(err => console.log(err));
  };

  deletePost = id => {
    API.deletePost(id)
      .then(res => this.loadPosts())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Container fluid>
          <Row>
            <Col size="md-12">
              <h1>Saved Posts</h1>
               {this.state.posts.length ? (
                <List>
                  {this.state.posts.map(post => (
                    <ListItem key={post._id}>
                      <Link target="_blank" to={post.url}>
                      <strong>
                        {post.title}
                      </strong>
                      </Link>
                      <br />
                        {post.date}

                      <DeleteBtn onClick={() => this.deletePost(post._id)} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Posts Saved! Search for and save posts above</h3>
              )}
            </Col>
          </Row>
        </Container>
      </Container>

    );
  }
}

export default TrainPost;
