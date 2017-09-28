const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/baze",
  {
    useMongoClient: true
  }
);

const userSeed = [
  {
  name: "Alex",
  email: "alex@alex.com",
  img: "https://thumbs.dreamstime.com/z/latino-woman-money-1952152.jpg",
  date: new Date(Date.now())
  },
  {
  name: "Sam",
  email: "sam@sam.com",
  img: "https://img.buzzfeed.com/buzzfeed-static/static/2015-05/20/13/campaign_images/webdr01/what-your-favorite-stock-photo-spaghetti-person-s-2-7471-1432142821-2_dblbig.jpg",
  date: new Date(Date.now())
  },
  {
  name: "Morgan",
  email: "morgan@morgan.com",
  img: "https://thumbs.dreamstime.com/z/latino-boxer-1671764.jpg",
  date: new Date(Date.now())
  },
  {
  name: "Joe",
  email: "joe@joe.com",
  img: "https://images.pexels.com/photos/415326/pexels-photo-415326.jpeg?h=350&auto=compress&cs=tinysrgb",
  date: new Date(Date.now())
  }
];


db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
