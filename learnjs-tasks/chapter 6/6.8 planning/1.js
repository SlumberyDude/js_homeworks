// Через setInterval
function printNumbersInterval(from, to) {
    let interId = setInterval( () => {
        console.log(from++);
        if (from > to) {
            clearInterval(interId);
        }
    }, 1000);
}

printNumbersInterval(4, 6);

// Через setTimeout
function printNumbersTimeout(from, to) {
    let h = () => {
        console.log(from++);
        if (from <= to) {
            setTimeout(h, 1000);
        }
    }
    h();
}

printNumbersTimeout(70, 75);