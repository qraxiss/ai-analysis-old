const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const create = Joi.object({
    prompt: Joi.string().required(),
    key: Joi.string().required()
})

const update = Joi.object({
    prompt: Joi.string(),
    key: Joi.string().required()
})

const get = Joi.object({
    key: Joi.string()
})

const remove = Joi.object({
    key: Joi.string().required()
})

module.exports = {
    create,
    update,
    get,
    remove
}

