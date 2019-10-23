// - includes
// create an array and check if this array includes 5
var arrayNumber = [1, 2, 5, 8, 10];

function ifItsFiveinArray(array) {    
        return array.includes(5);
};

var result = ifItsFiveinArray(arrayNumber);
console.log(result);