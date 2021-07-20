const mysql = require('mysql');

// MySQL Connection
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "P@ssword1",
    database: "sonia",
    port: 3306,
  });

module.exports = conn;  