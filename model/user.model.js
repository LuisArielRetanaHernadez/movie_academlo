/* eslint-disable linebreak-style */
const { DataTypes } = require('sequelize');
const { bd } = require('../ultis/database');

const User = bd.define(
  'users',
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
    password: {
      type: DataTypes.STRING(220),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(10),
      defaultValue: 'active',
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
  },
  { timestamps: false },
);

module.exports = { User };
