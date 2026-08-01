require("dotenv").config();

const express = require("express");
const cors = require("cors");
const analyzeImage = require("./roboflow");

const app = express();

app.use(cors());
app.use(express.json({ limit: "20mb" }));


// Test API
app.get("/", (req, res) => {
  res.send("AI Garbage Backend Running");
});


// Image Analyze API
app.post("/analyze", async (req, res) => {

  console.log("ANALYZE API CALLED");

  try {

    const { image, mimeType } = req.body;

    console.log("Image Received:", image ? "YES" : "NO");


    if (!image) {
      return res.status(400).json({
        error: "No image received"
      });
    }


    const result = await analyzeImage(
      image,
      mimeType
    );


    console.log("AI RESULT:", result);


    res.json({
      prediction: result
    });


  } catch (error) {

    console.log("ERROR:", error.message);


    res.status(500).json({
      error: error.message
    });

  }

});


// Start Server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server Running on Port ${PORT}`
  );

});