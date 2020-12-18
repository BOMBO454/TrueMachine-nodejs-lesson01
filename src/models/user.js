const Sequelize = require('sequelize')
module.exports = sequelize=>{
  return sequelize.define('user',{
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    login: {
      type: Sequelize.STRING
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    birthDay: {
      type: Sequelize.DATEONLY
    }
  },{
    timestamps: true,
    deletedAt: 'deletedAt',
  })
}