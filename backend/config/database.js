import { Sequelize } from "sequelize";

const db = new Sequelize('ditag', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
