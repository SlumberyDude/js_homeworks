

function sumToCycle(n) {
    let res = 0;
    for (let i = 1; i <= n; i++) {
        res += i;
    }
    return res;
}

function sumToRec(n) {
    return (n === 1) ? 1 : sumToRec(n-1) + n;
}

function sumToProg(n) {
    return (n+1) * n/2;
}

function printResults(n) {
    console.log(`${sumToCycle(n)} ${sumToRec(n)} ${sumToProg(n)}`);
}

printResults(1);
printResults(2);
printResults(3);
printResults(12);
printResults(13);
printResults(100);
    