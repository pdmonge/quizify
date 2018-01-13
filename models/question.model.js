
module.exports = function(sequelize, DataTypes) {
  const Question = sequelize.define('Question', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    text: {
      required: true,
      type: DataTypes.TEXT,
      validate: {
        // Limiting questions to a max length of 2000
        len: [1, 2000]
      }
    }
  });

  // ASSOCIATIONS
	Question.associate = function(db) {
    // Associate Question with Topic
		// A Question can't be created without a Topic
		Question.belongsTo(db.Topic, {
			foreignKey: {
				allowNull: false
			}
    });
    
    // Associating Question with Answers
		// When a Question is deleted, also delete any associated Answers
		Question.hasMany(db.Answer, {
			onDelete: 'cascade'
		});
	};

  return Question;
} /* End of module.exports */
