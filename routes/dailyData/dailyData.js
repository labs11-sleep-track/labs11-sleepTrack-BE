const express = require("express");
const router = express.Router();
const db = require("../../database/dbConfig");

router.get("/", async (req, res) => {
  try {
    const dailyData = await db("daily_data");
    res.status(200).json(dailyData);
  } catch (error) {
    res.status(500).json({ message: "could not fetch daily data" });
  }
});

router.post('/', async (req, res) => {
  const { sleeptime, waketime, qos_score } = req.body
  if (!sleeptime || !waketime || !qos_score) {
      res.status(404).json({ message: 'Adding daily data requires a sleeptime, waketime and qos_score.' })
  }
  try {
      const dailyData = await db('daily_data').insert(req.body)
      res.status(201).json(dailyData)
  } catch (error) {
      res.status(500).json({ error: 'Daily data information could not be retrieved.' })
  }
})

module.exports = router;
