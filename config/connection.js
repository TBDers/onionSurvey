// connection information for MySQL 

var mysql = require("mysql");





// var connection = mysql.createConnection({
//     use_env_variable: "JAWSDB_URL",
//     user: "rzyza88dd1zanzqr",
//     password: "je3mokf5ki6y8wfo",
//     port: "3306",
//     dialect: "mysql"
// host: "mnwax9mxzow0k7hi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Terr8Y**0410",
    database: "onion_db"
});

module.exports = connection;