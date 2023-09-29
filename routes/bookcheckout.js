const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/bookcheckout');

router.post('/', checkoutController.checkoutBook);
router.get('/overdue-books', checkoutController.listOverdueBooks);

module.exports = router;
