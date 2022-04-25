// recursive
function rFib(n) {
    if (n < 2) {
        return n;
    }
    return rFib(n - 1) + rFib(n - 2);
}
var { performance } = require('perf_hooks');
var start = performance.now();
rFib(20);
console.log(`This took ${performance.now() - start} milliseconds to run`);
// iterative
function iFib(n) {
    const vals = [0, 1];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }
    return vals[n];
}
var { performance } = require('perf_hooks');
var start = performance.now();
iFib(20);
console.log(`This took ${performance.now() - start} milliseconds to run`);
