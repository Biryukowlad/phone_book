const Router = require('express')
const router = new Router()
const phoneController = require('../controllers/phoneController')

router.post('/create_phone', phoneController.createPhone)
router.post('/add_phone', phoneController.addPhone)
router.get('/get_all_phones', phoneController.getAllPhones)
router.delete('/delete_phone/:id', phoneController.deletePhone)
router.post('/get_phoneNumber_by_name', phoneController.getPhoneNumberByName)
router.post('/get_name_byPhoneNumber', phoneController.getNameByPhoneNumber)
router.put('/liked_phone/:id', phoneController.likedPhone)
router.put('/unliked_phone/:id', phoneController.unlikedPhone)
router.post('/sort_phones', phoneController.sortPhones)
module.exports = router