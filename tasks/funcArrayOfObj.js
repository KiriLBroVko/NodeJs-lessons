//Написать функцию которая принимает массив и возвращает объект с id 3
var arrayListOfObjects = [
    {
        id: 1,
        sport: "basketball",
        team: "Los Ageles Lakers",
        FIO: "LeBron James",
        position: "SF",
        hight: 203
    },
    {        
        FIO: "Konoplynka",
        sport: "football",
        team: "FC Dnipro",
        id: 2
    },
    {        
        team: "Miami",
        sport: "basketball",
        id: 3,
        FIO: "Dwyane Wade",
        position: "PG",
        hight: 192       
    },
    {        
        sport: "CS Go",
        id: 4,
        team: "NAVI",
        FIO: "S1mple",
        position: "AVP"
    }
];

function getThirdObj(array) {
    array.forEach(function(item, index, array) {
        Object.keys(item)
            .forEach(function eachKey(key) { 
                if (key === 'id' && item[key]===3){
                    console.log("true");
                    console.log(item);
                } 
            });
    });
}
getThirdObj(arrayListOfObjects);