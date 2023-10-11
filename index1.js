import * as fs from "fs";
import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: "",
});

async function analyzeORCImageOutput(fileName) {
  try {
    const extractedText = fs.readFileSync(fileName, "utf-8");

    const prompt =
      "Please analyze the following text and get and organize relevant information: " +
      extractedText;

    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    const generatedText = chatCompletion.choices[0].message;
    return generatedText.content;
  } catch (error) {
    console.error("Error from OpenAI API:", error);
  }
}

analyzeORCImageOutput("ocr_extracted_text.txt")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
