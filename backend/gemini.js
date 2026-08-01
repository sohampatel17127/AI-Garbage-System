require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function analyzeImage(base64Image, mimeType) {

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash"
  });

  const prompt = `
You are an AI Waste Classification System.

Analyze the uploaded image.

Return ONLY one word from this list:

Plastic
Paper
Organic
Metal
Glass

Rules:
- Return exactly one category.
- No explanation.
- No punctuation.
- No extra words.
- If the object is a plastic bottle -> Plastic.
- If it is a glass bottle -> Glass.
- If the image is unclear, return the closest matching category.
`;

  const result = await model.generateContent([
    prompt,
    {
      inlineData: {
        data: base64Image,
        mimeType: mimeType,
      },
    },
  ]);

  let response = result.response.text().trim();

  // Clean response
  response = response.replace(/[^a-zA-Z]/g, "");

  const valid = ["Plastic", "Paper", "Organic", "Metal", "Glass"];

  const match = valid.find(
    (item) => item.toLowerCase() === response.toLowerCase()
  );

  return match || "Unknown";
}

module.exports = analyzeImage;