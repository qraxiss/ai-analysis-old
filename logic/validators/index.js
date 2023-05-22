const analysis = require('./analysis')
const openai = require('./openai')
const users = require('./user')

const { CastError } = require('../../errors/errors')

const validate = (params, validator) => {
  const { value, error } = validator.validate(params)
  if (error) return { value, error: CastError(error.message) }

  return { value }
}

module.exports = {
  validate,
  analysis,
  openai,
  users
}
