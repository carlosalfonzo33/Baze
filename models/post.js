const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  userId: { type: String, required: true },
  comment: { type: String, required: true },
  postType: { type: String, required: true },
  isAlert: { type: Boolean, default: false},
  station: { type: String},
  trainLine: { type: String},
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
