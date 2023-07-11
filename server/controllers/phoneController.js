const {Phone} = require('../models/Phone')
const sequelize = require('../db')
const ApiError = require('../errors/ApiError')
const uuid = require('uuid')
const path = require('path')

class PhoneController {

    async createPhone(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Headers", "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authentication")
        let {phone_num_person, name_person, islike_person} = req.body
        let fileName = ''
        if (req.files) {
            const {photo_person} = req.files
            fileName = uuid.v4()+'.jpg'
            photo_person.mv(path.resolve(__dirname,'..','static',fileName))
        }
        const phone = await Phone.create({phone_num_person, name_person, islike_person, photo_person: fileName})
        return res.json({phone})
    }
    async addPhone(req, res) {
        let data = {
            phone_num_person: req.body.phone_num_person,
            name_person: req.body.name_person,
            islike_person: req.body.islike_person,
        }
        const phone = await Phone.create(data)
        res.status(200).send(phone)
    }
    async getAllPhones(req, res) {
        let phones = await Phone.findAll({attributes: ['id_person', 'phone_num_person', 'name_person', 'islike_person', 'photo_person'], order: [['islike_person', 'DESC'], ['name_person', 'ASC']]})
        return res.json({phones})
    }
    async deletePhone(req, res) {
        let deleted_item = await Phone.destroy({
            where: {
                id_person: req.params.id
            },
          });
          return res.json({deleted_item})
    }
    async getPhoneNumberByName(req, res) {
        let phone_number = await Phone.findOne({where: {name_person: req.params.name_person}})
        res.status(200).send(phone_number)
    }
    async getNameByPhoneNumber(req, res) {
        let name = await Phone.findOne({where: {phone_num_person: req.params.phone_num_person}})
        res.status(200).send(name)
    }
    async likedPhone(req, res) {
        let phone = await Phone.update({
            islike_person: 1 }, {
                where: {
                    id_person: req.params.id,
                    islike_person: 0
                }
            })
        return res.json({phone})
    }
    async unlikedPhone(req, res) {
        let phone = await Phone.update({
            islike_person: 0 }, {
                where: {
                    id_person: req.params.id,
                    islike_person: 1
                }
            })
        return res.json({phone})
    }
    async sortPhones(req, res) {
        ;
    }
}

module.exports = new PhoneController()