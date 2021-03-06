const express = require("express");
const router = express.Router();
const db = require("../../database/dbConfig");

const { authenticate, generateToken } = require("../../auth/authenticate");

// get all sleep data
router.get("/", async (req, res) => {
  try {
    const dailyData = await db("daily_data");
    res.status(200).json(dailyData);
  } catch (error) {
    res.status(500).json({ message: "could not fetch daily data" });
  }
});

// get list of sleep data for specific user
router.get("/user/:id", async (req, res) => {
  try {
    const dailyData = await db("daily_data").where({ user_id: req.params.id });
    res.status(200).json(dailyData);
  } catch (error) {
    res
      .status(500)
      .json({ message: "could not fetch daily data for that user" });
  }
});

// add new sleep data from IOS
router.post("/", async (req, res) => {
  const { user_id, sleeptime, waketime, qos_score } = req.body;
  if (!user_id || !sleeptime || !waketime || !qos_score) {
    res.status(404).json({
      message:
        "Adding daily data requires a user id, sleeptime, waketime and qos_score."
    });
  }
  try {
    // converting sleeptime of a new entry into a date
    const sleeptimeDate = new Date(sleeptime * 1000);

    // getting all sleep data for that specific user
    const userData = await db("daily_data").where({ user_id });

    // finding sleeptime into db that matches the date, month, and year of new sleeptime entry
    const existingSleeptime = userData.find(data => {
      const userDataSleeptime = new Date(data.sleeptime * 1000);
      return (
        userDataSleeptime.getDate() === sleeptimeDate.getDate() &&
        userDataSleeptime.getMonth() === sleeptimeDate.getMonth() &&
        userDataSleeptime.getFullYear() === sleeptimeDate.getFullYear()
      );
    });

    // prevent adding new entry into the db if entry for that day already exist
    if (existingSleeptime) {
      res
        .status(400)
        .json({ message: "Sleep entry for this day already exist." });
    } else {
      // if entry for that day doesn't exist then add new entry into db
      const dailyData = await db("daily_data").insert(req.body);
      res.status(201).json(dailyData);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Daily data information could not be retrieved." });
  }
});

// update sleep data by id
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

// delete sleep data by id
router.delete("/:id", async (req, res) => {
  try {
    const count = await db("daily_data")
      .where({ id: req.params.id })
      .del();
    count > 0
      ? res.status(200).json(count)
      : res
          .status(404)
          .json({ message: "Daily data with that ID could not be found." });
  } catch (err) {
    res.status(500).json({ error: "The daily data could not be deleted." });
  }
});

module.exports = router;
