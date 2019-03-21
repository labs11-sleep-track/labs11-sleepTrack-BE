const express = require("express");
const router = express.Router();
const db = require("../../database/dbConfig");
const bcrypt = require("bcryptjs");
const Joi = require("joi");
const { loginSchema } = require("../../schemas/schemas");
const { generateToken } = require("../../auth/authenticate");

router.post("/", async (req, res) => {
  try {
    const { value, error } = Joi.validate(req.body, loginSchema);

    if (error != null) {
      res.status(400).json(error.details[0]);
    } else {
      const user = await db("users")
        .where({ email: value.email })
        .first();
      if (user && bcrypt.compareSync(value.password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          user,
          token
        });
      } else {
        res.status(401).json({ message: "You shall not pass!" });
      }
    }
  } catch (error) {
    res.status(500).json({
      message: "There was an error while logging in."
    });
  }
});

module.exports = router;
