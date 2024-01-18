const axios = require("axios");

const createToken = async (req, res) => {
  await axios
    .post(
      "https://api.orange.com/oauth/v3/token",
      {
        grant_type: "client_credentials",
      },
      {
        headers: {
          Authorization: process.env.AUTH_HEADER,
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((res) => {
      return res.data.access_token;
    });
  res.status(200).json(" Success");
};

module.exports = { createToken };
