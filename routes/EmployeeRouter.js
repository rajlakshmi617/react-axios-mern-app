const express = require("express");
const EmpRouter = express.Router();
const Employee = require("../models/EmployeModel");
// For adding the data
EmpRouter.route("/add").post(function (req, res) {
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
// For updating the data
EmpRouter.route("/update/:id").post(function (req, res) {
  Employee.findById(req.params.id, function (err, emp) {
    if (!emp) {
      res.status(404).send('Data not found');
    } else {
      emp.name = req.body.name,
        emp.sal = req.body.sal,
        emp.address = req.body.address
      emp.save().then(emps => {
        res.json('Employee updated successfully')
      }).catch(err => {
        res.status(400).send("unable to save to database");
      })
    }
  })
});

// For deleting the data
EmpRouter.route("/delete/:id").get(function (req, res) {
  Employee.findByIdAndRemove({ _id: req.params.id }, function (err, emp) {
    if (err) {
      res.json(err);
    } else {
      res.json('Successfully removed');
    }
  })
})
// For geeting the data
EmpRouter.route("/").get(function (req, res) {
  Employee.find(function (err, emps) {
    if (err) {
      console.log(err);
    } else {
      res.json(emps);
    }
  });
});
// For geeting the data on id basis
EmpRouter.route("/:id").get(function (req, res) {
  let id = req.params.id;
  Employee.findById(id, function (err, emps) {
    if (err) {
      console.log(err);
    } else {
      res.json(emps);
    }
  });
});

module.exports = EmpRouter;
