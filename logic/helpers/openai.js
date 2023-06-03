const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI,
});
const openai = new OpenAIApi(configuration);

async function getAiAnswer(messages, tempature) {
  try {
    var completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: tempature,
    });
  } catch (ex) {
    throw new Error(ex.response.data.error.message);
  }

  const result = completion.data.choices[0].message;

  return result;
}

module.exports = getAiAnswer;
