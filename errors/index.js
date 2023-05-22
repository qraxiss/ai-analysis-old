function toJson(err) {
    if (process.env.NODE_ENV == 'debug') {
        var info = err
    } else if (process.env.NODE_ENV == 'production') {
        var info = {}
    }

    if (err.constructor.name !== 'Error') {
        return {
            error: {
                message: err.message,
                info: err
            }
        }
    }

    return {
        message: err.message,
        type: err.name,
        
    }
}

function ahandler(target, name, descriptor) {
    const originalFunction = descriptor.value;
    descriptor.value = async function (req, res, next) {
        try {
            await originalFunction.call(this, req, res, next);
        } catch (error) {
            next(error);
        }
    };
    return descriptor;
}

function handler(target, name, descriptor) {
    const originalFunction = descriptor.value;
    descriptor.value = function (req, res, next) {
        try {
            originalFunction.call(this, req, res, next);
        } catch (error) {
            next(error);
        }
    };
    return descriptor;
}


const status500 = (err, req, res, next) => {
    if (err.status === undefined){
        console.log(err)
    }

    res.status(err.status || 500);
    res.json(toJson(err));
}

module.exports = { handler, ahandler, toJson, status500 }