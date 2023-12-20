const { Coordinate, User, Device, Notification } = require("../models");
const { where } = require("sequelize");
const geolib = require("geolib");

const getDeviceCoordinate = async (req, res) => {
  try {
    const response = await Coordinate.findOne({
      where: {
        device_id: req.params.device_id,
      },
    });
    res.status(200).json(response);
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = { getDeviceCoordinate };
