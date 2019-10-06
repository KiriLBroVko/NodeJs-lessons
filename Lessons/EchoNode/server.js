//  http://127.0.0.1/echo?message=Hello -> Hello
//  1)Эхо сервер(явл. прототипом релального приложения),т.е.
//  получают запросы различного вида и выдают им ответы 
//  2)Работа с заголовками

var http = require('http');
var url = require('url');


var server = new http.Server(function(req, res) {
    
    console.log(req.headers);
    //console.log(req.method, req.url);
    
    var urlParsed = url.parse(req.url, true);

    //console.log( urlParsed.query.message);

    if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
        // Ставим заголовок
        res.setHeader('Cache-control', 'no-cache'); //чтобы не кешировались резы ответа сервера 
        //res.statusCode = 200;   //  Ok
        res.end(urlParsed.query.message);
    } else {
        res.statusCode = 404;   //  Not found
        res.end("Page not found");
    }
});
//  Для работы с Заголовками у Res есть 2 метода принципиально разных
//  setHeader или removeHeader, но заголовоки будут отправленны не сразу, когда поставил setHeader,
//  а с ближащей записью каких-то данных

//  2й способ управления Заголовками назв. Явный
//  Example: res.writeHead(200, "OK", {'Cache-control': 'no-cache'});
//  1-ое это статус, а 2-ое это обьект заголовка
//  Но здесь Заголовки в ответ пишутся тут же, не ожидая ближайшей записи
server.listen(1337, '127.0.0.1');