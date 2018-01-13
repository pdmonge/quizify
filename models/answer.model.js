
module.exports = function(sequelize, DataTypes) {
  const Answer = sequelize.define('Answer', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    position: {
      // Should be a letter in [A,B,C,D,E,F,G,H]
      // There is currently an 8 answer limit per Question
      type: DataTypes.STRING(1),
      required: true,
      allowNull: false
    },
    text: {
      required: true,
      type: DataTypes.STRING,
      unique: true
    },
    isCorrect: {
      required: true,
      type: DataTypes.BOOLEAN
    }
  });

  // ASSOCIATIONS
	Answer.associate = function(db) {
    // Associate Answer with Question
		// An Answer can't be created without a Question
		Answer.belongsTo(db.Question, {
			foreignKey: {
				allowNull: false
			}
    });
	};

  return Answer;
} /* End of module.exports */
