/**
 * Cache
 * 
 * Avoid double calculations
 * Keep results of other functions or calculations in it
 */
function makeCache(fn) {
    const cache = {};
    return function (n) {
        if (cache[n]) {
            console.log('From Cache', cache[n]);
            return cache[n];
        }
        let result = fn(n);
        console.log('Not cached yet', result);
        cache[n] = result;
        return result;
    }
}

function factorial(n) {
    let result = 1;
    while (n !== 1) {
        result *= n;
        n -= 1;
    }
    return result;
}

const cashFactorial = makeCache(factorial);
cashFactorial(5);
cashFactorial(8);
cashFactorial(5);