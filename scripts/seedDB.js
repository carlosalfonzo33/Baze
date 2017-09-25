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
  posts: [
    'ObjectId("59c5a89587745bb429e6fe66")',
    'ObjectId("59c5a89587745bb429e6fe67")'
  ]
  },
  {
  name: "Sam",
  email: "sam@sam.com",
  date: new Date(Date.now()),
  posts: [
    'ObjectId("59c5a89587745bb429e6fe68")',
    'ObjectId("59c5a89587745bb429e6fe69")',
    'ObjectId("59c5a89587745bb429e6fe6a")'
  ]
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
   userId: 'ObjectId("59c5a89587745bb429e6fe6b")',
   comment: "smells like piss",
   postType: "station",
   station: "Powell St."
  },
  {
   userId: 'ObjectId("59c5a89587745bb429e6fe6b")',
   comment: "a train is stopped at the platform and the conductor has left to investigate a problem",
   isAlert: true,
   postType: "station",
   station: "Coliseum"

  },
  {
   userId: 'ObjectId("59c5a89587745bb429e6fe6c")',
   comment: "police are everywhere",
   postType: "station",
   station: "Lake Merritt"

  },
  {
   userId: 'ObjectId("59c5a89587745bb429e6fe6c")',
   comment: "a pigeon shit on my head",
   postType: "station",
   station: "San Leandro"

  },
  {
   userId: 'ObjectId("59c5a89587745bb429e6fe6c")',
   comment: "all of the trains come to me",
   postType: "station",
   station: "West Oakland"

 },
 {
   comment: "someone pooped in the last train car",
   postType: "train",
   station: "Embarcadero",
   trainLine: "Dublin/Pleasanton"

 },
 {
   comment: "can you believe this lady with her lawn chair set up during rush hour?",
   postType: "train",
   station: "West Oakland",
   trainLine: "Richmond"

 },
 {
   comment: "dance party on the train",
   postType: "train",
   station: "Powell St.",
   trainLine: "Daly City"

 },
 {
   comment: "can you believe this lady with her lawn chair set up during rush hour?",
   postType: "train",
   station: "West Oakland",
   trainLine: "Richmond"

 },
 {
   comment: "dance party on the train",
   postType: "train",
   station: "Powell St.",
   trainLine: "Daly City"

 },
 {
   comment: "can you believe this lady with her lawn chair set up during rush hour?",
   postType: "train",
   station: "West Oakland",
   trainLine: "Richmond"

 },
 {
   comment: "dance party on the train",
   postType: "train",
   station: "Powell St.",
   trainLine: "Daly City"

 },
 {
   comment: "can you believe this lady with her lawn chair set up during rush hour?",
   postType: "train",
   station: "West Oakland",
   trainLine: "Richmond"

 },
 {
   comment: "dance party on the train",
   postType: "train",
   station: "Powell St.",
   trainLine: "Daly City"

 },
 {
   comment: "can you believe this lady with her lawn chair set up during rush hour?",
   postType: "train",
   station: "West Oakland",
   trainLine: "Richmond"

 },
 {
   comment: "dance party on the train",
   postType: "train",
   station: "Powell St.",
   trainLine: "Daly City"

 },
 {
   comment: "can you believe this lady with her lawn chair set up during rush hour?",
   postType: "train",
   station: "West Oakland",
   trainLine: "Richmond"

 },
 {
   comment: "dance party on the train",
   postType: "train",
   station: "Powell St.",
   trainLine: "Daly City"

 },
 {
   comment: "dance party on the train",
   postType: "train",
   station: "Powell St.",
   trainLine: "Daly City"

 },
 {
   comment: "can you believe this lady with her lawn chair set up during rush hour?",
   postType: "train",
   station: "West Oakland",
   trainLine: "Richmond"

 },
 {
   comment: "dance party on the train",
   postType: "train",
   station: "Powell St.",
   trainLine: "Daly City"

 },
 {
   comment: "can you believe this lady with her lawn chair set up during rush hour?",
   postType: "train",
   station: "West Oakland",
   trainLine: "Richmond"

 },
 {
   comment: "dance party on the train",
   postType: "train",
   station: "Powell St.",
   trainLine: "Daly City"

 },
 {
   comment: "can you believe this lady with her lawn chair set up during rush hour?",
   postType: "train",
   station: "West Oakland",
   trainLine: "Richmond"

 },
 {
   comment: "dance party on the train",
   postType: "train",
   station: "Powell St.",
   trainLine: "Daly City"

 },
 {
   comment: "dance party on the train",
   postType: "train",
   station: "Powell St.",
   trainLine: "Daly City"

 },
 {
   comment: "can you believe this lady with her lawn chair set up during rush hour?",
   postType: "train",
   station: "West Oakland",
   trainLine: "Richmond"

 },
 {
   comment: "dance party on the train",
   postType: "train",
   station: "Powell St.",
   trainLine: "Daly City"

 },
 {
   comment: "can you believe this lady with her lawn chair set up during rush hour?",
   postType: "train",
   station: "West Oakland",
   trainLine: "Richmond"

 },
 {
   comment: "dance party on the train",
   postType: "train",
   station: "Powell St.",
   trainLine: "Daly City"

 },
 {
   comment: "can you believe this lady with her lawn chair set up during rush hour?",
   postType: "train",
   station: "West Oakland",
   trainLine: "Richmond"

 },
 {
   comment: "dance party on the train",
   postType: "train",
   station: "Powell St.",
   trainLine: "Daly City"

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
