/* eslint-disable linebreak-style */
const { DataTypes } = require('sequelize');
const { bd } = require('../ultis/database');

const Actor = bd.define(
  'actors',
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    profilePic: {
      type: DataTypes.STRING(250),
    },
    status: {
      type: DataTypes.STRING(10),
      defaultValue: 'active',
    },
  },
  { timestamps: false },
);

module.exports = { Actor };
