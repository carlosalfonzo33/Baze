import axios from "axios";

export default {
  // Gets all Posts from DB
  getPosts: function() {
    return axios.get("/api/posts");
  },

  getUserPosts: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Queries Posts
  searchPost: function(query, begin, end) {
    return axios.get("https://api.nytimes.com/svc/search/v2/postsearch.json", {
      params: {
        'api-key': "7e989fab4dfe40ab9a68b494a64c7fd3",
        'q': query,
        'begin_date': begin,
        'end_date': end
      }
    });
  },
  // Deletes the Post with the given id
  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a Post to the database
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
