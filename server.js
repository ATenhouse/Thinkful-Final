var express = require('express');
var app = express();
app.use(express.static('public'));

var def_port = process.env.PORT;

console.log("Environmental port is " + def_port);

app.listen(def_port);

module.exports = {
	app: app
}