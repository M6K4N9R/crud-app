const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");

const app = express();

// use EJS as the view engine

app.set("view engine", "ejs");

const port = 5000;
app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
