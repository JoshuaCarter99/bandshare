const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'audio/*') {
    cb(null, true);
  } else {
    cb({ message: 'Not a valid file format :(' }, false);
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 50000 },
  fileFilter: fileFilter,
});

module.exports = upload;
