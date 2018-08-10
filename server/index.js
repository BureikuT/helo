require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')

const {CONNECTION_STRING} = process.env
controller = require('./controller')


const app = express()

app.use(bodyParser.json())

massive(CONNECTION_STRING).then(connection=>{
    app.set('db',connection);
    console.log('db connected')
})

app.post('/api/login', controller.login)
app.post('/api/register', controller.register)


port = 3001
app.listen(port, () =>console.log(`Nothing like a great ${port} wine!`))