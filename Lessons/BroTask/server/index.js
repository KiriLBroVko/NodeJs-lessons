// var fs = require('fs');
// var data = fs.readFileSync('fruits.json');
// var fruits = JSON.parse(data);

var express = require('express');
//  Module(require('express');) 'll give us function and use it in (app) 
var app = express();//  call as function

var server = app.listen(3000);// Will track our port

app.get('/fruits', function(_req, res) {
    res.json([
    {name: 'Ogange', color: 'orange-color'},
    {name: 'Lemon', color: 'yellow-color'},
    {name: 'Watermellon', color: 'green-color'}]);
});


