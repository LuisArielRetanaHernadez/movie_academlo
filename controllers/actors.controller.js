/* eslint-disable linebreak-style */

// firebase
const { ref, uploadBytes } = require('firebase/storage');

// ultis
const { catchAsync } = require('../ultis/catchAsync');
const { filterObj } = require('../ultis/filterObj');
const { AppError } = require('../ultis/appError');
const { storage } = require('../ultis/firebase');

// model
const { Actor } = require('../model/actor.model');

exports.getAllActors = catchAsync(async (req, res) => {
  const actors = await Actor.findAll({
    where: {
      status: 'active',
    },
  });
  res.status(200).json({
    status: 'succes',
    data: actors,
  });
});

exports.getActorById = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const actor = await Actor.findOne({
    where: {
      id,
      status: 'active',
    },
  });
  if (!actor) return next(new AppError('actor non-existent', 404));

  return res.status(200).json({
    status: 'succes',
    data: actor,
  });
});

exports.delActorById = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const actor = await Actor.findOne({
    where: {
      id,
      status: 'active',
    },
  });

  if (!actor) return next(new AppError('actor non-existent', 404));

  await actor.update({
    status: 'disable',
  });

  return res.status(204).json({
    status: 'succes',
    message: 'actor delect',
  });
});

exports.putActorById = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const {
    name,
    country,
    rating,
    age,
  } = filterObj(req.bod, 'name', 'country', 'rating', 'age');

  if (
    !name
    || !country
    || !rating
    || !age
  ) return next(new AppError(404, 'invalid data'));

  const actor = await Actor.findOne({
    where: {
      id,
      status: 'active',
    },
  });

  await actor.update({
    name,
    country,
    rating,
    age,
  });

  return res.status(204).json({
    status: 'succes',
    message: 'update actor',
    data: {},
  });
});

exports.createActor = catchAsync(async (req, res, next) => {
  const {
    name,
    country,
    rating,
    age,
  } = req.body;

  if (
    !name
    || !country
    || !rating
    || age
  ) return next(new AppError(404, 'datas incomplet'));

  const imgRef = ref(storage, `imgs/${Date.now()}-${req.file.originalname}`);
  const result = await uploadBytes(imgRef, req.file.buffer);

  const newActor = await Actor.create({
    name,
    country,
    rating,
    age,
    profilePic: result.metadata.fullPath,
  });

  return res.status(201).json({
    status: 'axite',
    data: newActor,
    message: 'actor create exite',
  });
});
