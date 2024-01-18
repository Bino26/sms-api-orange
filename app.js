const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const smsRouter = require("./routes/smsRoute");

//Third-Party Middleware
app.use(express.json());
app.use(cookieParser());

app.use("/api", smsRouter);

module.exports = app;
