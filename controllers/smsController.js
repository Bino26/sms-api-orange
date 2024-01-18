const axios = require("axios");

//Send SMS

const sendSMS = async (req, res) => {
  try {
    const { recipient, message } = req.body;
    const access_token = req.accessToken;

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
          Authorization: `Bearer ${access_token}`,
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

//Check your sold SMS and the expiry date

const soldeSMS = async (req, res) => {
  try {
    const access_token = req.accessToken;
    const response = await axios.get(
      "https://api.orange.com/sms/admin/v1/contracts",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          //   Accept: "application/json",
        },
      }
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { sendSMS, soldeSMS };
