const express = require("express");
const {getUsers} = require("../controllers/userController.js");

const userRouter = express.Router();

userRouter.get('/users', getUsers);
// userRouter.get('/users/:id', getUserById);
// userRouter.post('/users', createUser);
// userRouter.patch('/users/:id', updateUser);
// userRouter.delete('/users/:id', deleteUser);

module.exports = userRouter;