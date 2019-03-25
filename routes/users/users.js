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

// For updating user's info
// Requires headers - token, id; and req.body
router.put("/", authenticate, async (req, res) => {
  try {
    let changes = req.body;

    for (x in changes) {
      await db("users")
        .where("id", "=", changes.id)
        .update(`${x}`, `${changes[x]}`)
        .then(res => {
          res.status(200).json({
            message: "Profile successfully updated."
          });
        })
        .catch(err => {
          res.status(401).json({
            message: "Unable to update profile."
          });
        });
    }
  } catch {
    res.status(401).json({
      message: "Unauthorized access."
    });
  }
});

module.exports = router;
