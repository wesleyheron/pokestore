var express		= require("express");
var bodyParser	= require("body-parser");
var app			= express();
var path		= require("path");

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.all('/*', function(req, res) {
	res.sendFile(path.resolve('public/index.html'));
});

module.exports = app;