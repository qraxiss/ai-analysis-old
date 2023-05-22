const analysis = require('./models/analysis')
const openai = require('./models/openai')
const { Connection } = require('../database')


module.exports = { analysis, openai, MongoConnection: Connection }
