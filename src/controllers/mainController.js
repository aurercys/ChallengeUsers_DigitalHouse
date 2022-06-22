const db = require('./../../database/models');

const mainController = {
  main: async (req,res) => {
    const users = await db.User.findAll();
    console.log('users', users);
    res.render('./main/index', {users})
  }
}

module.exports = mainController;