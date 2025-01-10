const mongoose = require("mongoose");

const connect = mongoose.connect(
  "mongodb+srv://zubchevskiy:2UrOa75mBlNo5OwZ@node-projects-backend.9mzl5.mongodb.net/basic-login"
);

connect
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Database is not connected");
  });

// Schema

const LoginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Collection

const collection = new mongoose.model("users", LoginSchema);

module.exports = collection;
