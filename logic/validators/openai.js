const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const analysis = Joi.object({
  report: Joi.string().required(),
  key: Joi.string().required(),
  json_parse: Joi.boolean().default(false),
  tempature: Joi.number().default(0.5),
});

module.exports = {
  analysis,
};
