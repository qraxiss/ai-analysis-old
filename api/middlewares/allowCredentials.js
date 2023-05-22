const errors = require('../../errors/errors')


module.exports = (req, res, next) => {
  //Check for user role
  try {
    res.header('Access-Control-Allow-Credentials', 'true')

    return next()
  } catch (ex) {
    if (ex instanceof errors.ValidationError) {
      req.session.user = undefined
    }

    next(ex)
  }
}
