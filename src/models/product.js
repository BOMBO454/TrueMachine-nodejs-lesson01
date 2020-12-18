const Sequelize = require('sequelize')
module.exports = sequelize=>{
  return sequelize.define('product',{
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    }
  },{
    timestamps: true,
    deletedAt: 'deletedAt',
  })
}