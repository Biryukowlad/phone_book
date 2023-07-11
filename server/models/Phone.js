const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Phone = sequelize.define("phone", {
    id_person: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    phone_num_person: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name_person: {
        type: DataTypes.STRING,
        allowNull: false
    },
    islike_person: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    photo_person: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: false
})
module.exports = {
    Phone
}