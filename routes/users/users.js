const express = require("express");
const router = express.Router();
const db = require("../../database/dbConfig");

const { authenticate, generateToken } = require("../../auth/authenticate");

// Testing API on postman
// router.get("/", (req, res) => {
//   res.send("Users API works.");
// });

// For back-end testing purposes only
router.get("/", (req, res) => {
  db("users")
    .then(users => res.status(200).send(users))
    .catch(err => console.log(err));
});

// For get a user's info, e.g. profile page
router.get("/:id", authenticate, (req, res) => {
  db("users")
    .where("id", "=", req.params.id)
    .then(users => res.status(200).send(users))
    .catch(err => console.log(err));
});

module.exports = router;
