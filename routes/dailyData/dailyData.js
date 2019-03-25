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

module.exports = router;
