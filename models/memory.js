const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class memory extends Model {}

memory.init(
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
    description: {
        type: DataTypes.STRING, 
        allowNull: false,
      },
    MSRP: {
      type: DataTypes.DECIMAL, //ex 59.99 - best option?
      allowNull: false,
    },
    ourPrice: {
        type: DataTypes.DECIMAL, //ex 59.99
        allowNull: false,
      },
    storageCapacity: {
        type: DataTypes.STRING  //ex 500 GB
    },
  },
  {sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'memory',
  }
);

module.exports = memory;