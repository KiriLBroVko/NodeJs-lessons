//Lesson6+ 
//1) Object Module;
//2) Module or Application(module.parent);
//3) Module-func (module.exports = function);
//4)Cashing modules;
//5)Location of modules: search order;
//6)Sending parameters: module-fabrica(factory module)


//module.exports = exports = this
var log = require('./logger')(module);
var db = require('./db');
db.connect();

var User = require('./user');//conection to user.js file

function run() {
    var vasya = new User("Vasya");
    var petya = new User("Petya");

    vasya.hello(petya);
    log(db.getPhrase("Run successful"));
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}