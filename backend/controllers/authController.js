const { User } = require("../models");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const { check, validationResult } = require("express-validator");

const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
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
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) return res.status(401).json({ msg: "Credential Error" });
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.status(401).json({ msg: "Credential Error" });

    // rememberMe token
    const rememberMeToken = uuidv4();

    // 7 days expiration
    res.cookie("rememberMe", rememberMeToken, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: true,
    });

    // Set the user's session data
    req.session.userId = user.user_id;
    const user_id = user.user_id;
    const name = user.name;
    const email = user.email;
    console.log(`Logged in as ${name}`);
    console.log(`Session created with userId ${req.session.userId}`);
    res.status(200).json({ user_id, name, email });
  } catch (e) {
    console.log(e.message);
  }
};

const logout = async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) return res.status(401).json({ msg: "Logout Failed" });
      res.status(204).json({ msg: "Logged out" });
    });
  } catch (e) {
    console.log(e.message);
  }
};

const loggedInUser = async (req, res) => {
  try {
    if (!req.session.userId)
      return res.status(400).json({ msg: "Please log in to your account" });

    const user = await User.findOne({
      attributes: ["user_id", "name", "email"],
      where: {
        user_id: req.session.userId,
      },
    });
    if (!user) return res.status(400).json({ msg: "User not found" });
    res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = { register, login, logout, loggedInUser };
