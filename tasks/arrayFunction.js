//Написать функцию, к-рая принимает массив с числами и находит число 4
function getValue(arr) {

    var answer = arr.find(function(item){
        return item === 4;
    }); 
    
    return answer;
}

var result = getValue([1,2,4,5,6]) // 4
console.log(result);

// function getValue(arr) {
// var answer;  

//     for(var i=0; i<=arr.length; i++){
//         if (arr[i] === 4){
//             answer = arr[i];
//         }
//     }

//     return answer;
// }
