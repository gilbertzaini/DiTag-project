const { getDeviceCoordinate, updateCoordinate } = require("../controllers/coordinateController");
const express = require("express");

const coordinateRouter = express.Router();

coordinateRouter.get('/coordinate/:device_id', getDeviceCoordinate);
coordinateRouter.patch('/coordinate/:device_id', updateCoordinate);

module.exports = coordinateRouter;
