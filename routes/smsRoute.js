const express = require("express");
const { sendSMS, soldeSMS } = require("../controllers/smsController");
const router = express.Router();
const accessToken = require("../middlewares/accesToken");

router.post("/sendsms", accessToken, sendSMS);
router.get("/soldesms", accessToken, soldeSMS);

module.exports = router;
