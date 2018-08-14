var db = require("../models");
var path = require('path')
module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/survey.html"));
  });

  app.get("/register", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/register.html"));
  });

  app.get("/data", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/data.html"));
  });

  app.get("/admin", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/admin.html"));
  });



  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   res.sendFile(path.join(__dirname, "./views/view.html"));
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
