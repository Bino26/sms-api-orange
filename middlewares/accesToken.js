const axios = require("axios");

// Generate access token middleware
const accessToken = async (req, res, next) => {
  try {
    const response = await axios.post(
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
    );

    const token = response.data.access_token;
    console.log(token);

    req.accessToken = token;

    next();
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = accessToken;
