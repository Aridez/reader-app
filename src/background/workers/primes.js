const {
    workerData,
    parentPort
} = require('worker_threads')

var array = [];
for (var number = 2; array.length < workerData; number++) {
    var divisorFound = false;
    for (var divisor = 2; divisor < number; divisor++) {
        if (number % divisor === 0) {
            divisorFound = true;
            break;
        }
    }

    if (divisorFound == false) {
        array.push(number);
    }
}

parentPort.postMessage({
    result: array
})