const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello From Node API server update");
});


mongoose
  .connect(
    "mongodb+srv://zubchevskiy:2UrOa75mBlNo5OwZ@node-projects-backend.9mzl5.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to the databese");
  })
  .catch(() => {
    console.log("Connection failed");
    console.error();
  });

// ==== continue from 29min
