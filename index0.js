require('dotenv').config();
const OpenAI = require('openai');
const axios = require('axios');
const openai = new OpenAI({ key: process.env.OPENAI_API_KEY }); // Initialize with your API key

//Asking the AI for their name
async function main(){
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'user',
                content: 'Hello what is your name?' 
            },
        ],
       
    });

    console.log(response.choices[0].message.content)
        // const generatedText = response.choices[0].text;
}
main()