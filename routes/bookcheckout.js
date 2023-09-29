const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/bookcheckout');
const { checkoutBookValidation, validate } = require('../middlewares/validation');

router.post('/', checkoutBookValidation, validate, checkoutController.checkoutBook);
router.get('/overdue-books', checkoutController.listOverdueBooks);

module.exports = router;
