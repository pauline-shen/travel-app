const express = require("express");
const router = express.Router();

const { getAllUsers, getUser } = require("../controllers/UserController");


router.route("/").get(getAllUsers);
router.route("/").get(getUser);

module.exports = router
