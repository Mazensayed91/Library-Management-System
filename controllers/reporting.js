// controllers/reportController.js
const { BookCheckout, Book, Borrower } = require('../models');
const { createObjectCsvWriter } = require('csv-writer');
const Sequelize = require('sequelize');
const path = require('path');

const generateCsvReport = async (data, filename, headers, res) => {
  try {
    const filePath = path.join(__dirname, '..', 'reports', filename);

    const csvWriter = createObjectCsvWriter({
      path: filePath,
      header: headers,
    });

    await csvWriter.writeRecords(data);

    res.attachment(filePath);
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

exports.generateCsvReport = generateCsvReport;

exports.generateOverdueBorrowsCsvReport = async (req, res) => {
  // Calculate the start and end dates for the last month
  const currentDate = new Date();
  const lastMonthStartDate = new Date(currentDate);
  lastMonthStartDate.setMonth(currentDate.getMonth() - 1);
  const lastMonthEndDate = new Date(currentDate);

  // Fetch overdue borrows within the last month
  const overdueBorrows = await BookCheckout.findAll({
    where: {
      dueDate: {
        [Sequelize.Op.lt]: lastMonthEndDate,
        [Sequelize.Op.gte]: lastMonthStartDate,
      },
      returned: false,
    },
    include: [Book, Borrower],
  });

  const data = overdueBorrows.map((record) => ({
    bookTitle: record.Book.title,
    borrowerName: record.Borrower.name,
    dueDate: record.dueDate,
  }));

  generateCsvReport(data, 'overdue_borrows_report.csv', [
    { id: 'bookTitle', title: 'Book Title' },
    { id: 'borrowerName', title: 'Borrower Name' },
    { id: 'dueDate', title: 'Due Date' },
  ], res);
};

exports.generateLastMonthBorrowingProcessesCsvReport = async (req, res) => {
  // Calculate the start and end dates for the last month
  const currentDate = new Date();
  const lastMonthStartDate = new Date(currentDate);
  lastMonthStartDate.setMonth(currentDate.getMonth() - 1);
  const lastMonthEndDate = new Date(currentDate);

  // Fetch borrowing processes within the last month
  const borrowingProcesses = await BookCheckout.findAll({
    where: {
      checkoutDate: {
        [Sequelize.Op.between]: [lastMonthStartDate, lastMonthEndDate],
      },
    },
    include: [Book, Borrower],
  });

  const data = borrowingProcesses.map((record) => ({
    bookTitle: record.Book.title,
    borrowerName: record.Borrower.name,
    checkoutDate: record.checkoutDate,
  }));

  generateCsvReport(data, 'last_month_borrowing_processes_report.csv', [
    { id: 'bookTitle', title: 'Book Title' },
    { id: 'borrowerName', title: 'Borrower Name' },
    { id: 'checkoutDate', title: 'Checkout Date' },
  ], res);
};

exports.generatePeriodicBorrowingProcessesCsvReport = async (req, res) => {
  try {
    // Fetch borrowing process data for the specified period
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;

    const borrowingData = await BookCheckout.findAll({
      where: {
        checkoutDate: {
          [Sequelize.Op.between]: [startDate, endDate],
        },
      },
      include: [Book, Borrower],
    });

    const data = borrowingData.map((record) => ({
      bookTitle: record.Book.title,
      borrowerName: record.Borrower.name,
      checkoutDate: record.checkoutDate,
    }));

    generateCsvReport(data, 'periodic_borrowing_report.csv', [
      { id: 'bookTitle', title: 'Book Title' },
      { id: 'borrowerName', title: 'Borrower Name' },
      { id: 'checkoutDate', title: 'Checkout Date' },
    ], res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};
