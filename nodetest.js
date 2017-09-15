const express = require('express')
const app = express()


app.use(express.static(__dirname));
app.use('/', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile('/pages/home.html', {root: __dirname});
})

app.get('/t', function (req, res){
        res.send(__dirname + '/img')
})

app.listen(8082, function () {
  console.log('Example app listening on port 8082!')
})