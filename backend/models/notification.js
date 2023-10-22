'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Notification.belongsTo(models.User, {
        foreignKey:'user_id',
        as: 'User'
      });

      Notification.belongsTo(models.Device, {
        foreignKey:'device_id',
        as: 'Device'
      });
    }
  }
  Notification.init({
    user_id: {type: DataTypes.STRING, allowNull:false},
    device_id: {type: DataTypes.STRING, allowNull:false},
    message: {type: DataTypes.STRING, allowNull:false},
  }, {
    sequelize,
    modelName: 'Notification',
  });
  return Notification;
};