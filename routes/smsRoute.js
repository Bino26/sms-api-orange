const express = require("express");
const { createToken, sendSMS } = require("../controllers/smsController");
const router = express.Router();

router.post("/createtoken", createToken);
router.post("/sendsms", sendSMS);

module.exports = router;
