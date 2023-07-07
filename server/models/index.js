const {DataTypes, Sequelize} = require('sequelize')
const sequelize = require('../db')
const db = {}

db.phones = require('./Phone.js')(sequelize, DataTypes)
db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db