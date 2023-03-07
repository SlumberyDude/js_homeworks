prom = new Promise(function(resolve, reject) {
    setTimeout(() => {
        // throw new Error("Whoops!");
        reject('Whoops from reject!');
    }, 5000);
}).catch(console.log);

setTimeout( () => {
    console.log(prom);
}, 500);

setTimeout( () => {
    console.log(prom);
}, 1000);

setTimeout( () => {
    console.log(prom);
}, 2000);

setTimeout( () => {
    console.log(prom);
}, 4000);

setTimeout( () => {
    console.log(prom);
}, 6000);