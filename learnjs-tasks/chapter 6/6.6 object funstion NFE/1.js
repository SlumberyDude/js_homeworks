// Через замыкание
function makeCounterClo() {
    let count = 0;

    return function counter() {
        counter.set = function(value) {
            count = value;
        }
        counter.decrease = function() {
            --count;
        }
        return count++;
    }
}

// Через свойство
function makeCounterProp() {
    let c = function counter() {
        return counter.count++;
    }
    c.set = (value) => {
        c.count = value;
    }
    c.decrease = () => {
        --c.count;
    }
    c.count = 0;
    return c;
}

let counter = makeCounterClo();
console.log( 'Через замыкание' );
  
console.log( counter() ); // 0
console.log( counter() ); // 1

counter.set(10); // установить новое значение счётчика

console.log( counter() ); // 10

counter.decrease(); // уменьшить значение счётчика на 1

console.log( counter() ); // 10 (вместо 11)


counter = makeCounterProp();
console.log( 'Через свойство' );
  
console.log( counter() ); // 0
console.log( counter() ); // 1

counter.set(10); // установить новое значение счётчика

console.log( counter() ); // 10

counter.decrease(); // уменьшить значение счётчика на 1

console.log( counter() ); // 10 (вместо 11)