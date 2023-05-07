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
        type: DataTypes.TEXT,
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
    clockSpeed: {
        type: DataTypes.STRING
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
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
