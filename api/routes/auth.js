const requireAuth = require('../middlewares/requireAuth')
const { Router } = require('express')
const allowCredentials = require('../middlewares/allowCredentials')

//Require controllers
const controllers = require('../controllers/auth')

//Initilaziation
const router = Router()

//Routes
router.get('/check', allowCredentials, controllers.check)
router.post('/login', allowCredentials, controllers.login)
router.options('/login', allowCredentials, (req, res) => {
  res.end()
})
router.get('/logout', allowCredentials, requireAuth, controllers.logout)

module.exports = router
