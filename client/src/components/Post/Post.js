import React, { Component } from "react";
import API from "../../utils/API";
import { Redirect } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn, Stationmenu, PostType, TrainLines } from "../../components/Form";


class Post extends Component {
  state = {
    posts: [],
    userId: window.localStorage.getItem('id') || '',
    comment: "",
    url: "",
    photo: "",
    postType: "Train",
    isAlert: false,
    station: "12th St. Oakland City Center",
    trainLine: "Pittsburg Bay Point - SFIA Millbrae",
    fireRedirect: false,
    file: "",
  };

  componentDidMount() {
    if (window.localStorage.getItem('id') === '') {
      window.location.href = '/login';
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleImageChange = event => {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        photo: reader.result
      });
    }

    reader.readAsDataURL(file)
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get posts and update the posts state
    event.preventDefault();
    API.savePosts(
      { userId: this.state.userId,
        comment: this.state.comment,
        url: this.state.url,
        photo: this.state.photo,
        postType: this.state.postType,
        isAlert: this.state.isAlert,
        station: this.state.station,
        trainLine: this.state.trainLine,
        date: Date.now()
      })
      .then(res => this.updateUserPosts(res), this.setState(
        { posts: [],
          url: "",
          comment: "",
          photo: "",
          postType: "Train",
          isAlert: false,
          station: "12th St. Oakland City Center",
          trainLine: "Pittsburg Bay Point - SFIA Millbrae",
          fireRedirect: false
      }))
      .catch(err => console.log(err));
    };

  updateUserPosts = res => {
    // console.log(res.data);
    API.updateUser(res.data)
    // want to re-route to feed after updating
    .then(response => this.setState({ fireRedirect: true }))
    .catch(err => console.log(err));
  };

  render() {
    const { fireRedirect } = this.state
    let imagePreviewUrl = this.state.photo;
    // console.log("img preview url", imagePreviewUrl);
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img className="previewImg" src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText"></div>);
    }

    return (
      <Container>
        <Container fluid>
          <Row>
            <Col size="md-12">

              <h1>Create a Post</h1>

              <form>
              <label>
                On the train or at the station?
                <br />
                <PostType
                  className="form-control"
                  name="postType"
                  onChange={this.handleInputChange}
                />
                  <label>
                    check if delay alert:
                    <input
                      name="isAlert"
                      type="checkbox"
                      checked={this.state.isAlert}
                      onChange={this.handleInputChange} />
                  </label>
                </label>
                <br />
                <label>
                  Select current or next station:
                  <br />
                  <Stationmenu
                    className="form-control"
                    name="station"
                    onChange={this.handleInputChange}
                  />
                </label>
                <br />
                <label>
                  Select train line you are on or waiting for:
                  <br />
                  <TrainLines
                    className="form-control"
                    name="trainLine"
                    onChange={this.handleInputChange}
                  />
                </label>
                <br />
                <label>
                  Add Image URL or Upload Photo:
                  <div className="form-group">
                    <Input
                      value={this.state.url}
                      onChange={this.handleInputChange}
                      name="url"
                      placeholder="Image(URL)"
                    />
                    <input className="fileInput form-control-file"
                       type="file"
                       onChange={this.handleImageChange} />


                     <div className="imgPreview">
                      {$imagePreview}
                     </div>
                   </div>
                 </label>
                 <label>
                   Your comment here:
                   <br />
                   <textarea
                     className="form-control"
                     name="comment"
                     value={this.state.comment}
                     onChange={this.handleInputChange}
                   />
                 </label>
                <br />
                <FormBtn
                  disabled={!(this.state.comment) && !(this.state.photo) && !(this.state.url)}
                  onClick={this.handleFormSubmit}>
                  Post
                </FormBtn>
              </form>
              {fireRedirect && (
                <Redirect to="/feed" />
              )}
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }

}

export default Post;
