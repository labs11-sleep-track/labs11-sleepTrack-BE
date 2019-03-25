const express = require("express");

const usersRouter = require("../routes/users/users");
const dailyRouter = require("../routes/dailyData/dailyData");
// const storyRouter = require("../routes/story_pools");
const regRouter = require("../routes/users/register");
const loginRouter = require("../routes/users/login");

const router = express.Router();

router.use("/users", usersRouter);
router.use("/daily", dailyRouter);
// router.use("/story", storyRouter);
router.use("/register", regRouter);
router.use("/login", loginRouter);

router.get("/", (req, res) => {
  res.send("API works.");
});

module.exports = router;
