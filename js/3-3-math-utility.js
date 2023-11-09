// 3-3 Implement the Math Utility

"use strict";

class MathUtility {
    // Static method for addition with any number of arguments
    // static add = (a, b) => a + b; // v.1
    static add = (...params) => params.reduce((sum, p) => sum + p, 0);

    // Static method for subtraction
    static subtract = (a, b) => a - b;

    // Static method for multiplication with any number of arguments
    // static multiply = (a, b) => a * b; //v.1
    static multiply = (...params) => params.reduce((product, p) => product * p, 1);

    // Static method for division, handles division by zero
    static divide = (a, b) => (b !== 0) ? a / b : Infinity;

    // Static method for exponentiation
    static power = (base, exponent) => base ** exponent;
}

// TESTS
// Create instances of MathUtility and demonstrate each method
console.log("\n3-3 Implement the Math Utility. Tests");
console.log("Addition:", MathUtility.add(5, 3)); // Output: 8
console.log("Subtraction:", MathUtility.subtract(10, 4)); // Output: 6
console.log("Multiplication:", MathUtility.multiply(6, 7)); // Output: 42
console.log("Division:", MathUtility.divide(15, 3)); // Output: 5
console.log("Division by zero:", MathUtility.divide(15, 0)); // Output: Infinity
console.log("Power:", MathUtility.power(2, 4)); // Output: 16

// addidional tests
console.log("Addition - multi:", MathUtility.add(5, 3, 10, 5)); // Output: 23
console.log("Multiplication - multi:", MathUtility.multiply(10, 7, 1.2)); // Output: 84