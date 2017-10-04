const router = require("express").Router();
const signupController = require("../../controllers/imageController");

router.route("/")
  .post(signupController.uploadImg);

module.exports = router;
