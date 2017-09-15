const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.sendfile('index.html', {root: __dirname}); 
})

app.listen(8082, function () {
  console.log('Example app listening on port 8082!')
})