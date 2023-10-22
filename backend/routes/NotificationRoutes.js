const express = require("express");
const { getNotification, deleteNotification } = require("../controllers/notificationController");

const notificationRouter = express.Router();

notificationRouter.get('/notifications/:user_id', getNotification);
notificationRouter.delete('/notifications/:id', deleteNotification);

module.exports = notificationRouter;