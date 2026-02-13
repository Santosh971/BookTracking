const Issue = require("../models/issue.model");
const Book = require("../models/book.model");
const ApiResponse = require("../util/ApiResponse");


const addIssue = async (data) => {
    const { user, book } = data;

    const bookDoc = await Book.findById(book);
    if (!bookDoc) {
        return ApiResponse.notFound("Book Not Found");
    }

    if (bookDoc.availableCopies <= 0) {
        return ApiResponse.badRequest("No copies available");
    }

    // Decrease stock
    bookDoc.availableCopies -= 1;
    await bookDoc.save();

    // Create issue record
    const issue = await Issue.create({
        user,
        book,
        status: "ISSUED"
    });

    return ApiResponse.created(issue, "Book issued successfully");
};

const returnBook = async (data) => {
    const { user, book } = data;

    // Find active issue
    const issue = await Issue.findOne({
        user,
        book,
        status: "ISSUED"
    });

    if (!issue) {
        return ApiResponse.notFound("No active issue found for this book");
    }

    const bookDoc = await Book.findById(book);
    if (!bookDoc) {
        return ApiResponse.notFound("Book Not Found");
    }

    // Update issue
    issue.status = "RETURNED";
    issue.returnDate = new Date();
    await issue.save();

    // Increase stock
    bookDoc.availableCopies += 1;
    await bookDoc.save();

    return ApiResponse.ok(issue, "Book returned successfully");
};


const getAllIssue = async () => {

    const issueBoks = await Issue.find();
    return ApiResponse.ok(issueBoks, "All Issue Books");
}


const updateIssue = async (data) => {
    const issue = await Issue.findById(data.id);
    if (!issue) {
        return ApiResponse.notFound("Book Not Found");
    }

    const updateIssue = await Issue.findByIdAndUpdate(
        data.id,
        {
            $set: data,
        },
        {
            new: true,
        }
    )


    if (!updateIssue) {
        return ApiResponse.badRequest(updateIssue, "Bad Request for Issue Update");
    }

    return ApiResponse.ok(updateIssue, "Isuue Update Successfully");

}


const getAllIssueByUserId = async (userId) => {
    const issues = await Issue.find({
        userId,
    })
    return ApiResponse.ok(issues, "All Issues By UserId");
}
const getAllIssueByBookId = async (bookId) => {
    const issues = await Issue.find({
        bookId,
    })

    return ApiResponse.ok(issues, "All Issues By Book Id")

}


module.exports = { addIssue, returnBook, getAllIssue, getAllIssueByBookId, getAllIssueByUserId, updateIssue }