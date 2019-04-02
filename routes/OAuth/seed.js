const db = require("../../database/dbConfig");
const faker = require("faker");
const moment = require("moment");

/*
  generate data for 31 days
  for each day user sleeps between 9-11 pm
  wakes up between 6-8 am
*/
async function generateDailyDataSeed(user) {
  for (let i = 1; i <= 31; i++) {
    const sleepTimeHour = faker.random.number({ min: 21, max: 23 });
    const sleepTimeMinutes = faker.random.number({ min: 0, max: 60 });
    const wakeTimeHour = faker.random.number({ min: 6, max: 7 });
    const wakeTimeMinutes = faker.random.number({ min: 0, max: 60 });

    const yesterday = moment()
      .subtract(i, "day")
      .toDate();

    const sleepTime =
      new Date(
        2019,
        yesterday.getMonth(),
        yesterday.getDate(),
        sleepTimeHour,
        sleepTimeMinutes
      ).getTime() / 1000;

    const wakeTime =
      new Date(
        2019,
        yesterday.getMonth(),
        yesterday.getDate() + 1,
        wakeTimeHour,
        wakeTimeMinutes
      ).getTime() / 1000;

    const qos = faker.random.number({ min: 60, max: 100 });

    const nightData = [];
    for (let j = sleepTime; j < wakeTime; j += 600) {
      nightData.push({
        motion: faker.random.number({ min: 1, max: 9 }) + Math.random(),
        timestamp: j
      });
    }

    await db("daily_data").insert({
      sleeptime: sleepTime,
      waketime: wakeTime,
      qos_score: qos,
      user_id: user.id,
      night_data: JSON.stringify(nightData)
    });
  }
}

module.exports = { generateDailyDataSeed };
