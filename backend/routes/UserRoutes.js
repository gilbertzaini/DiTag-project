const express = require("express");
const {getUsers, updateUser, deleteUser, updateUserLocation} = require("../controllers/userController.js");
const {verifyUser} = require("../middleware/AuthUser");

const userRouter = express.Router();

userRouter.get('/users', getUsers);
userRouter.patch('/users/:id', verifyUser, updateUser);
userRouter.delete('/users/:id', verifyUser, deleteUser);
userRouter.patch('/users/coordinates/:id', verifyUser, updateUserLocation);

module.exports = userRouter;