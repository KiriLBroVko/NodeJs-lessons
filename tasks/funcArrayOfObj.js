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
//console.log(arrayListOfObjects[2]);
//console.log(Object.keys(arrayListOfObjects));
//const arrayValue = Object.values(arrayListOfObjects); 
//console.log(arrayListOfObjects);
// const userPrivileges = ['user', 'user', 'user', 'admin'];
// const containsAdmin = arrayListOfObjects.some( element => element === 'admin');
// в containsAdmin будет записано true
    arrayListOfObjects.forEach(function(item, index, array) {
        //console.log(typeof(item));
        // var arr = Object.values(item);
        // console.log(arr);
        //console.log(item);
        var arrayKey = Object.keys(item);
        console.log(arrayKey);
        const containKey = arrayKey.some((element) => {
            if (element === 'id' && true){
                if () {}
        }});
        console.log(containKey);
        //console.log(item[index]);
        // arrayKey.forEach(function(item, index, array) {
        //     if (item === 'id'){
        //         // console.log("true");
        //         // console.log(item[index]);
        //     }
        // });
        
    });

// //function getThirdObj(array) {
//     arrayListOfObjects.forEach(function(item, index, array) {
//         // ... делать что-то с item
//         const arrayKey = Object.keys(item);
//         // console.log(arrayKey[0].values(item)); // no way !!!
//         const arrayValue = Object.values(item); 
//         //console.log(arrayValue[2]);
//         if (arrayKey === 'id') {
//             console.log("True");
//             if (arrayValue === 3) {
//                 console.log(array[2]);
//             }
//         }
//     });
// //}
//getThirdObj(arrayListOfObjects);