"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var mysql = require("mysql");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};


var connection = mysql.createConnection({
  host: config.host,

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: config.username,

  // Your password
  password: config.password,
  database: "onionDB"
});


function test() {
  var query = "INSERT INTO onionDB.adminData (department, email, ans1) VALUES ('engineering', 'engineer@engineer.com', '5');";
  connection.query(query, function(err, res) {
  
      console.log(res);
    
    runSearch();
  });
}

// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable]);
// } else {
//   var sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
//   );
// }

// fs.readdirSync(__dirname)
//   .filter(function(file) {
//     return (
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//     );
//   })
//   .forEach(function(file) {
//     var model = sequelize.import(path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(function(modelName) {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

module.exports = db;
