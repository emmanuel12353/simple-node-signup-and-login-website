const express = require("express");
const db = require("./routes/db-config.js");
const app = express();
const cookie = require("cookie-parser");
const PORT = process.env.port || 3306
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/css", express.static(__dirname + "no/public/css"));
app.set("views engine", "ejs");
app.set("views", "./views");
app.use(cookie());
app.use(express.json());

app.use("/", require("./routes/pages"))
app.set("/api", require("./controller/auth"));  
app.listen(PORT);