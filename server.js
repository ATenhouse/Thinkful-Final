var express = require('express');
var app = express();
app.use(express.static('public'));

var def_port = process.env.PORT || 8080;
app.listen(def_port);

module.exports = {
	app: app
}