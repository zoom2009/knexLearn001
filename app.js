const express = require('express')
const bodyParser = require('body-parser')
const {token} = require('./middleware/token')
const knex = require('./knex')

var app = express()

app.use(bodyParser.json({ limit: '50mb'}))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))

app.get('/:name', (req, res, next) => {
    let { name } = req.params
    res.status(200).json({success: true, result: name})
})

app.post('/insert', 
    token(),
    async(req, res, next) => {
        try {
            const { username, password } = req.body
            let inserted = await knex('user_table').insert({username, password})
            
            res.status(200).json({success: true, inserted})
        } catch (error) {
            res.status(400).json({success: false, error})
        }
})

app.listen(3555, () => {
    console.log('is listen on port 3555')
})