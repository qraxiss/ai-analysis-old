const DotEnv = require('dotenv') // Environment file
const Mongoose = require('mongoose') // Database

// collections
const { analysis } = require('./models/analysis')

// DotEnv.config({ path: __dirname + '/.env' }) // Read config file

//Connect to the MongoDB
try {
  Mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('DB => Connected to the MongoDB')
  })
} catch (ex) {
  console.log('DB => Could not connect to the MongoDB')
  throw ex
}

module.exports = { analysis, Connection: Mongoose.connection }
