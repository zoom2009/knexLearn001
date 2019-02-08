const AuthModel = require('./AuthModel')
const {success, failed} = require('../../config/response')
const bcrypt = require('bcrypt')

class AuthController {

    async register(req, res) {
        try {
            const {username, password} = req.body
            let hashPassword = bcrypt.hashSync(password, 10)
            await AuthModel.inertUser(username, hashPassword)
            success(res, 'inert user success')
        } catch (error) {
            failed(res, error)
        }
    }
}

module.exports = new AuthController()