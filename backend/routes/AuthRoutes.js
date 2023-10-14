const express = require("express");
const { register, login } = require("../controllers/authController");
const { bcryptjs } = require("bcryptjs");

const authRouter = express.Router();

authRouter.get("/register", register);
authRouter.get("/login", login);

module.exports = authRouter;
