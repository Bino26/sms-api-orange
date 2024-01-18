const express = require("express");
const app = express();

//Third-Party Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World",
  });
});

module.exports = app;
