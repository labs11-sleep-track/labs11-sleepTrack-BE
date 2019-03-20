const express = require("express");
const router = express.Router();
const db = require("../../database/dbConfig");
const bcrypt = require("bcryptjs");

const { authenticate, generateToken } = require("../../auth/authenticate");

router.get("/", (req, res) => {
  res.send("Register API works.");
});

router.post("/", (req, res) => {
  const creds = req.body;
  db("users")
    .insert(creds)
    .then(id => {
      const token = generateToken(creds);
      res.status(201).json({
        id: id[0],
        message: "Registered successfully",
        token
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
