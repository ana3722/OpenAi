require('dotenv').config();
const OpenAI = require('openai');
const axios = require('axios');
const openai = new OpenAI({ key: process.env.OPENAI_API_KEY }); // Initialize with your API key

const fs = require('fs'); // Import the 'fs' module

async function main() {
    try {
      const fs = require('fs');
      const extractedText = fs.readFileSync('ocr_extracted_text.txt', 'utf-8');
      
      const relevantKeywords = ["STEM", "education", "students", "science", "technology", "learning", "jobs", "career","date","link", "weekday", "month"];
      const generatedText = extractedText.toLowerCase();
      
      // Split the text into sentences (assuming sentences are separated by periods).
      const sentences = generatedText.split('.');
  
      // Filter relevant sentences.
      const relevantSentences = sentences.filter(sentence => {
        return relevantKeywords.some(keyword => sentence.includes(keyword));
      });
  
      // Join the relevant sentences back into a single string.
      const extractedTextWithRelevantInfo = relevantSentences.join('. ');
  
      if (extractedTextWithRelevantInfo.length > 0) {
        console.log("The text contains relevant information for the STEM education project.");
        console.log("Extracted Text with Relevant Information: ", extractedTextWithRelevantInfo);
      } else {
        console.log("The text does not contain relevant information for the STEM education project.");
      }
    } catch (error) {
      console.error("Error reading the file:", error);
    }
  }
  
  // Example usage:
  main();

//analyzing extracted text for OCR to see if it containts revelant information
// async function main() {
//     try {
//       // Read the text from the file
//       const extractedText = fs.readFileSync('ocr_extracted_text.txt', 'utf-8');
      
//       const relevantKeywords = ["STEM", "education", "students", "science", "technology", "learning","jobs","career"];
//       const generatedText = extractedText.toLowerCase(); // Convert to lowercase for case-insensitive matching
  
//       // Check if the generated text contains relevant keywords.
//       const containsRelevantKeywords = relevantKeywords.some(keyword => generatedText.includes(keyword));
  
//       if (containsRelevantKeywords) {
//         console.log("The text contains relevant information for the STEM education project.");
//         console.log("Generated Text: ", extractedText);
//       } else {
//         console.log("The text does not contain relevant information for the STEM education project.");
//       }
//     } catch (error) {
//       console.error("Error reading the file:", error);
//     }
//   }
  
//   // Example usage:
//   main();


  



