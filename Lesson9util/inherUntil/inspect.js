//This Method(inspect) Helps to output well any Object
//even if it has a link to itself(as in example)
var util = require('util');

var obj = {
    a: 5,
    b: 6,
    inspect: function() {
        return 123;
    }
};
obj.self = obj;
//if we explicitly contact inspect if we want to display 
//not in the console, but get a line representation of the object 
//for output to a file
console.log(util.inspect(obj));