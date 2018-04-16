var mysql = require('mysql');

var connection = mysql.createConnection({
    PORT: 8889,
    host: 'localhost',
    user: 'root',
    password: "root",
    database: 'burger_db'
});

connection.connect(function(err) {
    if (err) {
        throw err;
    }
});

module.exports = connection;