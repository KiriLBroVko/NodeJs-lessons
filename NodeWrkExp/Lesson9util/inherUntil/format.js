var util = require('util');
var str = util.format("My %s %d %j", "string", 123, {test: "obj"});
//format Получает строку и подставляет параметры(%s = "string",
//%d = 123, ..)
//Use в консоли неявно:console.log("My %s %d %j", "string", 123, {test: "obj"});
console.log(str);