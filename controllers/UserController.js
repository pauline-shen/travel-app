const { db } = require("../db/connect");
const {queryAllUsers} = require("../models/UserModel");

const getAllUsers = async (req, res) => {
  // get the users from model
  const allUsers = await queryAllUsers();
  res.json({allUsers});
};

const getUser = async (req, res) => {

  const user = await queryUser();
  res.json({user});
};

module.exports = { getAllUsers, getUser };
