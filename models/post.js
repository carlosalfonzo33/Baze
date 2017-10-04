const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User"},
  comment: { type: String },
  url: { type: String },
  photo: { type: String, data: Buffer },
  postType: { type: String, required: true },
  isAlert: { type: Boolean, default: false },
  station: { type: String },
  trainLine: { type: String },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
