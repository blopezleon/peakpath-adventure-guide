import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import OpenAI from 'openai';

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.post("/generate", async (req, res) => {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [{ role: "user", content: "I want to learn ${skillLevel} within ${timeFrame} by breaking it down into smaller steps. You should return 4 paragraphs where each of these can be categorized into either mini project or important understandings. If it's a mini project, give me the name of the project, followed by a description of the project. If it's an important understanding, you should tell me what it is that I should understand as well as some reasoning as to why I need to know a certain topic.  It should always have a combination of both mini projects or important understandings. Depending on the project or things that you must learn you should give me some things that I'm supposed to learn. Be careful to make sure that the steps are returned in sequential order of when they're learned in order to make sure that the person reading the steps builds on the knowledge of the previous step in order complete the the next one. For context: You're going to be generating responses for a website in which someone who is overwhelmed with knowing where to start leaning  ${skillLevel}. " }],
            max_tokens: 100,
        });

        res.json({ letter: completion.choices[0].message.content.trim() });
    } catch (error) {
        console.error("Error generating", error);
        res.status(500).json({ error: "Failed to generate" });
    }
});

app.post('/submit', (req, res) => {
  const { skillLevel, timeFrame } = req.body;
  console.log(`Received skillLevel: ${skillLevel}, timeFrame: ${timeFrame}`);
  res.send('Data received');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
