// const db = require("../models");
//
// // Defining methods for the UsersController
// module.exports = {
//
//   findById: function(req, res) {
//     db.User
//       .findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   create: function(req, res) {
//     db.User
//       .create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   findOneAndUpdate: function(req, res) {
//     db.User
//       .findOneAndUpdate({ _id: req.params.id }, { $push: { "posts": doc._id } }, { new: true })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
//
// };
