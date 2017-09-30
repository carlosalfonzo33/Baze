const router = require("express").Router();
const loginController = require("../../controllers/loginController");

// Matches with "/api/login" - route for logging in
router.route("/login")
  .get(loginController.findByName);

module.exports = router;