'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      // define association here
    }
  }
  Book.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      indexes: [
        {
          unique: true,
          fields: ['title'],
        },
      ],
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      indexes: [
        {
          fields: ['author'],
        },
      ],
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
      indexes: [
        {
          fields: ['isbn'],
        },
      ],
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    shelfLocation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};
