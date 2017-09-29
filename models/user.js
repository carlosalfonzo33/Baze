const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true},
  email: { type: String, required: true},
  password: { type: String, required: true},
  img: { type: String, default: "https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_960_720.png" },
  date: { type: Date, default: Date.now },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: "Post"
  }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
