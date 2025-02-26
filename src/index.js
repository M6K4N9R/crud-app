const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const collection = require("./config");
const { log } = require("console");

const app = express();
// convert data into json format
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// use EJS as the view engine

app.set("view engine", "ejs");

// static file

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

// Register User

app.post("/signup", async (req, res) => {
  let data = {
    name: req.body.username, // username is the "name" attribute of the HTML file <form><input type="text">
    password: req.body.password, // username is the "name" attribute of the HTML file <form><input type="password">
  };

  //check if user already exists
  const existingUser = await collection.findOne({ name: data.name });

  if (existingUser) {
    res.send("User already exists. Please choose a different username.");
  } else {
    // hash the password using bcrypt
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);

    data = { ...data, password: hashedPassword }; // Replace original password with hashed one.

    const userData = await collection.insertMany(data);
    console.log(userData);
  }
});

// Login User

app.post("/login", async (req, res) => {
  try {
    const check = await collection.findOne({ name: req.body.username });
    if (!check) {
      return res.send("User name is not found");
    }
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      check.password
    );
    if (isPasswordMatch) {
      return res.render("home");
    } else {
      return res.send("Wrong Password");
    }
  } catch {
    return res.send("Wrong details");
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});

// continue @ 17:37
// https://www.youtube.com/watch?v=O5kh3sTVSvA
