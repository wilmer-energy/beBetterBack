const { db, DataTypes } = require('../utils/database.util');

const User = db.define('user', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	CC: {
		type: DataTypes.REAL,
		allowNull: false,
	},
	birthDate: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	profession: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	phone: {
		type: DataTypes.REAL,
		allowNull: true,
	},
	gender: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	city: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	state: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	status: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'active',
	},
});

module.exports = { User };
