const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true},
  email: { type: String, required: true, unique: true},
  img: { type: String },
  date: { type: Date, default: Date.now },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: "Post"
  }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
