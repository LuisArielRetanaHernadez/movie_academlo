/* eslint-disable linebreak-style */
const { DataTypes } = require('sequelize');
const { bd } = require('../ultis/database');

const Movie = bd.define(
  'movies',
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
    description: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING(250),
    },
    genre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(10),
      defaultValue: 'active',
    },
  },
);

module.exports = { Movie };
