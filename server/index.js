const express = require('express')
const sequelize = require('./db')
const PORT = 8081
const app = express()
const cors = require('cors')
const router = require('./routes/index')

app.use(cors())
app.use(express.json())
app.use('/api', router)

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