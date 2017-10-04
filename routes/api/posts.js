const router = require("express").Router();
const postController = require("../../controllers/postController");

// Matches with "/api/posts"
router.route("/")
  .get(postController.findAll)
  .post(postController.create);

router.route("/delay")
  .get(postController.findDelayPosts);

router.route("/station")
  .get(postController.findStationPosts);

router.route("/train")
  .get(postController.findTrainPosts);

router.route("/like")
  .post(postController.updatePostLikes);

// Matches with "/api/posts/:id"
router.route("/:id")
  .get(postController.findById)
  .delete(postController.remove);



module.exports = router;
