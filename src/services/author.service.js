const mongoose = require("mongoose");
const ApiResponse = require("../util/ApiResponse");
const Author = require("../models/author.model");

const addAthor = async (data) => {

    const author = await Author.create(data);

    if (!author) {
        return ApiResponse.badRequest();
    }


    return ApiResponse.created(author, "Author is created Successfully");
}

const getAuthorById = async (id) => {
    const author = await Author.findById(id);

    if (!author) {
        return ApiResponse.notFound("Author Not Found")
    }


    return ApiResponse.ok(author, "Author Found Successfully")
}


const getAllAuthors = async () => {
    const authors = await Author.find();

    return ApiResponse.ok(authors, "Authors List");
}

const updateAuthor = async (data) => {
    const id = data.id;
    const author = await Author.findById(id);

    if (!author) {
        return ApiResponse.notFound("Author Not Found")
    }

    const updateUser = await Author.findByIdAndUpdate(
        id,
        {
            $set: data,
        },
        {
            new: true
        }
    )

    if (!updateUser) {
        return ApiResponse.badRequest("Bad author request");
    }

    return ApiResponse.ok(updateUser, "Author Update Successfully");

}

const deleteAuthorById = async (id) => {

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return ApiResponse.error("Id Format is wrong");
    }

    const author = await Author.findByIdAndDelete(id);

    if (!author) {
        return ApiResponse.notFound("Author Not Found");
    }

    return ApiResponse.ok(author, "Author Delete Successfully");
}



module.exports = { addAthor, getAuthorById, getAllAuthors, updateAuthor, deleteAuthorById };