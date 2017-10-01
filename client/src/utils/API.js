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
  login: function(name) {
    console.log("logged in user", name)
    return axios.get("/api/login/"+ name);
    // .then((res) => {
    //   window.location = '/feed';
    // });
    // return axios.post("/login", data).then((res) => {
    //   if (data.email === email && data.password === password) {
    //     window.location = '/feed';
    //   } else {
    //     console.log('Login or password is incorrect');
    //   };
    // });
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
    console.log("signed up user", data);
    return axios.post("/api/signup", data)
    .then((res) => {
      window.location = '/';
    });
    // if (data.email != '' && data.password != '') {
    //   return axios.post("/signup", data).then((res) => {
    //     window.location = '/feed';
    //   });
    // } else {
    //   console.log('Must not be empty');
    // }
  }


};
