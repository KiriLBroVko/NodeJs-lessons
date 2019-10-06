//  Последняя Особенность EventEmitter это встроенное средство 
//  для борьбы с Утечкой Памяти

//  В данном коде у нас при запуске будет происходить Утечка памяти, т.к.
//  у EventEmitter по умолчанию maxListeners: 10, а у нас они превышают, то
//  поэтому перепишем код 
//  ? Что можно сделать ? Как вариант удалить обработчики на собитися DATA,
//  после обработки запроса Request---Смотрим в leak2.js
function Request() {
    var self = this;

    this.bigData = new Array(1e6).join('*');

    this.send = function(data) {
        console.log(data);
    };

    this.onError = function() {
        self.send("Извините, у нас проблемы");
    };
}
//  Добавили обьект источника данных, к-рый сможет посылать инфо,
//  к-рую  Request будет отсылать клиенту
var EventEmitter = require('event').EventEmitter;
var db = new EventEmitter();

function Request() {
    var self = this;

    this.bigData = new Array(1e6).join('*');

    this.send = function(data) {
        console.log(data);
    };
//  спец св-во обекта db, где сохраняется и находятся все
//  обработчики, которые были назначены и когда делаем вызов emit они оттуда беруться и вызываются
    db.on('data', function(info) {
        self.send(info);
    });
}
//  Каждые 200мс создаётся новый обьект типа Request(в реальной жизни это может быть запрос от клиента)
//  и выводит текущее поедание памяти
setInterval(function() {
    var request = new Request();
    console.log(process.memoryUsage().heapUsed);
}, 200);

