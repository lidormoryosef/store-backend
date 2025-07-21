const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('store', 'root', 'lidor123', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});
module.exports = sequelize;
// const Product = require('../Models/ProductSchema');

// (async () => {
//   try {
//     await sequelize.sync({ alter: true });
//     console.log('Database synced.');
//     process.exit(0);
//   } catch (err) {
//     console.error('DB sync failed:', err);
//     process.exit(1);
//   }
// })();