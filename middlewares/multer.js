const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage ( {
  destination: function (req, file, cb) {
    cb(null, path.resolve('public/images'));
  },
  filename: function (req, file, cb) {
      cb(null,  req.body.username + '-' + file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})


const upload = multer({ storage})

module.exports = upload;