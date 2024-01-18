const express = require("express");
const { createToken } = require("../controllers/smsController");
const router = express.Router();

router.post("/createtoken", createToken);

module.exports = router;
