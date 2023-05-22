const logic = require('../../logic')
const { ahandler } = require('../../errors')


class OpenAIController {
    @ahandler
    static async get(req, res, next) {
        res.json(await logic.openai.analysis(req.body))
    }
}

module.exports = OpenAIController