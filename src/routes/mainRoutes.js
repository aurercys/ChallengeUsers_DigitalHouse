const express = require ('express');
const router = express.Router();
const path = require('path')
const mainController = require (path.resolve('./src/controllers/mainController'));
const upload = require (path.resolve('./middlewares/multer'))
const usersValidation = require (path.resolve('./middlewares/usersValidation'))

router.get ('/', mainController.main);
router.get ('/addUser', mainController.addUser)
router.post ('/addUser', upload.single('image'), usersValidation, mainController.create)
router.get ('/editUser/:id', mainController.editUser)
router.put('/editUser/:id', upload.single('image'), usersValidation, mainController.update);

module.exports = router;