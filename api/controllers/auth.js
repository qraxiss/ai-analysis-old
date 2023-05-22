const users = require('../../logic/models/user')
const errors = require('../../errors/errors')
const logic = require('../../logic')
const { ahandler, handler } = require('../../errors')


class Auth {
    @ahandler
    static async login(req, res, next) {
        //Delete current session
        if (req.session?.user) req.session.user = undefined

        //Check for user
        let user = await users.getUserFromToken(req.body.token)

        req.session.user = user

        return res.json({ result: true })

    }

    @ahandler
    static async logout(req, res, next) {
        if (!req?.session?.user) return next(errors.SessionError("No session found"))

        req.session.user = undefined
        req.session.destroy()

        return res.json({ result: true })

    }

    @ahandler
    static async check(req, res, next) {
        if (!req?.session?.user) return res.json({ result: false })
        return res.json({ result: true })

    }
}

module.exports = Auth