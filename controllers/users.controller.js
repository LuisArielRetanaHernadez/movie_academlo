/* eslint-disable linebreak-style */
// model
const { User } = require('../model/user.model');

// ultis
const { catchAsync } = require('../ultis/catchAsync');
// const { filterObj } = require('../ultis/filterObj');
const { AppError } = require('../ultis/appError');

exports.getAllUsers = catchAsync(async (req, res) => {
  const users = await User.findAll({
    where: {
      status: 'active',
    },
  });
  res.status(200).json({
    status: 'exite',
    data: users,
    message: 'find all user exite',
  });
});

exports.getUserById = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOne({
    where: {
      id,
      status: 'active',
      attribute: {
        exclude: ['password'],
      },
    },
  });

  if (!user) return next(new AppError(404, 'user invalide'));

  return res.status(200).json({
    status: 'exite',
    data: user,
    message: 'user find exite',
  });
});

exports.deleteUserById = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOne({
    where: {
      id,
      status: 'active',
    },
  });

  if (!user) return next(new AppError(404, 'user invalide'));

  await user.update({
    status: 'disable',
  });

  return res.status(204).json({
    status: 'exite',
    message: 'delete user exite',
  });
});

exports.putUserById = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  if (!id) return next(new AppError(404, 'user invalide'));

  const { name } = req.body;

  if (!name) return next(new AppError(404, 'data invalide'));

  const user = await User.findOne({
    where: {
      id,
      status: 'active',
    },
  });

  await user.update({
    name,
  });

  return res.status(204).json({
    status: 'exite',
    message: 'user update exite',
  });
});
