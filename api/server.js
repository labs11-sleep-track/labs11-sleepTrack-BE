const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

const routes = require("../config/configRoutes");
const googleRoute = require("../routes/OAuth/google");

const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;


server.use(helmet());
server.use(cors());
server.use(express.json());

server.use(require("body-parser").urlencoded({ extended: false }));

server.use("/api", routes);
server.use("/auth/google", googleRoute);

server.get("/", async (req, res) => {
  res.status(200).json("Sleepsta");
});

module.exports = server;
