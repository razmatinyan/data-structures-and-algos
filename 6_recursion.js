/**
 * Recursion
 * 
 * Function that calls itself
 */

// Factorial
const factorial = (n) => {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));

// Fibonacci
const fibonacci = (n) => {
    if (n === 1 || n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(8));

const factorialIterative = n => {
    if (n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorialIterative(5))