const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

module.exports.user = Joi.object({
  id: Joi.objectId().required(),
  name: Joi.string().required(),
  surname: Joi.string().required(),
  email: Joi.string().required(),
  accesses: Joi.array().items(Joi.string()).required()
})