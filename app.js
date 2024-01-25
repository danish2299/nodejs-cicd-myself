const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World bro ')
})

app.listen(3000);