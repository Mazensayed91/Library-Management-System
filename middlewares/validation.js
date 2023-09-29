const { body, validationResult } = require('express-validator');

const createBookValidation = [
  body('title').isString().notEmpty(),
  body('author').isString().notEmpty(),
  body('isbn').isString().notEmpty(),
  body('quantity').isInt({ min: 0 }),
  body('shelfLocation').isString().notEmpty(),
];

const createBorrowerValidation = [
    body('name').isString().notEmpty(),
    body('email').isEmail()
  ];

  const checkoutBookValidation = [
    body('bookId').isInt({ min: 1 }),
    body('borrowerId').isInt({ min: 1 })
  ];
  

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { createBookValidation, createBorrowerValidation, checkoutBookValidation, validate };