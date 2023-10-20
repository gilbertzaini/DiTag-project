const express = require("express");
const {getUsers, updateUser, deleteUser} = require("../controllers/userController.js");

const userRouter = express.Router();

userRouter.get('/users', getUsers);
userRouter.patch('/users/:id', updateUser);
userRouter.delete('/users/:id', deleteUser);

module.exports = userRouter;