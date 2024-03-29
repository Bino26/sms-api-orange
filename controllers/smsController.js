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
      success: true,
      message: `SMS sent successfuly to ${recipient}`,
      data: response.data,
    });
  } catch (error) {
    if (response.status === 401) {
      res.status(401).json({
        code: 42,
        message: "Expired credentials",
        description:
          "The requested service needs credentials, and the ones provided were out-of-date.",
      });
    } else {
      res.status(400).json({
        message: "Bad Request",
        description: error.message,
      });
    }
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
        },
      }
    );

    res.status(200).json({
      success: true,
      SMS_Solde: `${response.data[0].availableUnits} SMS `,
      Expiration_Date: response.data[0].expirationDate,
    });
  } catch (error) {
    if (response.status == 401) {
      res.status(401).json({
        code: 42,
        message: "Expired credentials",
        description:
          "The requested service needs credentials, and the ones provided were out-of-date.",
      });
    } else {
      res.status(400).json({
        message: "Bad Request",
        description: error.message,
      });
    }
  }
};

module.exports = { sendSMS, soldeSMS };
