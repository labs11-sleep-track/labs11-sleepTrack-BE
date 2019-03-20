const express = require("express");
const router = express.Router();
const db = require("../../database/dbConfig");

router.post("/register", (req, res) => {
  const creds = req.body;
  db("users")
    .insert(creds)
    .then(id => {
      res.status(201).json({
        id: id[0],
        message: "Registered successfully"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
