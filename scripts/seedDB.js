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
  date: new Date(Date.now()),
  posts: [{
    0: "ObjectId(59c4cc6f13d5afa89530cedd)",
    1: "ObjectId(59c4cc6f13d5afa89530cedd)"
  }]
  },
  {
  name: "Sam",
  email: "sam@sam.com",
  date: new Date(Date.now()),

  },
  {
  name: "Morgan",
  email: "morgan@morgan.com",
  date: new Date(Date.now())
  },
  {
  name: "Joe",
  email: "joe@joe.com",
  date: new Date(Date.now())
  }
];

const postSeed = [
  {
   userId: "59c4ca4c880b76a869998223",
   comment: "smells like piss",
   postType: "station",
   station: "Powell St."
  },
  {
   userId: "59c4ca4c880b76a869998223",
   comment: "a train is stopped at the platform and the conductor has left to investigate a problem",
   isAlert: true,
   postType: "station",
   station: "Coliseum"

  },
  {
   userId: "59c4ca4c880b76a869998224",
   comment: "police are everywhere",
   postType: "station",
   station: "Lake Merritt"

  },
  {
   userId: "59c4ca4c880b76a869998225",
   comment: "a pigeon shit on my head",
   postType: "station",
   station: "San Leandro"

  },
  {
   userId: "59c4ca4c880b76a869998226",
   comment: "all of the trains come to me",
   postType: "station",
   station: "West Oakland"

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

  db.Post
    .remove({})
    .then(() => db.Post.collection.insertMany(postSeed))
    .then(data => {
      console.log(data.insertedIds.length + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
