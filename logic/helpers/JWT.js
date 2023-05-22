const JWT = require('jsonwebtoken')

module.exports.decode = (token) => {
    const body = JWT.verify(token, process.env.JWTSECRET)
    return body
}
