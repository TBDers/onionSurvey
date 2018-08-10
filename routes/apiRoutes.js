var db = require("../models");
var path = require("path");
var connection = require("../config/connection.js")

var surveyData = [];

module.exports = function (app) {


  app.get("/api/surveys", function (req, res) {
    var dbQuery = "SELECT * FROM surveys";

    connection.query(dbQuery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });


  app.post("/api/surveys", function (req, res) {
    surveyData.push(req.body);
    res.json(true);
    console.log("Survey Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO surveys (question1, question2, question3) VALUES (?,?,?)";

    connection.query(dbQuery, [req.body.question1, req.body.question2, req.body.question3], function (err, result) {
      if (err) throw err;
      console.log("Survey Successfully Saved!");
      res.end();
    });

  });

};
