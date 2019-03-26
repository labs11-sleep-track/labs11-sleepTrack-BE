const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

const routes = require("../config/configRoutes");
const googleRoute = require("../routes/auth/google");

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api", routes);
server.use("/auth/google", googleRoute);

server.get("/", async (req, res) => {
  res.status(200).json("Sleepsta");
});

module.exports = server;
