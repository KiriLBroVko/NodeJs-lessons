var EventEmitter = require('event').EventEmitter;

var db = new EventEmitter();
//  Может быть такое, когда отключают макс. кол-во обработчиков setMaxListeners(0)
//  предпологая что много кто может быть подписаным на эти События.
//  Если отменяем, тогда надо и убрать Оброботчики, а Если нет, тогда NODA будет рости в памяти.
//  Определить эти утечки достаточно проблематично, но может помочь Модуль heapdump.
//  Он делает снимок памяти в node.js и потом анализирует его в chrome 
 
function Request() {
    var self = this;

    this.bigData = new Array(1e6).join('*');

    this.send = function(data) {
        console.log(data);
    };

    function onData(info) {
        self.send(info);
    }

    this.end = function() {
        db.removeListener('data', onData);
    };

    db.on('data', onData);
}
  
setInterval(function() {
    //  heapdump
    var request = new Request();
    //...
    request.end();//    Вызов Метода End()
    console.log(process.memoryUsage().heapUsed);
    console.log(db);
}, 200);
