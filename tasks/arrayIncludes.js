// - includes
// create an array and check if this array includes 5
var arrayNumber = [1, 2, 5, 8, 10];

function ifItsFiveinArray(array) {
    if (array.includes(5) === true) {
        return "Array includes " + 5;
    };
}
var result = ifItsFiveinArray(arrayNumber);
console.log(result);