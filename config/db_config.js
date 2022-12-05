'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'practice-db.c4w4fmpdi3fz.ap-south-1.rds.amazonaws.com',
  user     : 'admin',
  port     : 3306,
  password : 'texple123',
  database : 'sys'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;