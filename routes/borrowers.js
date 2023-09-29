const express = require('express');
const router = express.Router();
const borrowerController = require('../controllers/borrowers');
const { createBorrowerValidation, validate } = require('../middlewares/validation');

router.post('/', createBorrowerValidation, validate, borrowerController.createBorrower);
router.get('/', borrowerController.getAllBorrowers);
router.get('/:id', borrowerController.getBorrowerById);
router.put('/:id', borrowerController.updateBorrower);
router.delete('/:id', borrowerController.deleteBorrower);

module.exports = router;
