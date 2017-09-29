const router = require("express").Router();
const postController = require("../../controllers/postController");

// Matches with "/api/post"
router.route("/")
  .get(postController.findAll)
  .post(postController.create);

router.route("/delay")
  .get(postController.findDelayPosts);

router.route("/station")
  .get(postController.findStationPosts);

router.route("/train")
  .get(postController.findTrainPosts);

// Matches with "/api/post/:id"
router.route("/:id")
  .get(postController.findById)
  .delete(postController.remove);



module.exports = router;
