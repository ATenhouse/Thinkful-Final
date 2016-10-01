var express = require('express');
var app = express();
app.use(express.static('public'));

var def_port = process.env.PORT;
app.listen(def_port);

module.exports = {
	app: app
}