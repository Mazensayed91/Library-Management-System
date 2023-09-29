const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BookCheckout extends Model {
    static associate(models) {
      models.BookCheckout.belongsTo(models.Book, { foreignKey: 'bookId' });
      models.BookCheckout.belongsTo(models.Borrower, { foreignKey: 'borrowerId' });
    }
  }

  BookCheckout.init({
    bookId: DataTypes.INTEGER,
    borrowerId: DataTypes.INTEGER,
    checkoutDate: DataTypes.DATE,
    dueDate: DataTypes.DATE,
    returned: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'BookCheckout',
  });

  return BookCheckout;
};
