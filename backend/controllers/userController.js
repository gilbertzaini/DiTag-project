const Users = require("../models/users.js");

const getUsers = async (req, res) => {
  try {
    const response = await Users.findAll();
    res.status(200).json(response);
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {getUsers};
