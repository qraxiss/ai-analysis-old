const {Router} = require('express')
const controller = require('../controllers/openai')
const requireAccess = require('../middlewares/requireAccess')
const requireAuth = require('../middlewares/requireAuth')

const router = Router()

router.get('/', controller.get)

module.exports = router