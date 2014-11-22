var express = require('express');
var julia = require('node-julia')
var app = express();


app.get('/', function(req, res){
res.json({'message': 'Welcome to the basic JuliaDroid backend. Hit /api/0.1/compute with a Julia expression, for best results.'});
});

var server = app.listen(3000, function() {
console.log('The JuliaDroid backend is now listening on port %d', server.address().port);
});