// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/sleepstaDB.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "database/test/db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  },

  production: {
    client: "pg",
    debug: process.env.DEBUG_DB === "true",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  }
};
