"use strict";
function fibonacci(n) {
    // First two Fibonacci numbers
    let a = 0;
    let b = 1;
    // Calculate Fibonacci number
    for (let i = 0; i < n; i++) {
        let next = a + b;
        a = b;
        b = next;
    }
    return a;
}
// Example calls
console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(5)); // 5
console.log(fibonacci(10)); // 55
