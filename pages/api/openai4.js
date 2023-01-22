const OpenAI = require('openai-api');
const openai = new OpenAI(process.env.OPENAI_API_KEY);

export default async (req, res) => {
    let prompt = `List 10 What my job can be? ${req.search}:`;
    const gptResponse = await openai.complete({
      engine: 'text-davinci-003',
      prompt: prompt,
      maxTokens: 200,
      temperature: 0.5,
      topP: 1,
      presencePenalty: 0.5,
      frequencyPenalty: 0.52,
      bestOf: 1,
      n: 1
  });

  res.status(200).json({text: `${gptResponse.data.choices[0].text}`})
}
