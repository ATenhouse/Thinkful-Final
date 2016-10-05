var express = require('express');
var app = express();
app.use(express.static('public'));

var def_port = process.env.PORT || 3000;

console.log("Environmental port is " + def_port);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});
app.get('/detail', function(req, res){
  res.sendFile(__dirname + '/public/detail.html');
});
app.get('/login', function(req, res){
  res.sendFile(__dirname + '/public/login.html');
});

app.listen(def_port);

module.exports = {
	app: app
}