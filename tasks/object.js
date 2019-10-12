// Создать объект. Используя цикл for in
// пробежаться по объекту и вывести в консоль каждый его ключ и значение 
var athlete = {
    sport: "basketball",
    team: "Los Ageles Lakers",
    FIO: "LeBron James",
    position: "SF",
    hight: 203
};

for (var key in athlete) {
    console.log( "Ключ: " + key + " значение: " + athlete[key] );
}
