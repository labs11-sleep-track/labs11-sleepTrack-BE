const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

const routes = require("../config/configRoutes");

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api", routes);

server.get("/", (req, res) => {
  res.status(200).json({
    message: "Sleepsta"
  });
});

module.exports = server;
