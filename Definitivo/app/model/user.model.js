module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('user', {
	  userId: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	  },
	  userName: {
		  type: Sequelize.STRING
		},
		userPass: {
			type: Sequelize.STRING
		},
	  userMail: {
			type: Sequelize.STRING
		},
		createdAt: {
				type: 'TIMESTAMP',
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
		},
		updatedAt: {
			type: 'TIMESTAMP',
			defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
		},
		unsubDate: {
			type: 'TIMESTAMP',

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