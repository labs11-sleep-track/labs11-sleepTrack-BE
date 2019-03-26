const router = require("express").Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      // options for google strategy
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/google/redirect"
    },
    async (accessToken, refreshToken, profile, done) => {
      //passport callback function
      console.log(profile._json.email);
      console.log(profile._json.given_name);
      console.log(profile._json.family_name);
    }
  )
);

// auth with google+
router.get(
  "/",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get("/redirect", passport.authenticate("google"), (req, res) => {
  // res.send(req.user);
  res.redirect("/dashboard");
});

module.exports = router;
