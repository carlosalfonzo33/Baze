const db = require("../models");

// Defining methods for the PostsController
module.exports = {
  findAll: function(req, res) {
    db.Post
      .find()
      .populate("userId")
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findDelayPosts: function(req, res) {
    db.Post
      .find({isAlert: true})
      .populate("userId")
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findStationPosts: function(req, res) {
    db.Post
      .find({postType: "Station"})
      .populate("userId")
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findTrainPosts: function(req, res) {
    db.Post
      .find({postType: "Train"})
      .populate("userId")
      .populate("likes")
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Post
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Post
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Post
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updatePostLikes: function(req, res) {
    db.Post
    .findOneAndUpdate({ "_id": req.body.postId }, { $addToSet: { "likes": req.body.userId } }, { new: true })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
};
