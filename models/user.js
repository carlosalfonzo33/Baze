const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true, unique: true},
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true},
  img: { type: String, default: "https://img.buzzfeed.com/buzzfeed-static/static/2015-05/20/13/campaign_images/webdr01/what-your-favorite-stock-photo-spaghetti-person-s-2-7471-1432142821-2_dblbig.jpg" },
  date: { type: Date, default: Date.now },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: "Post"
  }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
