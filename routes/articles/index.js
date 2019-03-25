const express = require("express");
const router = express.Router();
const db = require("../../database/dbConfig");

router.get("/", (req, res) => {
    db("articles")
      .then(users => res.status(200).send(users))
      .catch(err => console.log(err));
  });

module.exports = router;