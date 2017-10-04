const db = require("../models");

// Defining methods for the UsersController
module.exports = {

  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .populate({path: 'posts', options: { sort: { date: -1 } } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateUser: function(req, res) {
    db.User
      .findOneAndUpdate({ "_id": req.body.userId }, { $push: { "posts": req.body._id } }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log("update user error", err));
  }

};
