const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const version = '/api/v1'
var app = express()

app.use(bodyParser.json({ limit: '50mb'}))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))

app.use('/static', express.static(path.join(__dirname, 'public')))

let port = 3555
app.listen(port, () => {
    console.log('is listen on port '+port)
})

const {createApi} = require('./api/api.js')
createApi(app, version)
