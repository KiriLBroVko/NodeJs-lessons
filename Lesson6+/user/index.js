//module.exports = exports = this
var db = require('../db');
var log = require('../logger')(module);

function User(name){
    this.name = name;
}

//Method HELLO of user, where WHO is another User
User.prototype.hello = function(who) {
    //...Extentions in Object USER so more functions in it
    log(db.getPhrase("Hello") + "," + who.name);
};

module.exports = User;
//exports.User = User;


