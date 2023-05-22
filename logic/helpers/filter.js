function filter(object, projection){
    const result = {...object}

    for (let i in projection){
        var key = projection[i]
        if (key in result){
            delete result[key]
        }
    }

    return result
}

function rename(o, old_key, new_key){
    if (old_key === new_key) return o

    if (!o[old_key]) return o

    if (old_key !== new_key) {
        const result = {...o}

        result[new_key] = result[old_key]
        delete result[old_key]
        return result
    }
}


module.exports = {filter, rename}