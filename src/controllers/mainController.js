const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const db = require('./../../database/models');

const mainController = {
  main: async (req,res) => {
    const users = await db.User.findAll();
    
    res.render('./main/index', {users})
  },
  addUser: (req, res) => {
    res.render("./main/addUser");
  },
  create: async (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render("./main/addUser", {
        errors: resultValidation.mapped(),
        old: req.body,
      });
    }

  let userByEmailInDB = await db.User.findOne( {
    where: {
      email: req.body.email
    }
  });

    if (userByEmailInDB && userByEmailInDB.email === req.body.email) {
      return res.render("./main/addUser", {
        errors: {
          email: {
            msg: "Este email ya está registrado",
          },
        },
        old: req.body,
      });
    }

    let userToCreate = {
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10),

      //confirmPassword:bcryptjs.hashSync(req.body.confirmPassword, 10),
      image: "default.png"
    }
    delete userToCreate.confirmPassword
    if (req.file && req.file.filename) {
      userToCreate.image = req.file.filename;
    }
    let userCreated = await db.User.create(userToCreate);
    return res.redirect("/");
  },
  editUser: (req,res) => {
    db.User.findByPk(req.params.id)
      .then(user => {
          user.emailOriginal = user.email;
          res.render('./main/editUser', { user });
      });

  },
  update: async (req, res) => {
    let productId = req.params.id;
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render("./main/editUser", {
        errors: resultValidation.mapped(),
        old: req.body,
        user: {id: productId, emailOriginal: req.body.emailOriginal }
      });
    }

    if (req.body.emailOriginal !== req.body.email) {
      let userByEmailInDB = await db.User.findOne({
        where: {
          email: req.body.email
        }
      });

      if (userByEmailInDB && userByEmailInDB.email === req.body.email) {
        return res.render("./main/editUser", {
          errors: {
            email: {
              msg: "Este email ya está registrado",
            },
          },
          old: req.body,
          user: { id: productId, emailOriginal: req.body.emailOriginal }
        });
      }
    }

    let userToEdit = {
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10),

      //confirmPassword:bcryptjs.hashSync(req.body.confirmPassword, 10),
      image: "default.png"
    }
    delete userToEdit.confirmPassword
    if (req.file && req.file.filename) {
      userToEdit.image = req.file.filename;
    }
    let userEdited = await db.User.update(userToEdit, {
      where: {id: productId}
  });

    return res.redirect("/");
  }
}

module.exports = mainController;