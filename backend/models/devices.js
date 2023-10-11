'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Devices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
    */
    static associate(models) {
      // define association here
    }
  }
  Devices.init({
    device_id: {type: DataTypes.STRING, allowNull:false, unique},
    user_id: {type: DataTypes.STRING, allowNull:false},
    name: {type: DataTypes.STRING, allowNull:false},
    status: {type: DataTypes.STRING, defaultValue:"Up"},
    battery_percentage: {type: DataTypes.DOUBLE, allowNull:false}
  }, {
    sequelize,
    modelName: 'Devices',
  });
  return Devices;
};