const JWT = require('../helpers/JWT')
const validators = require('../validators')

module.exports.getUserFromToken = (token) => {
  const result = JWT.decode(token)
  if (result.error) return { error: result.error }

  let { iat, exp, ...user } = result
  const { value, error } = validators.validate(user, validators.users.user)
  if (error) return { error }

  return value
}

module.exports.hasAccess = (accessName, user) => {
  const { value, error } = validators.validate(user, validators.users.user)
  if (error) return { error }

  if (value.accesses.includes(accessName)) return true
  return false
}
