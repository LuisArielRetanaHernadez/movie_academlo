/* eslint-disable linebreak-style */
// multer
const multer = require('multer');

// ultis
const { AppError } = require('./appError');

const storage = multer.memoryStorage();

const multerFileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(new AppError(404, 'file invalide'), false);
  } else {
    cb(null, true);
  }
};

const upload = {
  storage,
  fileFilter: multerFileFilter,
};

module.exports = { upload };
