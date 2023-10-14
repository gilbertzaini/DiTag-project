const { User } = require("../models");

const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
    console.log("done");
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = { getUsers };
