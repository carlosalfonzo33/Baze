const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true, unique: true},
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true},
  img: { type: String, default: "http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/13627991_1786762981582482_1865255854_n.jpg?ig_cache_key=MTI5MDEyNzkzODEzODUxNjQyNQ%3D%3D.2" },
  file: { type: String, data: Buffer},
  date: { type: Date, default: Date.now },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: "Post"
  }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
