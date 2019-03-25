const express = require("express");
const router = express.Router();
const db = require("../../database/dbConfig");

const { authenticate, generateToken } = require("../../auth/authenticate");

router.get("/", async (req, res) => {
  try {
    const dailyData = await db("daily_data");
    res.status(200).json(dailyData);
  } catch (error) {
    res.status(500).json({ message: "could not fetch daily data" });
  }
});

router.post('/', async (req, res) => {
  const { user_id, sleeptime, waketime, qos_score } = req.body
  if (!user_id || !sleeptime || !waketime || !qos_score) {
      res.status(404).json({ message: 'Adding daily data requires a user id, sleeptime, waketime and qos_score.' })
  }
  try {
      const dailyData = await db('daily_data').insert(req.body)
      res.status(201).json(dailyData)
  } catch (error) {
      res.status(500).json({ error: 'Daily data information could not be retrieved.' })
  }
})

router.put("/:id", async (req, res) => {
  try {
    const count = await db("daily_data")
      .where({ id: req.params.id })
      .update(req.body);

    if (count > 0) {
      const entry = await db("daily_data")
        .where({ id: req.params.id })
        .first();

      res.status(200).json(entry);
    } else {
      res.status(404).json({ err: "entry not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
