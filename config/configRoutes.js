const express = require("express");

const usersRoute = require("../routes/users/users");
const dailyRoute = require("../routes/dailyData/dailyData");
// const storyRoute = require("../routes/story_pools");
// const regRoute = require("../routes/users/register");
// const loginRoute = require("../routes/users/login");

const articleRoute = require("../routes/articles/index");
const stripeRoute = require("../routes/stripe/stripe");

const router = express.Router();

router.use("/users", usersRoute);
router.use("/daily", dailyRoute);
// router.use("/story", storyRouter);
// router.use("/register", regRoute);
// router.use("/login", loginRoute);
router.use("/articles", articleRoute);
router.use("/stripe", stripeRoute);

router.get("/", (req, res) => {
  res.send("API works.");
});

module.exports = router;
