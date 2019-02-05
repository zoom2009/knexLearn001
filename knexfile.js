// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      database: 'tutorial',
      user:     'root',
      password: 'aAdD739182465'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname+'/db/migrations'
    }
  },

   production: {
    client: 'mysql',
    connection: {
      database: 'tutorial',
      user:     'test123',
      password: '123456'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname+'/db/migrations'
    }
  }

};
