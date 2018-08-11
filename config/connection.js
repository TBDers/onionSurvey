// connection information for MySQL 

var mysql = require("mysql");


var connection = mysql.createConnection({
    use_env_variable: "JAWSDB_URL",
    user: 'zlmhbjv0xtosa0u4',
    password: 'idpcjoczsbm1e0ym',
    port: 3306,
    dialect: 'mysql',
    host: 'ixqxr3ajmyapuwmi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com'

});


// var connection = mysql.createConnection(process.env.JAWSDB_URL);

module.exports = connection;