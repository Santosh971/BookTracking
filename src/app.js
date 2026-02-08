const express = require("express");
const app = express();


app.use(express.json());

// routes

app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/user", require("./routes/user.route"))
app.use("/api/author", require("./routes/author.route"));
app.use("/api/book", require("./routes/book.route"));
module.exports = app;










