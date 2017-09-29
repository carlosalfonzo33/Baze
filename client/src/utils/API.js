import axios from "axios";

export default {
  // Gets all Posts from DB
  getPosts: function() {
    return axios.get("/api/posts");
  },

  getDelayPosts: function() {
    return axios.get("/api/posts/delay");
  },

  getStationPosts: function() {
    return axios.get("/api/posts/station");
  },

  getTrainPosts: function() {
    return axios.get("/api/posts/train");
  },

  getUserPosts: function(id) {
    return axios.get("/api/users/" + id);
  },

  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  savePosts: function(postData) {
    console.log("ARTICLE SAVED", postData);
    return axios.post("/api/posts", postData);
  },
  updateUser: function(id) {
    console.log("POSTS data to insert into users!", id);
    return axios.post("/api/users/update ", id);
  },
  //Signup-Login
  signUp: function(data) {
    console.log("signed up user");
    return axios.post("/api/signup", data).then((res) => {
      window.location = '/feed';
    });
    // if (data.email != '' && data.password != '') {
    //   return axios.post("/signup", data).then((res) => {
    //     window.location = '/feed';
    //   });
    // } else {
    //   console.log('Must not be empty');
    // }
  },

  login: function(data) {
    console.log("logged in user")
    return axios.post("/api/login", data);
    // return axios.post("/login", data).then((res) => {
    //   if (data.email === email && data.password === password) {
    //     window.location = '/feed';
    //   } else {
    //     console.log('Login or password is incorrect');
    //   };
    // });
  }
};
