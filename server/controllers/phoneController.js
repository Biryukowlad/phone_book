const {Phone} = require('../models/Phone')
const sequelize = require('../db')
const ApiError = require('../errors/ApiError')

class PhoneController {

    async createPhone(req, res, next) {
        const {phone_num_person, name_person, islike_person} = req.body
        if (!phone_num_person || !name_person) {
            return next(ApiError.badRequest('Некорректный логин или пароль'))
        }
        const candidate = await Phone.findOne({where: {phone_num_person}})
        if (candidate) {
            return next(ApiError.badRequest('Контакт с таким номером телефона уже есть в телефонной книге!'))
        }
        const phone = await Phone.create({phone_num_person, name_person, islike_person})
        return res.json(phone)
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
        let phones = await Phone.findAll({attributes: ['id_person', 'phone_num_person', 'name_person', 'islike_person']})
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