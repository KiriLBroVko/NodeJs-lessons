var http = require('http');
// Will take an object Server
var server = new http.Server();// Может слушать api and port и отвечать на входящие запросы
//  http.Server -> net.Server -> EventEmitter
//  Для того чтобы дать api и port выполняем listen
server.listen(1355, '127.0.0.1');
//  Для ответов на Запросы используем События.. Server is an EventEmitter 
//  и при входящих запросов соответствующее событие инициируется называется Request
//  и его обработчик получает 2 обьекта

//  Переопределяем метод на наш собственный, хотя он сам вызывается node
var emit = server.emit;
server.emit = function(event /*,arg1, arg2,... */) {
    console.log(event);
    emit.apply(server, arguments);
};
var counter = 0;
server.on('request', function(req, res) {
    res.end("Hello world!" + ++counter);//..заканчивает выполнение запроса отсылая фразу
});