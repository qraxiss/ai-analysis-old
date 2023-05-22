class BaseError extends Error {
    constructor(status, message, detail, name) {
        super(message)
        this.message = message
        this.status = status
        this.detail = detail
        this.name = name
    }
}

module.exports.BadRequestError = (detail) => {
    return new BaseError(400, 'Bad Request', detail, 'Bad Request')
}

module.exports.FileExtentionError = (detail) => {
    return new BaseError(400, 'This file extention is not valid, please try again with something else.', detail, 'File Extention Error')
}

module.exports.CastError = (detail) => {
    return new BaseError(400, 'Paramaters are not valid, please try again with something else.', detail, 'Cast Error')
}

module.exports.SessionError = (detail) => {
    return new BaseError(400, "We can't find your session, please be sure everything is okay.", detail, 'Session Error')
}

module.exports.ForbiddenError = (detail) => {
    return new BaseError(403, 'You cant access here.', detail, 'Forbidden Error')
}

module.exports.ValidationError = (detail) => {
    return new BaseError(400, 'We cant validate your data, please be sure everything is okay.', detail, 'Validation Error')
}

module.exports.NotFoundError = (detail) => {
    return new BaseError(404, 'We cant find something, please be sure everythings is okay.', detail, 'Not Found Error')
}

module.exports.TokenInvalidError = (detail) => {
    return new BaseError(404, 'We cant decode your token, are you trying to hack us :D ? Dont push it so much.', detail, 'Token Invalid Error')
}

module.exports.TokenExpiredError = (detail) => {
    return new BaseError(404, 'Your token is expired, please login again.', detail, 'Token Expired Error')
}

module.exports.ForbiddenError = (detail) => {
    return new BaseError(403, 'You cant access here.', detail, 'Forbidden Error')
}

module.exports.FileCorruptedError = (detail) => {
    return new BaseError(400, 'File is corrupted or not available for use, please try with something else.', detail, 'File Corrupted Error')
}

module.exports.FileNotFoundError = (detail) => {
    return new BaseError(400, "File is doesn't exist or not available for use, please try later.", detail, 'File Not Found Error')
}

module.exports.DatabaseError = (detail) => {
    return new BaseError(400, 'Something went wrong with database, please try later.', detail, 'Database Error')
}