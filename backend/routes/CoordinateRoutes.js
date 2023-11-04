const { getDeviceCoordinate, updateCoordinate } = require("../controllers/coordinateController");
const express = require("express");
const {verifyUser} = require("../middleware/AuthUser");

const coordinateRouter = express.Router();

coordinateRouter.get('/coordinate/:device_id', verifyUser, getDeviceCoordinate);
coordinateRouter.patch('/coordinate/:device_id', verifyUser, updateCoordinate);

module.exports = coordinateRouter;
