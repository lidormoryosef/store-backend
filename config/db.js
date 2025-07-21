const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('store', 'root', 'lidor123', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});
module.exports = sequelize;