const router = require("express").Router();
const c = require("../controllers/book.controller");


router.post("/addBook", c.addBook);
router.put("/updateBook", c.updateBook);
router.get("/getBookById/:id", c.getBookById);
router.delete("/deleteBookById/:id", c.deleteBookById);
router.get("/getAllBooks", c.getAllBooks);

module.exports = router;