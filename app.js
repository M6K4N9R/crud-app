const express = require("express");
const mongoose = require("mongoose");
const app = express();


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// routes
app.get("/", (req, res) {
  res.json({mssg: "Welcome to the API"});
});


// mongoose
//   .connect(
//     "mongodb+srv://zubchevskiy:2UrOa75mBlNo5OwZ@node-projects-backend.9mzl5.mongodb.net/?retryWrites=true&w=majority&appName=node-projects-backend"
//   )
//   .then(() => {
//     console.log("Connected to the databese");
//   })
//   .catch(() => {
//     console.log("Connection failed");
//     console.error();
//   });

// // ==== continue from 29min
