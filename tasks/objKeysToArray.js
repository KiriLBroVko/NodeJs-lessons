//Из объекта, взять все его ключи и сделать массив
var athlete = {
    sport: "basketball",
    team: "Los Ageles Lakers",
    FIO: "LeBron James",
    position: "SF",
    hight: 203
};
console.log("Array of keys:")
const arrayKeyList = Object.keys(athlete);
console.log(arrayKeyList);


