require("dotenv").config;

const app = require("./app");
const conectDb = require("./config/db");


conectDb();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`app is running On Port No ${PORT}`));






