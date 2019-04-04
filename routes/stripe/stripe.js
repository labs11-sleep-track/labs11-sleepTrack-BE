const express = require("express");
const router = express.Router();
const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;
const stripe = require("stripe")(keySecret);
const db = require("../../database/dbConfig");


const charge = (token) => {
  return stripe.charges.create({
    amount: 1000,
    currency: 'usd',
    source: token,
    description: 'Purchasing premium'
  })
}

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

