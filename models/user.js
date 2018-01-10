// const Sequelize = require('sequelize');
// const sequelize = require('../config/config');
const bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {
  // For use by bcrypt
  const saltRounds = 10;
  
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      required: true,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      required: true,
      allowNull: false,
      type: DataTypes.STRING,
    }
  });

  // Hook to perform the below function before a user is created.
  User.beforeCreate((user, options) => {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(saltRounds), null);
  });

  // Rewrite of a function to not expose password
  User.prototype.toJSON = function() {
    let values = Object.assign({}, this.get()); // Getting me a copy

    delete values.password;
    return values;
  };

  // Instance method Validate password with bycrpt
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  // ASSOCIATIONS


  return User;
} /* End of module.exports */
