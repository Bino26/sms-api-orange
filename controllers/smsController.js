const axios = require("axios");

//create  token
const createToken = async (req, res) => {
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

    return response.data.access_token;
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//Send SMS

const sendSMS = async (req, res) => {
  try {
    const { recipient, message } = req.body;
    const token = await createToken();

    const devNumber = process.env.DEV_NUMBER;

    const response = axios.post(
      `https://api.orange.com/smsmessaging/v1/outbound/tel%3A%2B${devNumber}/requests`,
      {
        outboundSMSMessageRequest: {
          address: `tel:+225${recipient}`,
          senderAddress: `tel:+${devNumber}`,
          outboundSMSTextMessage: {
            message: message,
          },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }
    );

    res.status(200).json({
      message: `SMS sent successfuly to ${recipient}`,
      data: response.data,
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { createToken, sendSMS };
