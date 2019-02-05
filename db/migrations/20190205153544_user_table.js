const knex = require('../../knex')

exports.up = function (_, Promise) {
    return Promise.resolve(
        knex.schema.createTable('user_table', table => {
            table.increments('user_id').primary()
            table.string('username', 60)
            table.string('password', 60)
            table.unique('username')
        })
    )
}

exports.down = function(_, Promise) {
    return Promise.resolve(knex.schema.dropTable('user_table'))
}
