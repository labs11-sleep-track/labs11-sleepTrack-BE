const express = require("express");
const router = express.Router();
const db = require("../../database/dbConfig");
const bcrypt = require("bcryptjs");
const Joi = require("joi");
const { registerSchema } = require("../../schemas/schemas");
const { generateToken } = require("../../auth/authenticate");

router.post("/", async (req, res) => {
  try {
    const { value, error } = Joi.validate(req.body, registerSchema);

    if (error != null) {
      res.status(400).json(error.details[0]);
    } else {
      const hash = await bcrypt.hashSync(value.password, 14);

      const [id] = await db("users").insert({ ...value, password: hash });
      const user = await db("users")
        .where({ id })
        .first();

      const token = generateToken(user);
      res.status(201).json({ user, message: "Registered successfully", token });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "There was an error while registering."
    });
  }
});

module.exports = router;
