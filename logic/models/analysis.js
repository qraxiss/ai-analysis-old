const database = require('../../database')
const validators = require('../validators')

const {rename, filter} = require('../helpers/filter')

const { NotFoundError, DatabaseError } = require('../../errors/errors')


async function get(params){
    const { value, error } = validators.validate(params, validators.analysis.get)
    if (error) throw error
    
    var result = await database.analysis.findOne(value,
        {__v: 0, isDeleted: 0,deletedAt: 0, _id: 0}
    )
    
    return result._doc
}

async function getAll(params){
    const { value, error } = validators.validate(params, validators.analysis.get)
    if (error) throw error

    var result = await database.analysis.find(value,
        {__v: 0, isDeleted: 0,deletedAt: 0, _id: 0}
    )

    return result.map(item => item._doc)
}



async function create(params){
    const { value, error } = validators.validate(params, validators.analysis.create)
    if (error) throw error

    var result = await database.analysis.create(value)

    // edit result
    result = filter(result._doc, ["__v", "isDeleted", "deletedAt"])

    if (result === null) throw new DatabaseError("analysis not created")

    return { result : true }
}


async function update(params){
    const { value, error } = validators.validate(params, validators.analysis.update)
    if (error) throw error

    const query = {key: value.key}
    var params = filter(value, ["key"])

    const result = await database.analysis.updateOne(query, params)

    if (result.matchedCount === 0) {
        throw new NotFoundError("analysis not found")
    }

    if (result.modifiedCount === 0) {
        throw new DatabaseError("everything is up to date")
    }

    return {result : true}
}


async function remove(params)  {
    const { value, error } = validators.validate(params, validators.analysis.remove)
    if (error) throw error

    const result = await database.analysis.deleteOne(value)

    if (result.deletedCount === 0) {
        throw new NotFoundError("analysis not found")
    }

    return {result : true}
}


module.exports = {
    get,
    getAll,
    create,
    update,
    remove
}