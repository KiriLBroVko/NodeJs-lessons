// - Closer task
// Create a function increaseCount which create another function which increase the value by one

function increaseCount() {
    // some code
    var counter = 1;
    return function(){
        return counter++;
    }
}

var addOne = increaseCount();
addOne(); // 1
addOne(); // 2
// addOne(); // 3
