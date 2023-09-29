const express = require('express');
const router = express.Router();
const bookController = require('../controllers/books');
const { createBookValidation, validate } = require('../middlewares/validation');


router.post('/', createBookValidation, validate, bookController.createBook);
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
