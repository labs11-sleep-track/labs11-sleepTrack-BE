const express = require("express");
const router = express.Router();
const db = require("../../database/dbConfig");

router.get("/", (req, res) => {
    db("articles")
      .then(users => res.status(200).send(users))
      .catch(err => console.log(err));
  });

router.get("/:id", (req, res) => {
    db("articles")
      .where("id", "=", req.params.id)
      .then(article => res.status(200).send(article))
      .catch(err => console.log(err));
  });

module.exports = router;