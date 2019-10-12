// var express = require('express');
// var fruits = require('./db');
// console.log(fruits);
// //  Module(require('express');) 'll give us function and use it in (app) 
// var app = express();//  call as function
// var server = app.listen(3000);// Will track our port
// function ctr(_req, res) {
//     console.log("Get");
//     res.json(fruits)
// }
// app.get('/fruits', ctr);
// app.post('/fruits', function(_req, res) {
//     console.log("Post");
//     res.json(fruits);
// });
// написать роут на пост запроса 
// асихронка(промисы)
// контроллер и роут шо це
// написать функцию которая принимая массив и выводи каждый эелемт в концоль 
var express = require('express');
var arr = require('./array');
var app = express();//  call as function
var server = app.listen(3000);// Will track our port

app.get('/Array', function(_req, res){
    console.log("Get");
    newFunction(res);
});

app.post('/Array', function(_req, res) {
    console.log("Post");
    newFunction(res);
});

function newFunction(res) {
    for (let i = 0; 0 <= arr.lenght - 1; i++) {
        res.json(arr[i]);
    }
}
