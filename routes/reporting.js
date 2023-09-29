const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reporting');

router.get('/generate-periodic-borrowing-report', reportController.generatePeriodicBorrowingProcessesCsvReport);
router.get('/generate-overdue-borrows-csv-report', reportController.generateOverdueBorrowsCsvReport);
router.get('/generate-last-month-borrowing-processes-csv-report', reportController.generateLastMonthBorrowingProcessesCsvReport);

module.exports = router;
