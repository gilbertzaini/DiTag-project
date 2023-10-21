'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coordinate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Coordinate.belongsTo(models.Device, {
        foreignKey: 'device_id',
        as: 'Device'
      });
    }
  }
  Coordinate.init({
    device_id: DataTypes.STRING,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'Coordinate',
  });
  return Coordinate;
};