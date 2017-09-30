const router = require("express").Router();
const postRoutes = require("./posts");
const userRoutes = require("./users");
const signupRoutes = require("./signup");
const loginRoutes = require("./login");


// Post routes
router.use("/posts", postRoutes);

router.use("/users", userRoutes);

router.use("/signup", signupRoutes);

router.use("/login", loginRoutes);

module.exports = router;
