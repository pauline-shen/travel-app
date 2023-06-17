const db = require("../db/connect");

const queryAllUsers = async (req, res) => {
  const queryString = `SELECT * FROM users;`;
  const result = await db.query(queryString)
  return result.rows
}

const queryUser = async (req, res) => {
  const queryString = `
  SELECT *
  FROM users
  WHERE email = $1
  `;
  const result = await db.query(queryString, [req.query.email])
  return result.rows
}

module.exports = { queryAllUsers, queryUser };
