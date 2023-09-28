const { Book } = require('../models');

exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating book' });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error getting books' });
  }
};

exports.getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error getting book' });
  }
};

exports.updateBook = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Book.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedBook = await Book.findByPk(id);
      return res.status(200).json(updatedBook);
    }
    return res.status(404).json({ error: 'Book not found' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating book' });
  }
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Book.destroy({
      where: { id },
    });
    if (deleted) {
      return res.status(204).send('Book deleted');
    }
    return res.status(404).json({ error: 'Book not found' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting book' });
  }
};
