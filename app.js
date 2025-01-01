const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Test')
})

app.listen(3000)