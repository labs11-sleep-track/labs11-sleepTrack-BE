require('dotenv').config();
const express = require("express");
const router = express.Router();
const db = require("../../database/dbConfig");
const bcrypt = require('bcryptjs');
const helpers = require('../../database/helpers/helpersFunction');

router.post('/', async (req, res) => {
    const creds = req.body;

    if (creds.username) {
        if (creds.password) {
            try {
                let response = await helpers.beginLogin(creds);

                if (!bcrypt.compareSync(creds.password, response.password)) {
                    res.status(401).json({ message: `Invalid username or password.` });
                } else {
                    const token = helpers.generateToken(response);
                    res.status(200).json({ id: response.id, name: response.name, token: token });
                }
            } catch (err) {
                res.status(401).json({ message: `Invalid username or password.` });
            }
        } else {
            res.status(403).json({
                error: `Please include a password.`
            });
        }
    } else {
        res.status(403).json({
            error: `Please include a username.`
        })
    }
});
  
  module.exports = router;