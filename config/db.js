import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config({path: '.env'})

const db = new Sequelize(
  process.env.DB_NOMBRE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: "3307",
    dialect: "mysql",
    define: {
      timestamps: true,
    },
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    operatorsAliases: 0,
  }
);

export default db;
