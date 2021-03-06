const express = require("express");
const router = express.Router();
const db = require("../../database/dbConfig");

const { authenticate } = require("../../auth/authenticate");

// For back-end testing purposes only
router.get("/", (req, res) => {
  db("users")
    .then(users => res.status(200).send(users))
    .catch(err => console.log(err));
});

// getting current user by id
router.get("/me", authenticate, async (req, res) => {
  try {
    const user = await db("users")
      .where({ id: req.decoded.subject })
      .first();

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// For get a user's info, e.g. profile page
router.get("/:id", authenticate, (req, res) => {
  db("users")
    .where("id", "=", req.params.id)
    .then(users => res.status(200).send(users))
    .catch(err => console.log(err));
});

// For updating user's info
// Requires headers - token, id; and req.body
router.put("/:id", authenticate, async (req, res) => {
  try {
    const count = await db("users")
      .where({ id: req.params.id })
      .update(req.body);

    if (count > 0) {
      const user = await db("users")
        .where({ id: req.params.id })
        .first();

      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "user not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
