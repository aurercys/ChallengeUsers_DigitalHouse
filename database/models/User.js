module.exports = (sequelize, DataTypes) => {
  cols = {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name: {
          type: DataTypes.STRING
      },
      lastname: {
          type: DataTypes.STRING
      },
      password: {
          type: DataTypes.STRING
      },    
  
      email: {
          type: DataTypes.STRING
  
      },
      image: {
          type: DataTypes.STRING
  
      }
  }
  
  const User = sequelize.define("User", cols,
     {
        tableName: 'users', 
        timestamps: false,  

     });

  return User;
}


