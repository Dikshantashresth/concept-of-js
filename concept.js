//==================
// DECLARING VARIABLES
//==================

// Variable declaration using var, let, and const
var a = 0;        // 'var' is function-scoped, and can be re-declared and updated
let b = 0;        // 'let' is block-scoped, and can be updated but not re-declared
const c = 0;      // 'const' is block-scoped, cannot be updated or re-declared

/* Notes:
   - Use 'let' and 'const' in modern JavaScript. 'const' for variables that won't change.
   - 'var' is generally avoided because of its function scope and redeclaration behavior.
*/

//==================
// DATA TYPES
//==================

// Primitive data types in JavaScript
let num = 100;          // Number (both integers and floating points)
let str = "Hello";      // String
let bool = true;        // Boolean (true or false)
let und;                // Undefined (variable declared but not assigned a value)
let nul = null;         // Null (intentional absence of any value)
let sym = Symbol();     // Symbol (unique and immutable value)
let bigInt = 123n;      // BigInt (for large integers)

/* Notes:
   - JavaScript is dynamically typed, meaning types are assigned automatically based on value.
*/

//==================
// OPERATORS
//==================

// Arithmetic Operators: Perform arithmetic on numbers
let sum = 5 + 2;        // Addition
let diff = 5 - 2;       // Subtraction
let product = 5 * 2;    // Multiplication
let quotient = 5 / 2;   // Division
let mod = 5 % 2;        // Modulus (remainder)
let exp = 5 ** 2;       // Exponentiation (power)

// Assignment Operators: Assign values to variables
let x = 10;             // Assignment
x += 5;                 // x = x + 5; (Addition assignment)
x *= 2;                 // x = x * 2; (Multiplication assignment)

// Comparison Operators: Compare two values and return a boolean
console.log(5 == '5');  // true (loose equality, type coercion allowed)
console.log(5 === '5'); // false (strict equality, no type coercion)
console.log(5 !== 3);   // true (strict inequality)

// Logical Operators: Used with booleans
console.log(true && false);  // false (AND)
console.log(true || false);  // true (OR)
console.log(!true);          // false (NOT)

/* Notes:
   - Use '===' and '!==' for comparisons to avoid unexpected results due to type coercion.
*/

//==================
// CONDITIONAL STATEMENTS
//==================

if (b === 2) {
    console.log('b is 2');
} else if (b === 0) {
    console.log('b is 0');
} else {
    console.log('b is neither 2 nor 0');
}

// Ternary Operator: A shorthand for 'if-else'
let result = (b === 2) ? 'b is 2' : 'b is not 2';
console.log(result);

// Switch Statement: Used for multiple conditions
let day = 2;
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    default:
        console.log('Other day');
}

/* Notes:
   - Conditional logic is key for flow control in your programs.
*/

//==================
// LOOPS
//==================

// For Loop: Used for iteration
for (let i = 0; i < 4; i++) {
    console.log(i);
}

// While Loop: Continues while a condition is true
let i = 0;
while (i < 4) {
    console.log(i);
    i++;
}

// Do-While Loop: Executes at least once before checking condition
do {
    console.log(i);
    i++;
} while (i < 4);

// Nested Loop: Loop inside another loop
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        console.log("*");
    }
    console.log('');
}

/* Notes:
   - Loops are essential for iterating over data or repeating tasks.
*/

//==================
// FUNCTIONS
//==================

// Function Declaration
function myFunction() {
    console.log('This is a function');
}
myFunction();   // Call the function

// Function with Parameters and Return Value
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));  // Output: 5

// Arrow Function (Shorter Syntax)
const arrowFunc = (a, b) => a + b;
console.log(arrowFunc(5, 3));   // Output: 8

/* Notes:
   - Functions can be declared traditionally or using arrow syntax.
   - Functions are first-class objects, meaning they can be passed around like values.
*/

//==================
// SUMMARY
//==================

// Key Concepts:
// - Use `let` for variables that change, `const` for constants.
// - Arithmetic and logical operators are essential for calculations.
// - If-else statements help make decisions.
// - Loops (for, while, do-while) are used for iterations.
// - Functions can be created using traditional or arrow syntax.
