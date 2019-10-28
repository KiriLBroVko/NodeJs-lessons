// - Closer task
// Create a function increaseCount which create another function which increase the value by one

function increaseCount() {
    // some code
    var increase = 1;
    return function(){
        return increase++;
    }
}

var addOne = increaseCount();
addOne(); // 1
addOne(); // 2
// addOne(); // 3
