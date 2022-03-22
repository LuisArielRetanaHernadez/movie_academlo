/* eslint-disable linebreak-style */
const express = require('express');

const {
  getAllActors,
  getActorById,
  delActorById,
} = require('../controllers/actors.controller');

const router = express.Router();

router.get('/', getAllActors);
router.get('/:id', getActorById);
// router.post('/', createNewActor);
router.delete('/id', delActorById);

module.exports = { actorsRouter: router };
