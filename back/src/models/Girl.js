const {Sequelize, DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const Girl = sequelize.define('Girl',{
	name:{
		type: DataTypes.STRING
	},
	pic:{
		type: DataTypes.STRING
	}
})

sequelize.sync().then(()=>console.log('N*Sync'))
.catch((err)=>console.log('We R Not N*Sync'))

module.exports = Girl;