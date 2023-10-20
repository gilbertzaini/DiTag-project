const { Device } = require("../models");
const { Coordinate } = require("../models");

const registerDevice = async (req, res) => {
  try {
    const newDevice = await Device.create(req.body);
    const { device_id } = req.body;
    await Coordinate.create({
      device_id: device_id,
      latitude: -6.256074184519056,
      longitude: 106.61855424641801,
    });
    res.status(210).json({ msg: "Device Added", device: newDevice });
  } catch (e) {
    console.log(e.message);
  }
};

const getDevice = async (req, res) => {
  try {
    const response = await Device.findAll();
    res.status(211).json(response);
  } catch (e) {
    console.log(e.message);
  }
};

const updateDevice = async (req, res) => {
  try {
    const response = await Device.update(req.body, {
      where: {
        device_id: req.params.device_id,
      },
    });
    res.status(212).json({ msg: "Device Updated" });
  } catch (e) {
    console.log(e.message);
  }
};

const deleteDevice = async (req, res) => {
  try {
    await Device.destroy({
      where: {
        device_id: req.params.device_id,
      },
    });
    await Coordinate.destroy({
      where: {
        device_id: req.params.device_id,
      },
    });
    res.status(213).json({ msg: "Device Deleted" });
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = { registerDevice, getDevice, updateDevice, deleteDevice };
