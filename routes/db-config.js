var mysql = require('mysql');
var dotenv = require("dotenv").config();
var db = mysql.createConnection({
  host:process.env.DATABASE_HOST,
  user:process.env.DATABASE_NAME,
  password:process.env.DATABASE_PASS,
  database:process.env.DATABASE,
})
module.exports = db;