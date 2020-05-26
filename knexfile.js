// Update with your config settings.

require('dotenv').config();
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: process.env.DB_PORT || 5432,
      database: process.env.DATABASE,
      user:     process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || undefined,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: process.env.DB_PORT || 5432,
      database: process.env.DATABASE,
      user:     process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || undefined,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
