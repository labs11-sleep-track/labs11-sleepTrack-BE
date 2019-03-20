const express = require("express");

// const usersRouter = require("../routes/users");
// const dailyRouter = require("../routes/daily_data");
// const storyRouter = require("../routes/story_pools");

const router = express.Router();

// router.use("/users", usersRouter);
// router.use("/daily", dailyRouter);
// router.use("/story", storyRouter);

router.get("/", (req, res) => {
  res.send("API works.");
});

module.exports = router;
