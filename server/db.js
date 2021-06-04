const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: process.env.POSTGRES_DB_USERNAME,
  password: process.env.POSTGRES_DB_PASSWORD,
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
