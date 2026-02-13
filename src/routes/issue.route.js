const router = require("express").Router();
const c = require("../controllers/issue.controller");
const { route } = require("./author.route");

router.post("/addIssue", c.addIssue);
router.put("/updateIssue", c.updateIssue);
router.get("/getAllIssue", c.getAllIssue);
router.get("/getAllIssueByUserId/:userId", c.getAllIssueByUserId);
router.get("/getAllIssueByBookid/:bookId", c.getAllIssueByBookId);
router.put("/returnBook", c.returnBook);
module.exports = router;