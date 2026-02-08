const router = require("express").Router();

const c = require("../controllers/author.controller");

router.post("/addAuthor", c.addAuthor);
router.put("/updateAuthor", c.updateAuthor);
router.get("/getAuthorById/:id", c.getAuthorById);
router.get("/getAllAuthors", c.getAllAuthors);
router.delete("/deleteAuthorById/:id", c.deleteAuthorById);
module.exports = router;