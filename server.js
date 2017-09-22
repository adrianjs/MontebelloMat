const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname+'/pages')));
app.use('/', express.static(__dirname));

app.get('/', function (req, res){
	res.sendFile('pages/home.html', {root: __dirname})
});

app.listen(8082, function () {
  console.log(__dirname)
  console.log('Montebello foods webserver listening on port 8082!')
})