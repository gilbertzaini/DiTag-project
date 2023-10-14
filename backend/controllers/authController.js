const Users = require("../models/users.js");

const register = async (req, res) => {
  try {
    await Users.create(req.body);
    res.status(201).json({ msg: "User Created" });
  } catch (e) {
    console.log(e.message);
  }
};

const login = async (req, res) => {
  try {
    console.log("logged in")
  } catch (e) {
    console.log(e.message);
  }
}

module.exports = {register, login};