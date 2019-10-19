//Из объекта, взять все его значения и сделать массив
var athlete = {
    sport: "basketball",
    team: "Los Ageles Lakers",
    FIO: "LeBron James",
    position: "SF",
    hight: 203
};

var valarr = Object.getOwnPropertyNames(athlete).map(function(key) {
    return athlete[key];
});
console.log(valarr);