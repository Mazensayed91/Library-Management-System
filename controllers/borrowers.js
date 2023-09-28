const { Borrower } = require('../models');

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
  try {
    const borrowers = await Borrower.findAll();
    res.status(200).json(borrowers);
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
