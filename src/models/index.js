require('dotenv').config()
const Sequelize = require('sequelize');
const chalk = require('chalk')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

const product = require('./product')(sequelize)
const user = require('./user')(sequelize)

user.hasMany(product)

sequelize.sync().then(()=>{
}).catch(function(err) {
  console.log(err, chalk.bgRed("Something went wrong with the Database Update!"))
});

module.exports = {
  product,
  user,
}