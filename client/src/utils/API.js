import axios from "axios";

export default {
  // Gets all Posts from DB
  getPosts: function() {
    return axios.get("/api/posts");
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
  }
};
