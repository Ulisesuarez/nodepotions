module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('user', {
	  userId: {
		type: Sequelize.INTEGER,
		autoIncrement: true
	  },
	  userName: {
		  type: Sequelize.STRING
	  },
	  userMail: {
			type: Sequelize.STRING
		},
		creationDate: {
			type: Sequelize.DATE
		},
		unsubDate: {
			type: Sequelize.DATE
		},
		userAvatar:{
			type: Sequelize.STRING
		},
		userRole: {
			type: Sequelize.STRING
		},
	});
	
	return User;
}