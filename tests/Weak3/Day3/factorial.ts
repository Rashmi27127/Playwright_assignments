
function factorial(n: number): number {

    // Check for negative number
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }

    // Initialize result
    let result = 1;

    // Calculate factorial using loop
    for (let i = 2; i <= n; i++) { //i=2, 2<=5; 2++ =3
        result = result * i;// 1*2=2 , 2*3=6
    }

    
    return result;//2, 6
}


// Example 1
console.log(factorial(5));  // 120

// Example 2
console.log(factorial(3));  // 6

// Example 3
console.log(factorial(0));  // 1

// Example 4 - Negative number
try {
    console.log(factorial(-2));
} catch (error) {
    console.log("Error:", (error as Error).message);
}

