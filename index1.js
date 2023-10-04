require('dotenv').config();
const OpenAI = require('openai');
const axios = require('axios');
const openai = new OpenAI({ key: process.env.OPENAI_API_KEY }); // Initialize with your API key

//Function to analyze terms and conditions
async function analyzeTermsAndConditions(websiteUrl) {
    try {
      // Fetch the website's terms and conditions
      const response = await axios.get(websiteUrl);
      const termsAndConditionsText = response.data;
  
      // Define the prompt for OpenAI
      const prompt = `Please analyze the following terms and conditions and determine if scraping or crawling is feasible:\n\n${termsAndConditionsText}`;
  
      // Use OpenAI to generate a response
      const gptResponse = await openai.Completion.create({  // Corrected method name
        engine: "text-davinci-002",
        prompt: prompt,
        max_tokens: 100, // Adjust max_tokens as needed
        n: 1,
        stop: null,
      });
  
      // Get the generated text from OpenAI
      const generatedText = gptResponse.choices[0].text;
  
      // Check if the generated text mentions scraping or crawling
      if (
        generatedText.toLowerCase().includes("scraping") ||
        generatedText.toLowerCase().includes("crawling")
      ) {
        return "Scraping or crawling may be feasible according to the terms and conditions.";
      } else {
        return "Scraping or crawling restrictions are mentioned in the terms and conditions.";
      }
     // Rest of your code for processing the response
    }    
    catch (error) {
        console.error("Error from OpenAI API:", error);
    // Handle the error or return an appropriate message
    }
  }
  
  // Example usage:
  const websiteUrl = 'https://www.nyas.org/about/terms-of-use/';
  analyzeTermsAndConditions(websiteUrl)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });