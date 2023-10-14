const { User } = require("../models");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require('uuid');
const {check, validationResult} = require("express-validator");

const register = async (req, res) => {
  try { 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }  

    const { name, email, password } = req.body;
    const randomId = uuidv4();
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      user_id: randomId,
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ msg: "User Created", user: newUser });
  } catch (e) {
    console.log(e.message);
  }
};

const login = async (req, res) => {
  try {
    console.log("logged in");
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = { register, login };
