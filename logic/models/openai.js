const database = require("../../database");
const validators = require("../validators");

const { rename, filter } = require("../helpers/filter");

const logic = require("./analysis");
const getAiAnswer = require("../helpers/openai");

async function analysis(params) {
  const { value, error } = validators.validate(
    params,
    validators.openai.analysis
  );
  if (error) throw error;

  const prompt = await logic.get({ key: value.key });

  const result = await getAiAnswer(
    [
      {
        role: "system",
        content: prompt.prompt,
      },
      {
        role: "user",
        content: value.report,
      },
    ],
    value.tempature
  );

  if (value.json_parse) {
    result.content = JSON.parse(result.content);
  }

  return result;
}

module.exports = { analysis };
