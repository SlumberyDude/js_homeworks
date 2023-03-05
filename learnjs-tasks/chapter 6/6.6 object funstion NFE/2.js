
function sum(a) {
    function sumfunc(b) {
        sumfunc.res += b;
        sumfunc.valueOf = () => sumfunc.res;
        return sumfunc;
    }
    sumfunc.res = 0;
    return sumfunc(a);
}

console.log( Number( sum(1)(2) ) ); // == 3
console.log( Number( sum(1)(2)(3) ) ); // == 6
console.log( Number( sum(5)(-1)(2) ) ); // == 6
console.log( Number( sum(6)(-1)(-2)(-3) ) ); // == 0
console.log( Number( sum(0)(1)(2)(3)(4)(5) ) ); // == 15