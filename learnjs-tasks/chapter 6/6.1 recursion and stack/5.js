let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printListRevCycle(list) {
    let curObj = list;
    let forwElems = [];
    while (curObj !== null) {
        forwElems.push(curObj['value']);
        curObj = curObj['next'];
    }
    forwElems.reduceRight( (tot, cur) => {
        console.log(cur);
    }, 0);
}

function printListRevRec(list) {
    if (list === null) return;
    printListRevRec(list['next']);
    console.log(list['value']);
}

printListRevCycle(list);

printListRevRec(list);