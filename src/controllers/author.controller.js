const authorService = require("../services/author.service");
const ApiResponse = require("../util/ApiResponse");
const mongoose = require("mongoose");


exports.addAuthor = async (req, res) => {
    const author = await authorService.addAthor(req.body);
    return res.status(author.statusCode).json(author);
}

exports.getAuthorById = async (req, res) => {
    const result = !mongoose.Types.ObjectId.isValid(req.params.id) ? ApiResponse.badRequest("Invalid Id Format") : null;

    if (result != null) {
        return res.status(result.statusCode).json(result);
    }
    const author = await authorService.getAuthorById(req.params.id);
    return res.status(author.statusCode).json(author);
}

exports.getAllAuthors = async (req, res) => {
    const authors = await authorService.getAllAuthors();
    return res.status(authors.statusCode).json(authors);
}

exports.updateAuthor = async (req, res) => {
    const author = await authorService.updateAuthor(req.body);
    return res.status(author.statusCode).json(author);
}

exports.deleteAuthorById = async (req, res) => {
    const author = await authorService.deleteAuthorById(req.params.id);
    return res.status(author.statusCode).json(author);
}