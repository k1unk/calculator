const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    dialect: 'postgres'
  }
)

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./../models/usersModel.js")(sequelize, Sequelize);

module.exports = db;
