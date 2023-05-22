const errors = require('../../errors/errors')
const users = require('../../logic/models/user')

module.exports = (accessName) => {
  return (req, res, next) => {
    //Check for session and user role
    if (!req?.session?.user || !users.hasAccess(req.session.user, accessName)) return next(errors.ForbiddenError())
    return next()
  }
}
