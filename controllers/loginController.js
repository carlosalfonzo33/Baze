const db = require("../models");

module.exports = {

  lookupUser: function(req, res) {
    db.User
      .find({name: req.body.name})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};
