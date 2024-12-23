const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

const HF_API_KEY = process.env.HF_ACCESS_TOKEN;
const SYSTEM_PROMPT = `
  You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

app.post('/api/get-recipe', async (req, res) => {
  const { ingredientsArr } = req.body;

  if (!ingredientsArr || ingredientsArr.length === 0) {
    return res.status(400).json({ error: 'Ingredients are required.' });
  }

  const ingredientsString = ingredientsArr.join(", ");
  
  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1',
      {
        inputs: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
        ],
        parameters: { max_tokens: 1024 },
      },
      {
        headers: {
          Authorization: `Bearer ${HF_API_KEY}`,
        },
      }
    );

    const recipe = response.data.choices[0].message.content;
    res.json({ recipe });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Error retrieving recipe.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
