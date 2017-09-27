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
  date: new Date(Date.now())
  },
  {
  name: "Sam",
  email: "sam@sam.com",
  date: new Date(Date.now())
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
