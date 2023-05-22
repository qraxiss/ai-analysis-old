const { Schema, model } = require('mongoose');
const { softDeletePlugin } = require('soft-delete-plugin-mongoose')

const schema = {
    prompt : {
        type: String,
    },

    key: {
        type: String
    }
    
}

const analysisSchema = new Schema(schema)
analysisSchema.plugin(softDeletePlugin)

const analysis = model('analysis', analysisSchema)

module.exports = {
    analysis
}


// açılma tarihi, son başvuru tarihi, nitelikler, başlık