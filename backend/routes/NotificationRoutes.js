const express = require("express");
const { getNotification, deleteNotification } = require("../controllers/notificationController");
const {verifyUser} = require("../middleware/AuthUser");

const notificationRouter = express.Router();

notificationRouter.get('/notifications/:user_id', verifyUser, getNotification);
notificationRouter.delete('/notifications/:id', verifyUser, deleteNotification);

module.exports = notificationRouter;