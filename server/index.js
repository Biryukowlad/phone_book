const express = require('express')
const sequelize = require('./db')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const router = require('./routes/index')
const path = require('path')

const PORT = 8081
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
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