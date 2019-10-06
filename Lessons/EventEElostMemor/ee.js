//  Демо простейшего применения EE
//  аргументы передаются по цепочке 
//  обработчики срабатывают в том же порядке, в котором назначены

var EventEmitter = require('events').EventEmitter;

var server = new EventEmitter;
//  server.emit('error');// throw TypeError 
//  server.emit('error', new Error());// throw err
//..Специальным образом обрабатывается событие('error'),
//  если где либо происходит event emit of error и у него нету обработчика,
//  то event emit генерирует исключение, к-рое повалит весь процесс

// Метод подписка (on) ("имея события", функция-обработчик)
server.on('request', function(request) {
    request.approved = true;
});

server.on('request', function(request){
    console.log(request);
});
//  Метод (Emit) ('генерирует события', и {передаёт данные}), а данные
//  попадают в функцию-обработчик 
server.emit('request', {from: "Client"});

server.emit('request', {from: "another client"});
//***********************