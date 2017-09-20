const router = require("express").Router();
const bookRoutes = require("./posts");

// Post routes
router.use("/posts", bookRoutes);

module.exports = router;
