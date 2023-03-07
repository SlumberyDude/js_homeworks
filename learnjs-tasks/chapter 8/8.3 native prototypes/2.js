function f(a, b) {
    console.log( a + b );
}

Function.prototype.defer = function(ms) {
    let savedThis = this;
    return function() {
        setTimeout( () => {
            savedThis.apply(savedThis, arguments);
        }, ms);
    }
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.