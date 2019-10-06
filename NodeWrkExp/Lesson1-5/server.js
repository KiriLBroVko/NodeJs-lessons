//Lesson 1 - Start_Modules 
// 1) connetction to require;
// 2) variables: var, exports and global;
// 3) Types of Modules: JS, NODE, JSON;
// 4) Modules-directories DIR/index

//Object USER who greats users
// function User(name){
//     this.name = name;
// }
// //Method HELLO of user, where WHO is another User
// User.prototype.hello = function(who) {
//     //...Extentions in Object USER so more functions in it
//     console.log("Hello, " + who.name);
// };

//...Extentions in Object USER so more functions in it

//Result we need creat NEW File for Object USER with its' own funcs&methods
//AND SO FOR THAT WE need Modules !!!

//user = {User: function}
//If Exports
var user = require('./user');//conection to user.js file

var vasya = new user.User("Vasya");
var petya = new user.User("Petya");

vasya.hello(petya);

//If Globals
// require('./user');//conection to user.js file

// var vasya = new User("Vasya");
// var petya = new User("Petya");
// vasya.hello(petya);
