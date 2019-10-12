// function LoopArray(array){
//     for (var i = 0; 0 <= array.length - 1; i++) {
//         console.log(array[i]);
//     }
// }
// LoopArray([23, "Nodejs", true, "12"]);

function LoopArray(array){
    arr.forEach((item, index, array) => {
        console.log(`${item} имеет позицию ${index} в ${array}`)
    });
}
LoopArray([23, "Nodejs", true, "12"]);
