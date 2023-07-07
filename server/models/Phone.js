module.exports = (sequelize, DataTypes) => {

    const Phone = sequelize.define("client", {
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
        }
    }, {
        timestamps: false
    })
    return Phone
}