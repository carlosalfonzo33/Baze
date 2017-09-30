const db = require("../models");

module.exports = {

    // findByName: function(req, res) {
    //     db.User
    //       .find({name: req.body.name, password: req.body.password})
    //       .then(dbModel => res.json(dbModel))
    //       .catch(err => res.status(422).json(err));
    // },
    create: function(req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

};
