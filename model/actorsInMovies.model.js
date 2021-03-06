/* eslint-disable linebreak-style */
const { DataTypes } = require('sequelize');
const { bd } = require('../ultis/database');

const actInMve = bd.define(
  'actorsInMovies',
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    actorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
);

module.exports = { actInMve };
