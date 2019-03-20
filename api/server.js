const registerRouter = require('../config/configRoutes')

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// server.use("/api", routes);

server.use("/register", registerRouter);
server.use("/api", registerRouter);

server.get("/", async (req, res) => {
  res.status(200).json("Sleepsta");
});

module.exports = server;
