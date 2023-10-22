"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.User, {
        foreignKey: "user_id",
        sourceKey: "user_id",
        as: "User",
      });
    }
  }
  Review.init(
    {
      user_id: { type: DataTypes.STRING, allowNull: false },
      message: { type: DataTypes.STRING, allowNull: false },
      rate: { type: DataTypes.DOUBLE, allowNull: false },
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};
