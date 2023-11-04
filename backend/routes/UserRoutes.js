const express = require("express");
const {getUsers, updateUser, deleteUser} = require("../controllers/userController.js");
const {verifyUser} = require("../middleware/AuthUser");

const userRouter = express.Router();

userRouter.get('/users', verifyUser, getUsers);
userRouter.patch('/users/:id', verifyUser, updateUser);
userRouter.delete('/users/:id', verifyUser, deleteUser);

module.exports = userRouter;