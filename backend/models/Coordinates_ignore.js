import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Coordinates = db.define(
  "coordinates",
  {
    id: { type: DataTypes.STRING, allowNull: false , primaryKey: true, autoIncrement: false},
    longitude: { type: DataTypes.STRING, },
    latitude: {type:DataTypes.STRING}
  },
  {
    freezeTableName: true,
  }
);

export default Coordinates;

(async () => {
  await db.sync();
})();
