// connection information for MySQL 

var mysql = require("mysql");





// var connection = mysql.createConnection({
//     use_env_variable: "JAWSDB_URL",
//     user: "rzyza88dd1zanzqr",
//     password: "je3mokf5ki6y8wfo",
//     port: "3306",
//     dialect: "mysql"
// host: "mnwax9mxzow0k7hi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",

var connection = mysql.createConnection(process.env.JAWSDB_URL);


module.exports = connection;