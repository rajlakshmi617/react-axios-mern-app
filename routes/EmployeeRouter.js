const express = require("express");
const EmpRouter = express.Router();
const Employee = require("../models/EmployeModel");
// For adding the data
EmpRouter.route("/add").post(function(req, res) {
  const emp = new Employee(req.body);
  emp
    .save()
    .then(serverport => {
      res.json("Employee added successfully");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// For geeting the data
EmpRouter.route("/").get(function(req, res) {
  Employee.find(function(err, emps) {
    if (err) {
      console.log(err);
    } else {
      res.json(emps);
    }
  });
});

module.exports = EmpRouter;
