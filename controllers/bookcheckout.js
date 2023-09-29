const { BookCheckout, Book } = require('../models');
const Sequelize = require('sequelize');


exports.checkoutBook = async (req, res) => {
  try {
    const { bookId, borrowerId } = req.body;

    const dueDate = calculateDueDate();

    await BookCheckout.create({
      bookId,
      borrowerId,
      checkoutDate: new Date(),
      dueDate,
      returned: false,
    });

    await Book.update({ available: false }, { where: { id: bookId } });

    res.status(201).json({ message: 'Book checked out successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};


function calculateDueDate() {
    const checkoutPeriodInDays = 14; // Assumption, change it to 0 for testing.
    const currentDate = new Date();
    const dueDate = new Date(currentDate);
    dueDate.setDate(currentDate.getDate() + checkoutPeriodInDays);
    return dueDate;
  }
  
exports.listOverdueBooks = async (req, res) => {
  try {
    const currentDate = new Date();

    const overdueBooks = await BookCheckout.findAll({
      where: {
        dueDate: {
          [Sequelize.Op.lt]: currentDate,
        },
        returned: false,
      },
      include: [Book],
    });

    res.json(overdueBooks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};
