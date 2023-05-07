const express = require("express")
const router = express.Router()

const {getAllUsers} = require("../controllers/UserController")


// service layer (business logic)
// const {db} = require

// const userRouter = (db) => {

//   router.route("/", (req, res) => {
//     const queryString = `SELECT * FROM users;`
//     db.query(queryString)
//     .then(res => res.rows[0]);
//   })
// }

// module.exports = userRouter
router.route("/").get(getAllUsers)

module.exports = router
