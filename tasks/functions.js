function LoopArray(array){
    for (var i = 0; i <= array.length - 1; i++) {
        console.log(array[i]);
    }
}

function LoopArray(array){
    arr.forEach((item, index, array) => {
        console.log(`${item} имеет позицию ${index} в ${array}`);
    });
}