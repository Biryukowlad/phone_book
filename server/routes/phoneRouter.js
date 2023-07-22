const Router = require('express')
const router = new Router()
const phoneController = require('../controllers/phoneController')

router.post('/create_phone', phoneController.createPhone)
router.get('/get_all_phones', phoneController.getAllPhones)
router.delete('/delete_phone/:id', phoneController.deletePhone)
router.put('/liked_phone/:id', phoneController.likedPhone)
router.put('/unliked_phone/:id', phoneController.unlikedPhone)
module.exports = router