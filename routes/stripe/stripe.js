const express = require("express");
const router = express.Router();
const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;
const stripe = require("stripe")(keySecret);
const db = require("../../database/dbConfig");

//This variable defines the charges sent to Stripe. Amount in pennies.

const charge = (token) => {
  return stripe.charges.create({
    amount: 1000,
    currency: 'usd',
    source: token,
    description: 'Purchasing premium'
  })
}

// This route handles Stripe payments for when a user wants to purchase premium tier.

router.post('/', async (req, res, next) => {
  try {
    let data = await charge(req.body.token.id);
    console.log(data);
    res.send("Charged!");
  } catch (e) {
    console.log(e);
    res.status(500);
  }
})

module.exports = router;

