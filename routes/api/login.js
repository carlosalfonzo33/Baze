const router = require("express").Router();
const loginController = require("../../controllers/loginController");

// Matches with "/api/login" - route for logging in
router.route("/")
  .get(postController.findByName)
  .post(postController.create);

module.exports = router;