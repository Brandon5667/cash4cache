const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class CPU extends Model { }

CPU.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ourPrice: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isDecimal: true
      },
    }, 
    MSRP: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        isDecimal: true
      },
    }, 
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
    },
    cores: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    threads: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cpu',
  }
);
module.exports = CPU;