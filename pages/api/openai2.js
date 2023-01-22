const OpenAI = require('openai-api');
const openai = new OpenAI(process.env.OPENAI_API_KEY);

export default async (req, res) => {
  let prompt = `extracurriculars related to ${req.search}:`;
  const gptResponse = await openai.complete({
    engine: 'davinci',
    prompt: prompt,
    maxTokens: 50,
    temperature: 0,
    topP: 1,
    presencePenalty: 1,
    frequencyPenalty: 0.3,
    bestOf: 1,
    n: 1
});

  res.status(200).json({text: `${gptResponse.data.choices[0].text}`})
}
