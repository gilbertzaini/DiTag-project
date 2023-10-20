'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Device.init({
    device_id: {type: DataTypes.STRING, primaryKey:true, allowNull:false, unique: true},
    user_id: {type: DataTypes.STRING, allowNull:false},
    name: {type: DataTypes.STRING, allowNull:false},
    status: {type: DataTypes.STRING, defaultValue:"Up"},
    battery_percentage: {type: DataTypes.DOUBLE, allowNull:true}
  }, {
    sequelize,
    modelName: 'Device',
  });
  return Device;
};