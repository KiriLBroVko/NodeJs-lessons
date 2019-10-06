var phrases = require('./ru');

//Pseudo-Class of Object USER
//Object USER who greats users
function User(name){
    this.name = name;
}

//Method HELLO of user, where WHO is another User
User.prototype.hello = function(who) {
    //...Extentions in Object USER so more functions in it
    console.log(phrases.Hello + "," + who.name);
};
//For connecting with files use systems of EXPORTS
//Exports(are an objects) are in each Modules
exports.User = User;
console.log("user.js is required !");

//Or to Use Globals so we delet var user in server.js
//global.User = User;
//console.log("user.js is required !");