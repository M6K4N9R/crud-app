const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello from Node API");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
