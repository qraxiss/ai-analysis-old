const { ForbiddenError, ValidationError } = require('../../errors/errors')
const users = require('../../logic/models/user')

module.exports = (req, res, next) => {
  //Check for user role
  try {
    if (!req?.session?.user) return next(ForbiddenError("No session found"))

    return next()
  } catch (ex) {
    if (ex instanceof ValidationError) {
      req.session.user = undefined
    }

    next(ex) /* Ne yapılacaksa */
  }
}
