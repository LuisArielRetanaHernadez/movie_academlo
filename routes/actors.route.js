/* eslint-disable linebreak-style */
const express = require('express');

// controllers of actors
const {
  getAllActors,
  getActorById,
  delActorById,
  createActor,
} = require('../controllers/actors.controller');

// ultis

const { upload } = require('../ultis/multer');

const router = express.Router();

router.get('/', getAllActors);
router.get('/:id', getActorById);
router.post('/', upload.single('profilePic'), createActor);
router.delete('/id', delActorById);

module.exports = { actorsRouter: router };
