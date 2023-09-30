const { Borrower } = require('../models');
const { paginateResults } = require('../utils/pagination');

exports.createBorrower = async (req, res) => {
  try {
    const borrower = await Borrower.create(req.body);
    res.status(201).json(borrower);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating borrower' });
  }
};

exports.getAllBorrowers = async (req, res) => {
    let { page, limit } = req.query;
    // Default values for page and limit
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;
  
    if (page < 1 || limit < 1) {
      return res.status(400).json({ error: 'Invalid page or limit values' });
    }
  
    try {
      const borrowers = await Borrower.findAll();
      const paginatedBorrowers = paginateResults(page, limit, borrowers);
  
      res.status(200).json({
        success: true,
        data: paginatedBorrowers,
        pagination: {
          totalRecords: borrowers.length,
          currentPage: page,
          perPage: limit,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error getting borrowers' });
    }
  };
  

exports.getBorrowerById = async (req, res) => {
  const { id } = req.params;
  try {
    const borrower = await Borrower.findByPk(id);
    if (!borrower) {
      return res.status(404).json({ error: 'Borrower not found' });
    }
    res.status(200).json(borrower);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error getting borrower' });
  }
};

exports.updateBorrower = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Borrower.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedBorrower = await Borrower.findByPk(id);
      return res.status(200).json(updatedBorrower);
    }
    return res.status(404).json({ error: 'Borrower not found' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating borrower' });
  }
};

exports.deleteBorrower = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Borrower.destroy({
      where: { id },
    });
    if (deleted) {
      return res.status(204).send('Borrower deleted');
    }
    return res.status(404).json({ error: 'Borrower not found' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting borrower' });
  }
};
