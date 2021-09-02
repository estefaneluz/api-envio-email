const knex = require('knex');({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'postgres',
        database: 'newsletter',
        port: 8000,
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = knex;