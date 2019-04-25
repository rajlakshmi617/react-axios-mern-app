const express = require("express");
// lets create an instance of express using express
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = 4000;
const cors = require("cors");
const config = require("./DB");
const EmpRouter = require("./routes/EmployeeRouter");

mongoose.connect(config.DB).then(
  () => {
    console.log("Database is connected");
  },
  err => {
    console.log("Can not connect to the database" + err);
  }
);
// setting midleware to your express app
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/emproute", EmpRouter);

app.listen(PORT, function() {
  console.log("Server is running on Port: ", PORT);
});
