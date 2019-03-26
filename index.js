require("dotenv").config();

const server = require("./api/server");

const port = process.env.PORT || 4000;

if (!module.parent) {
  server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
}

module.exports = server;
