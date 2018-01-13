
module.exports = function(sequelize, DataTypes) {
  const Topic = sequelize.define('Topic', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      required: true,
      type: DataTypes.STRING,
      unique: true,
    }
  });

  // ASSOCIATIONS
	Topic.associate = function(db) {
    // Associate Topic with User
		// A Topic can't be created without an User
		// Topic.belongsTo(db.User, {
		// 	foreignKey: {
		// 		allowNull: false
		// 	}
    // });
    
    // Associating Topic with Questions
		// When an Topic is deleted, also delete any associated Questions
		Topic.hasMany(db.Question, {
			onDelete: 'cascade'
		});
	};

  return Topic;
} /* End of module.exports */
