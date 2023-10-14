const express = require("express");
const { register, login } = require("../controllers/authController");
const { bcryptjs } = require("bcryptjs");
const {check, validationResult} = require("express-validator");

const authRouter = express.Router();

const rules = [
    check('name').notEmpty().withMessage("Name is required"),
    check('email').isEmail().withMessage("Invalid email address").trim().escape().normalizeEmail(),
    check('password').isLength({min: 8}).withMessage('Password must be at least 8 characters long').trim().escape(),
  ];

authRouter.post("/register", rules, register);
authRouter.post("/login", login);

module.exports = authRouter;
