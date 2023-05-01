const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class memory extends Model {}

memory.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
        type: DataTypes.VARCHAR(250), 
        allowNull: false,
      },
    MSRP: {
      type: DataTypes.STRING, //ex 59.99 - best option?
      allowNull: false,
    },
    ourPrice: {
        type: DataTypes.STRING, //ex 59.99
        allowNull: false,
      },
    quantity: {
        type: DataTypes.INTEGER, 
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