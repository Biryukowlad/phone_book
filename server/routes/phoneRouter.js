const Router = require('express')
const router = new Router()
const phoneController = require('../controllers/phoneController')

router.post('/create_phone', phoneController.createPhone)
router.post('/add_phone', phoneController.addPhone)
router.post('/delete_phone', phoneController.deletePhone)
router.post('/get_phoneNumber_by_name', phoneController.getPhoneNumberByName)
router.post('/get_name_byPhoneNumber', phoneController.getNameByPhoneNumber)
router.put('/liked_phone', phoneController.likedPhone)
router.post('/sort_phones', phoneController.sortPhones)
module.exports = router