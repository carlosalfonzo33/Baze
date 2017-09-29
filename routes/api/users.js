const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users" - route for creating a new user
router.route("/")
  .post(userController.create);
//Matches with /api/users/update
router.route("/update")
  .post(userController.updateUser);

// Matches with "/api/users/:id"
router.route("/:id")
  .get(userController.findById);

// router.route("/profile/:id")
//   .get(userController.findById)



module.exports = router;
