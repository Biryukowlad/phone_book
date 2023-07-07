const Router = require('express')
const router = new Router()
const routerPhone = require('./phoneRouter')

router.use('/phone', routerPhone)
module.exports = router