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
// app.get('/Array', function(_req, res){
    // var arr = [23, "Nodejs", true, "12"];
    // console.log("get");
    // res.json(arr);
// });
// app.post('/Array', function(_req, res) {
    // var arr = [23, "Nodejs", true, "12"];
    // console.log("get");
    // res.json(arr);
// });

// var arr = [23, "Nodejs", true, "12"];
// for (var i = 0; 0 <= arr.length - 1; i++) 
// {
//     console.log(arr[i]);
// }
// arr.forEach((item, index, array) => {
//     console.log(`${item} имеет позицию ${index} в ${array}`)
// });