/* eslint-disable linebreak-style */
// multer
const multer = require('multer');

// ultis
const { AppError } = require('./appError');

const storage = multer.memoryStorage();

const multerFileFilter = (req, file, cb) => {
  console.log(file.mimetype);
  if (!file.mimetype.startsWith('image')) {
    cb(new AppError(400, 'file invalide'), false);
  } else {
    cb(null, true);
  }
};

const upload = multer({
  storage,
  fileFilter: multerFileFilter,
});

module.exports = { upload };
