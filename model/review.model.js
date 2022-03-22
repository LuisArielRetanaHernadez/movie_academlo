/* eslint-disable linebreak-style */
const { DataTypes } = require('sequelize');
const { bd } = require('../ultis/database');

const Review = bd.define(
  'reviews',
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.STRING(10),
      defaultValue: 'active',
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
);

module.exports = { Review };
