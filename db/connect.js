require("dotenv").config();
const { Pool } = require("pg");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const pool = new Pool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  database: DB_NAME,
  port: DB_PORT,
});

const connectDB = () => {
  return pool
    .connect()
    .then(() =>
      console.log(`The application is connected to ${DB_NAME} database`)
    )
    .catch((err) => console.error("connection error", err));

  // return pool
};



module.exports = { connectDB, pool };
