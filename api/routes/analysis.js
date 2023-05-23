const {Router} = require('express')
const controller = require('../controllers/analysis')
const requireAccess = require('../middlewares/requireAccess')
const requireAuth = require('../middlewares/requireAuth')

const router = Router()

router.post('/', controller.create)
router.patch('/', controller.update)
router.delete('/', controller.remove)

router.get('/', controller.get)

router.get('/all', controller.getAll)

module.exports = router
