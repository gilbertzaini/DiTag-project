const { Notification } = require("../models");
const { where } = require("sequelize");

const getNotification = async (req, res) => {
  try {
    const response = await Notification.findAll({
      where: {
        user_id: req.params.user_id,
      },
    });
    res.status(230).json(response);
  } catch (e) {
    console.log(e.message);
  }
};

const deleteNotification = async (req, res) => {
  try {
    await Notification.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(231).json({ msg: "User Deleted" });
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = { getNotification, deleteNotification };
