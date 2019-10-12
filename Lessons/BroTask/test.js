var express = require('express');
var app = express();//  call as function
var server = app.listen(3000);// Will track our port

app.get('/Array', LoopArray);

app.post('/Array', LoopArray);

function LoopArray(_req, res) {
    var arr = [23, "Nodejs", true, "12"];
    console.log("get");
    res.json(arr);
}