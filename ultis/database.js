/* eslint-disable linebreak-style */
const { Sequelize } = require('sequelize');
require('dotenv').config();

console.log(process.env.DB_HOST);
const bd = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  port: 5432,
  dialect: 'postgres',
  logging: false,
});

module.exports = { bd };
