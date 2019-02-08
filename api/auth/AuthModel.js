const knex = require('../../knex')

class AuthModel {
    inertUser(username, password) {
        return knex('user_table').insert({username, password})
    }
}

module.exports = new AuthModel()