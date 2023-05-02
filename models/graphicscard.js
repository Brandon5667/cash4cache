const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class graphicsCard extends Model {}

graphicsCard.init(
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
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    ourPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    clockSpeed: {
        type: DataTypes.STRING
    },
  },
  {sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'graphicsCard',
  }
);

module.exports = graphicsCard;
