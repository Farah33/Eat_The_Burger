var mysql = require('mysql');
var connection;
//create the connection
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);

}else{
    connection = mysql.createConnection({
    host:"localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "burgers_db"
});
};
//connect and log the connection threadId
connection.connect(function(err,data) {
    if (err) 
        throw err;
        console.log("connection ad id:" + connection.threadId)
    
});
//Export the connection
module.exports = connection;