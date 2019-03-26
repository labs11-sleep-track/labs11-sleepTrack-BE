const express = require("express");

const loginRoute = require("../routes/auth/login");
const regRoute = require("../routes/auth/register");
const usersRoute = require("../routes/users/users");
const dailyRoute = require("../routes/dailyData/dailyData");
// const storyRoute = require("../routes/story_pools");
const articleRoute = require("../routes/articles/index");

const router = express.Router();

router.use("/login", loginRoute);
router.use("/register", regRoute);
router.use("/users", usersRoute);
router.use("/daily", dailyRoute);
// router.use("/story", storyRoute);
router.use("/articles", articleRoute);

module.exports = router;
