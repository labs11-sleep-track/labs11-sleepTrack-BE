require('dotenv').config()

const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

// GET
server.get('/', (req, res) => {
    res.send("It's alive!")
  })

const port = process.env.PORT || 4000

if (!module.parent) {
  server.listen(port, () => console.log(`\n** Running on port ${port} **\n`))
}

module.exports = server


// ******** Depending on server.js file: ********

// const server = require('./api/server'); // Not sure file structure here

// const port = process.env.PORT || 4000;
// server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));



