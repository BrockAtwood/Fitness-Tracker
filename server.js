//required materials and boiler plate
//Unit 18 Activity #15

//dependencies from package.json
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//express app
const app = express();
//PORT boiler for heroku later, from previous activity #25/#26
const PORT = process.env.PORT || 3131;

//Unit 18, Activity #15 (not needed)
// const db = require("../models");

//Middleare for morgan dependency
app.use(logger("dev"));

// Middleware for parsing JSON and urlencoded form data, from activity #26
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//required routes (WHICH I FORGOT AND STUGGLED TO FIND MY ERROR)
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

//app listener for connection
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
