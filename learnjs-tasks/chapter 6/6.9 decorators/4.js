function f(a) {
    console.log(a)
}

function throttle(f, ms) {

    let running = false;
    let lastargs = null;
    let lastthis = null;

    function wrapper() {
        if (running) {
            lastargs = arguments;
            lastthis = this;
            return;
        }
        running = true;

        setTimeout(() => {
            running = false;
            if (lastargs === null) return;
            f.apply(lastthis, lastargs);
        }, ms);

        lastargs = null;
        lastthis = null;

        f.apply(this, arguments);
    }
    return wrapper;
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано