const express = require("express");
const router = express.Router();
const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;
const stripe = require("stripe")(keySecret);
const db = require("../../database/dbConfig");

router.get("/", (req, res) =>
  res.render("index.pug", {keyPublishable}));

router.post("/charge", (req, res) => {
    let amount = 1000;

  stripe.customers.create({
     email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer =>
    stripe.charges.create({
      amount,
      description: "Premium Purchased",
         currency: "usd",
         customer: customer.id
    }))
  .then(charge => res.render("charge.pug"));
});

module.exports = router;