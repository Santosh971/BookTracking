const mongoose = require("mongoose");
const ApiResponse = require("../util/ApiResponse");


const Book = require("../models/book.model");

const createBook = async (data) => {
    const { title, author, totalCopies } = data;
    const book = await Book.create({
        title,
        author,
        totalCopies,
        availableCopies: totalCopies
    });

    if (!book) {
        return ApiResponse.badRequest("Book Not Created");
    }

    return ApiResponse.created(book, "Book Created Successfully");

}

const getAllBooks = async () => {
    const books = await Book.find().populate("author");
    return ApiResponse.ok(books, "BookS List");
}

const getBookById = async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return ApiResponse.error("Id Format is Wrong");
    }
    const book = await Book.findById(id).populate("author");

    if (!book) {
        return ApiResponse.notFound("Book Not Found");
    }

    return ApiResponse.ok(book, "Book Found Successfully");

}


const updateBook = async (data) => {
    const book = await Book.findById(data.id);
    if (!book) {
        return ApiResponse.notFound("Book Not found")
    }

    const updateBook = await Book.findByIdAndUpdate(
        data.id,
        {
            $set: data,
        },
        {
            new: true
        }
    )

    if (!updateBook) {
        return ApiResponse.badRequest();
    }
    return ApiResponse.ok(updateBook, "Book Update Successfully");
}



const deleteBookById = async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return ApiResponse.error("Id Format is Wrong");
    }
    const book = await Book.findByIdAndDelete(id);

    if (!book) {
        return ApiResponse.notFound("Book Not Found")
    }

    return ApiResponse.ok(book, "Book Deleted Successfully");

}



module.exports = { createBook, getAllBooks, getBookById, updateBook, deleteBookById };