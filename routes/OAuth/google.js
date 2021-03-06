const router = require("express").Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const db = require("../../database/dbConfig");
const { generateToken } = require("../../auth/authenticate");
const { OAuth2Client } = require("google-auth-library");
const { generateDailyDataSeed } = require("./seed");

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
      callbackURL: process.env.GOOGLE_STRATEGY_CALLBACK_URL
    },
    async (accessToken, refreshToken, profile, done) => {
      //passport callback function
      try {
        const user = await db("users")
          .where({ google_id: profile.id })
          .first();

        //checking for user in db
        if (user) {
          done(null, user);
        } else {
          // adding new user to db
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

          // generating seed for new user for last 31 days
          await generateDailyDataSeed(newUser);
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
  const token = generateToken(req.user);
  res.redirect(`${process.env.GOOGLE_REDIRECT_URL}/${token}`);
});

// verify idToken from IOS app
router.post("/tokenSignIn", async (req, res) => {
  const client = new OAuth2Client(process.env.IOS_CLIENT_ID);

  try {
    const ticket = await client.verifyIdToken({
      idToken: req.body.token,
      audience: process.env.IOS_CLIENT_ID // Specify the CLIENT_ID of the app that accesses the backend
    });
    const payload = ticket.getPayload();
    console.log(payload);

    const userid = payload.sub;

    const user = await db("users")
      .where({ google_id: userid })
      .first();

    // checking for user in db
    if (user) {
      const token = generateToken(user);
      //sending back user and token to IOS app
      res.json({ user, token });
    } else {
      // adding new user to db
      const [id] = await db("users").insert(
        {
          google_id: userid,
          f_name: payload.given_name,
          l_name: payload.family_name,
          email: payload.email
        },
        "id"
      );
      const newUser = await db("users")
        .where({ id })
        .first();

      // generating seed for new user for last 31 days
      await generateDailyDataSeed(newUser);

      const token = generateToken(newUser);
      //sending back user and token to IOS app
      res.status(200).json({ user: newUser, token });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "There was an error validating token"
    });
  }
});

module.exports = router;
