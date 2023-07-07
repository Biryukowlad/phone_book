const express = require('express')
const sequelize = require('./db')
const PORT = 8081
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log('Server started'))
    } catch (error) {
        console.log(error)
    }
}
start()