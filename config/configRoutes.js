const express = require("express");

const router = express.Router();

//Route for pulling users
const usersRoute = require("../routes/users/users");
router.use("/users", usersRoute);

//Route for daily sleep data
const dailyRoute = require("../routes/dailyData/dailyData");
router.use("/daily", dailyRoute);

//auth routes
// const regRoute = require("../routes/users/register");
// const loginRoute = require("../routes/users/login");
// router.use("/register", regRoute);
// router.use("/login", loginRoute);

//routes for articles on dashboard and etc
const articleRoute = require("../routes/articles/index");
router.use("/articles", articleRoute);

//routes for Stripe
const stripeRoute = require("../routes/stripe/stripe");
router.use("/stripe", stripeRoute);

//Test /api route
router.get("/", (req, res) => {
  res.send("API works.");
});

module.exports = router;
