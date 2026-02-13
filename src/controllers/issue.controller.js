const mongoose = require("mongoose")
const IssueService = require("../services/issue.service")


exports.addIssue = async (req, res) => {
    const issue = await IssueService.addIssue(req.body);
    return res.status(issue.statusCode).json(issue);
}


exports.returnBook = async (req, res) => {
    const returnBook = await IssueService.returnBook(req.body);
    return res.status(returnBook.statusCode).json(returnBook);
}
exports.getAllIssue = async (req, res) => {
    const issue = await IssueService.getAllIssue();
    return res.status(issue.statusCode).json(issue);
}

exports.getAllIssueByBookId = async (req, res) => {
    const issues = await IssueService.getAllIssueByBookId(req.params.bookId);
    return res.status(issues.statusCode).json(issues);
}

exports.getAllIssueByUserId = async (req, res) => {
    const issues = await IssueService.getAllIssueByUserId(req.params.userId);
    return res.status(issues.statusCode).json(issues);
}

exports.updateIssue = async (req, res) => {
    const issues = await IssueService.updateIssue(req.body);
    return res.status(issues.statusCode).json(issues);
}