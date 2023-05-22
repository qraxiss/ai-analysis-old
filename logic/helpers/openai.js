const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI,
});
const openai = new OpenAIApi(configuration);

async function getAiAnswer(messages) {
    try {
        var completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: messages,
            temperature: 0
        });
    } catch (ex) {
        throw new Error(ex.response.data.error.message)
    }

    return [completion.data.choices[0].message]
}

module.exports = getAiAnswer