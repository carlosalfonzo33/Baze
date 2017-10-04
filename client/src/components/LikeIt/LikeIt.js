import React, { Component } from "react";
import API from "../../utils/API";
import "./LikeIt.css";
import LikeBtn from "./LikeBtn";

class LikeIt extends Component {
  state = {
    userId: window.localStorage.getItem('id') || '',
    likeCount: 0
  };

  props = {
    postLiked: {},
    likes: {}
  };

  componentDidMount() {
    if (window.localStorage.getItem('id') === '') {
      window.location.href = '/login';
    } else {
      this.getLikeCount();
    }
  };

  getLikeCount = () => {
    this.setState({ likeCount: this.props.likes.length })
  };

  updatePostLikes = res => {
    API.updatePostLikes(res)
    .then(response => {
      this.setState({ likeCount: response.data.likes.length})

    })
    .catch(err => console.log(err));
  };


  render() {
    return (
      <div className="likes">
        <div className="like-count"> {this.state.likeCount} </div>
        <LikeBtn
          onClick={() => { this.updatePostLikes({ postId: this.props.postLiked, userId: this.state.userId }) } }/>

      </div>
    );
  }

}

export default LikeIt;
