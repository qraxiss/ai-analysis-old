const logic = require('../../logic')
const { ahandler } = require('../../errors')


class Analysis {
    @ahandler
    static async create(req, res, next) {
        res.json(await logic.analysis.create(req.body))
    }

    @ahandler
    static async get(req, res, next) {
        res.json(await logic.analysis.get(req.body))
    }

    @ahandler
    static async update(req, res, next) {
        res.json(await logic.analysis.update(req.body))
    }

    @ahandler
    static async remove(req, res, next) {
        res.json(await logic.analysis.remove(req.body))
    }

    @ahandler
    static async getAll(req, res, next) {
        res.json(await logic.analysis.getAll(req.body))
    }
}

module.exports = Analysis