const {Router} = require('express')
const AuthController = require('./AuthController')
const router = Router()

router.post('/register', AuthController.register)


module.exports = router

// app -> route -> controller -> model -> db ...