const { Book } = require('../models');

describe('Book model', () => {
  it('should create a new book', async () => {
    const bookData = {
      title: 'Designing Data intensive Applications',
      author: 'Mazen Sayed',
      isbn: '1234567890',
      quantity: 5,
      shelfLocation: 'A1',
    };

    const book = await Book.create(bookData);

    expect(book.title).toEqual('Designing Data intensive Applications');
    expect(book.author).toEqual('Mazen Sayed');
    expect(book.isbn).toEqual('1234567890');
    expect(book.quantity).toEqual(5);
    expect(book.shelfLocation).toEqual('A1');
  });

  it('should not create a book without a title', async () => {
    const bookData = {
      author: 'Mazen Sayed',
      isbn: '1234567890',
      quantity: 5,
      shelfLocation: 'A1',
    };
  
    try {
      await Book.create(bookData);
    } catch (error) {
      expect(error.name).toEqual('SequelizeValidationError');
      expect(error.message).toContain('Book.title cannot be null');
    }
  });  
});
