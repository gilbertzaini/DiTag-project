import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const User = db.define(
  "users",
  {
    id: { type: DataTypes.STRING, allowNull: false, primaryKey:true, autoIncrement: false },
    
  },
  {
    freezeTableName: true,
  }
);

export default User;

(async () => {
  await db.sync();
})();
