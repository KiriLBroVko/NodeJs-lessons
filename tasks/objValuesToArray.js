//Из объекта, взять все его значения и сделать массив
var athlete = {
    sport: "basketball",
    team: "Los Ageles Lakers",
    FIO: "LeBron James",
    position: "SF",
    hight: 203
};
console.log("Array of values:");
const arrayValuesList = Object.values(athlete);
console.log(arrayValuesList);