const router = require("express").Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const db = require("../../database/dbConfig");

router.use(passport.initialize());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db("users")
      .where("id", "=", id)
      .first();
    done(null, user);
  } catch (error) {
    console.log(error);
    done(error);
  }
});

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
      try {
        const user = await db("users")
          .where({ google_id: profile.id })
          .first();

        if (user) {
          console.log("found user", user);
          done(null, user);
        } else {
          const [id] = await db("users").insert(
            {
              google_id: profile.id,
              f_name: profile._json.given_name,
              l_name: profile._json.family_name,
              email: profile._json.email
            },
            "id"
          );
          const newUser = await db("users")
            .where({ id })
            .first();
          console.log("new user created", newUser);
          done(null, newUser);
        }
      } catch (error) {
        console.log(error);
        done(error);
      }
    }
  )
);

// initiate google Auth
router.get(
  "/",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get("/redirect", passport.authenticate("google"), (req, res) => {
  // res.send(req.user);
  res.redirect(process.env.GOOGLE_REDIRECT_URL);
});

module.exports = router;
