var array = [1,2,4,5,6,7,8];

function ifItFiveInArr(array, number){
    return array.includes(number);
};

var result = ifItFiveInArr(array, 5);
console.log(result);