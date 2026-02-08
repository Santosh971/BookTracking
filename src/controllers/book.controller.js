const bookService = require("../services/book.service");

exports.addBook = async (req, res) => {
    const book = await bookService.createBook(req.body);
    return res.status(book.statusCode).json(book);
}

exports.getBookById = async (req, res) => {
    const book = await bookService.getBookById(req.params.id);
    return res.status(book.statusCode).json(book);
}


exports.getAllBooks = async (req, res) => {
    const books = await bookService.getAllBooks();
    return res.status(books.statusCode).json(books);
}

exports.updateBook = async (req, res) => {
    const books = await bookService.updateBook(req.body);
    return res.status(books.statusCode).json(books);
}

exports.deleteBookById = async (req, res) => {
    const book = await bookService.deleteBookById(req.params.id);
    return res.status(book.statusCode).json(book);
}
