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

function printListCycle(list) {
    let curObj = list;

    while (curObj !== null) {
        console.log(curObj['value']);
        curObj = curObj['next'];
    } 
}

function printListRec(list) {
    if (list === null) return;
    console.log(list['value']);
    printListRec(list['next']);
}

printListCycle(list);

printListRec(list);