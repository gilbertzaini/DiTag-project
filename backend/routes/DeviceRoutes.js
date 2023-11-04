const express = require("express");
const {getDevice, registerDevice, updateDevice, deleteDevice} = require("../controllers/deviceController");
const {verifyUser} = require("../middleware/AuthUser");

const deviceRouter = express.Router();

deviceRouter.get('/device/:user_id', verifyUser, getDevice);
deviceRouter.post('/device/register', verifyUser, registerDevice);
deviceRouter.patch('/device/update/:device_id', verifyUser, updateDevice);
deviceRouter.delete('/device/delete/:device_id', verifyUser, deleteDevice);

module.exports = deviceRouter;