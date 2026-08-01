require("dotenv").config();

const axios = require("axios");

async function analyzeImage(base64Image) {

  try {

    const response = await axios({

      method: "POST",

      url: "https://serverless.roboflow.com/garbage-otyzz/2",

      params: {

        api_key: process.env.ROBOFLOW_API_KEY

      },

      data: base64Image,

      headers: {

        "Content-Type": "application/x-www-form-urlencoded"

      }

    });


    const data = response.data;

    console.log("ROBOFLOW RESPONSE:", data);


    if (!data.predictions || data.predictions.length === 0) {

      return "Unknown";

    }


    return data.predictions[0].class;

  }

  catch (error) {

    console.log(
      "ROBOFLOW ERROR:",
      error.response?.data || error.message
    );

    return "Connection Failed";

  }

}

module.exports = analyzeImage;