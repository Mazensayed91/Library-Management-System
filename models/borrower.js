'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Borrower extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }
  Borrower.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      registeredDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Borrower',
      indexes: [
        {
          fields: ['id'],
        },
      ],
    }
  );
  return Borrower;
};
