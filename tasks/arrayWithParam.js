var array = [1,2,4,5,6,7,8];

function ifNumberInArr(array, number){
    return array.includes(number);
};

var result = ifNumberInArr(array, 5);
console.log(result);