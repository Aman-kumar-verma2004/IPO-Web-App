const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const IPO = sequelize.define('IPO', {
  company: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  priceBand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lotSize: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sector: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  openDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  closeDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  rhpLink: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'ipos',
  timestamps: true, // adds createdAt and updatedAt
});

module.exports = IPO;
