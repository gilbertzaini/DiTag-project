const express = require("express");
const {getDevice, registerDevice, updateDevice, deleteDevice} = require("../controllers/deviceController");

const deviceRouter = express.Router();

deviceRouter.get('/device', getDevice);
deviceRouter.post('/device/register', registerDevice);
deviceRouter.patch('/device/update/:device_id', updateDevice);
deviceRouter.delete('/device/delete/:device_id', deleteDevice);

module.exports = deviceRouter;