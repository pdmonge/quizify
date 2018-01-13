const bcrypt = require('bcrypt-nodejs');
// Sequelize comparison operators
// const Op = require('sequelize').Op;

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
    },
    creator: {
      required: true,
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    tester: {
      required: true,
      allowNull: false,
      type: DataTypes.BOOLEAN
    }
  });

  // Hook to perform the below function before a user is created.
  // User.beforeCreate((user, options) => {
  //   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(saltRounds), null);
  // });

  // Rewrite of a function to not expose password
  // User.prototype.toJSON = function() {
  //   let values = Object.assign({}, this.get()); // Getting me a copy

  //   delete values.password;
  //   return values;
  // };

  // Instance method Validate password with bycrpt
  User.prototype.validPassword = function(password) {
    // return bcrypt.compareSync(password, this.password);
    return (password = this.password);
  };

  // ASSOCIATIONS
	User.associate = function(db) {
		// Associating User with Topics
		// When an User is deleted, also delete any associated Topics
		User.hasMany(db.Topic, {
      onDelete: 'cascade',
			foreignKey: {
				allowNull: false
      }
    });
	};

  return User;
} /* End of module.exports */
