const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    catalogNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        min: 0
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.ENUM('Fruit', 'Vegetable', 'Field crops'),
      allowNull: false
    },
    marketingDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: () => {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        return oneWeekAgo.toISOString().split('T')[0];
      }
    }
  }, {
  freezeTableName: true,
  timestamps: false 
});
  module.exports = Product;