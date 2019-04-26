const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// Define collection and schema for Employee
const Employee = new Schema(
  {
    name: {
      type: String
    },
    sal: {
      type: Number
    },
    address: {
      type: String
    }
  },
  {
    collection: "emp"
  }
);
module.exports = mongoose.model("Employee", Employee);
