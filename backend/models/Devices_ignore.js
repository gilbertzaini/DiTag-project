import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Devices = db.define(
  "devices",
  {
    id: { type: DataTypes.STRING, allowNull: false , primaryKey: true, autoIncrement: false},
    user_id: { type: DataTypes.STRING },
  },
  {
    freezeTableName: true,
  }
);

export default Devices;

(async () => {
  await db.sync();
})();
