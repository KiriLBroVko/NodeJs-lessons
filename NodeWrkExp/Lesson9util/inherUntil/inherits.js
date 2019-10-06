var util = require('util');
//Parents
function Animal(name) { //Constructor
    this.name = name;
}
Animal.prototype.walk = function() {    //Methods in prototype
    console.log("Walk " + this.name);
};
//Class of Parents------ 
//Child
function Rabbit(name) { //Constructor
    this.name = name;
}
util.inherits(Rabbit, Animal); //call inherits

Rabbit.prototype.jump = function() {    //Add in prototype Methods
    console.log("Jumping " + this.name);
};
//Using
//All methods created by Constructor(Rabbit) inherits from Animal
var rabbit = new Rabbit("our rabbit");
rabbit.walk();//1)Call Method of Parent
rabbit.jump();//2)Call Method of Child