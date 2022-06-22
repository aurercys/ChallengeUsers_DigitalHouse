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
    console.log(req.body)
    if (req.file && req.file.filename) {
      userToCreate.image = req.file.filename;
    }
    let userCreated = await db.User.create(userToCreate);
    return res.redirect("/");
  },
}

module.exports = mainController;