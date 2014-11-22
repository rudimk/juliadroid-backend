var express = require('express');
var julia = require('node-julia')
var app = express();


app.get('/', function(req, res){
res.json({'message': 'Welcome to the basic JuliaDroid backend. Hit /api/0.1/compute with a Julia expression, for best results.'});
});


app.get('/api/0.1/compute/:julia_expr', function(req, res){
	julia_expr_result = julia.eval(req.param("julia_expr"));
	res.json({'result': julia_expr_result});
});

var server = app.listen(3000, function() {
console.log('The JuliaDroid backend is now listening on port %d', server.address().port);
});