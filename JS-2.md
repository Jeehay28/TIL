### 📅 14/10/2022

### ✏️ JavaScript For Loop

- Loops can execute a block of code a number of times.
- `for` loops through a block of code a number of times

```
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
```

> Expression 1 is executed (one time) before the execution of the code block.

> Expression 2 defines the condition for executing the code block.

> Expression 3 is executed (every time) after the code block has been executed.

```
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
```

```
const students = ["Park", "Kim", "Lee", "Kang"];

for (let i = 0; i < students.length; i++) {
  document.write(`${i} = ${students[i]}. <br>`);
}
```

### Nesting For Loops in JavaScript

- If a loop exists inside the body of another loop, it's called a nested loop.

```
 // outer loop
 for (int i = 1; i <= 5; ++i) {
    // codes // inner loop
    for(int j = 1; j <=2; ++j) {
        // codes } .. }
```

### 🔥 **[Excercise]** Multiplication Tables

```
for(let i = 2; i <= 9; i++) {
    document.write("<div>");
    document.write("<h3>" + i + "X </h3>");
    for (let j = 1; j <= 9; j++) {
      // document.write(i +" X " + j + " = " + i * j + "<br>");
      document.write(`<p> ${i} X ${j} = ${i * j} <p>`);
    }
    document.write("</div>");
  }
```

### ✏️ The While Loop

- The `while` loop loops through a block of code as long as a specified condition is true.

```
while (condition) {
  // code block to be executed
}
```

```
let stars = parseInt(prompt("How many stars do you want to draw?"));

while (stars > 0) {
    document.write("*");
    stars--; // stars = stars - 1
}
```

#### The Do While Loop

- The `do while` loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

```
do {
  // code block to be executed
}
while (condition);
```

```
let stars = parseInt(prompt("How many stars do you want to draw?"));

do {
    document.write("*");
    stars--; // stars = stars - 1
} while (stars > 0);
```

### ✏️ JavaScript Break and Continue

- The `break` statement "jumps out" of a loop.
- The `continue` statement "jumps over" one iteration in the loop.

```
let n = 50;

for (let i=1; i<=50; i++) {
    document.write(`${i}   `);
    if (i === 10){
        break;
    }
}
```

```
for (let i=1; i<=10; i++) {
    if (i % 2 === 1)  {
        continue;
    }
    document.write(`${i} <br>`);
}
```

### 🔥 **[Excercise]** Check if a number is prime or not

```
const number = parseInt(prompt("Enter any number."))

let isPrime;

if (number === 1) {
    document.write(`${number} is not a prime number.`)
} else if (number === 2) {
    isPrime = true; // 2 is a prime number.
} else {
    for (let i=2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        } else {
            isPrime = true;
        }
    }
}

if (isPrime) {
    document.write(`${number} is a prime number.`);
} else {
    document.write(`${number} is not a prime number.`);
}
```

### 🔥 **[Excercise]** Numbers greater than 10

```
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

for (let i=0; i < arr.length; i++) {
    if (arr[i] > 10) {
        document.write(`${arr[i]},   `);
    }
}
```

### ✏️ JavaScript Functions

- A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
- Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
- The parentheses may include parameter names separated by commas:
  (parameter1, parameter2, ...)
- The code to be executed, by the function, is placed inside curly brackets: {}

```
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

```
function calcSum() {
    // calculate sum
    // addNumber

    let sum = 0;

    for (let i=1; i <=10; i++ ) {
    sum+= i;
    }
    document.write(`The sum of natural numbers from 1 to 10 is ${sum}.`);
}

document.write(`Before executing the function <br><br>`);
calcSum();
document.write(`<br><br> After executing the function`)
```

### 💗 JavaScript Hoisting

- 🌟 Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
- In JavaScript, a variable can be declared after it has been used.
- In other words; a variable can be used before it has been declared.
- 🌟 **Variables defined with `let` and `const` are hoisted to the top of the block, but not initialized.**
- Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
- JavaScript only hoists declarations, not initializations.

```
var x = 5; // Initialize x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y

var y = 7; // Initialize y
```

> Because of hoisting, y has been declared before it is used, but because initializations are not hoisted, the value of y is undefined.

### Function Parameters and Arguments

```
function functionName(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

- Function parameters are the names listed in the function definition.
- Function arguments are the real values passed to (and received by) the function.

```
function sumMulti(num1, num2) {

    if (num1 === num2) {
        return  num1 * num2;
    } else {
        return num1 + num2;
    }
}

console.log(`${sumMulti(5, 10)}`);
console.log(`${sumMulti(10, 10)}`);
```

```
function compareTwo(n1, n2) {
    if (n1 === n2 ) {
        alert(`${n1} is equal to ${n2}.`)
    } else if (n1 > n2) {
        alert(`${n1} is greater than ${n2}.`)
    } else {
        alert(`${n2} is greater than ${n1}.`)
    }
}
let num1 = parseInt(prompt("Enter the first number: "));
let num2 = parseInt(prompt("Enter the second number: "));

compareTwo(num1, num2);
```

### Default Parameters

- If a function is called with missing arguments (less than declared), the missing values are set to `undefined`.
- Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter:

### ✏️ JavaScript Scope

- Scope determines the accessibility (visibility) of variables.
- JavaScript has 3 types of scope:
  1. Block scope
  2. Function scope
  3. Global scope

#### Block Scope

- Before ES6 (2015), JavaScript had only **Global Scope** and **Function Scope**.
- ES6 introduced two important new JavaScript keywords: `let` and `const`.
- These two keywords provide Block Scope in JavaScript.
- Variables declared inside a { } block cannot be accessed from outside the block:

```
{
  let x = 2;
}
// x can NOT be used here
```

#### Function Scope

- JavaScript has function scope: Each function creates a new scope.
- Variables defined inside a function are not accessible (visible) from outside the function.
- Variables declared with `var`, `let` and `const` are quite similar when declared inside a function.

```
function myFunction() {
  var carName = "Volvo";   // Function Scope
}
```

#### Global Scope

- Variables declared Globally (outside any function) have Global Scope.
- Global variables can be accessed from anywhere in a JavaScript program.
- Variables declared with `var`, `let` and `const` are quite similar when declared outside a block.

#### Local Scope

- Variables declared within a JavaScript function, become LOCAL to the function.
- Local variables have Function Scope: They can only be accessed from within the function.
- Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
- Local variables are created when a function starts, and deleted when the function is completed.

```
// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
```

#### Automatically Global

- If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
- This code example will declare a global variable `carName`, even if the value is assigned inside a function.

```
myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";
}
```

```
function calc() {
    return num * factor;
}
{
    const num = 10;
    let result = calc();
    console.log(`result: ${result} `);
}

// Result
VM1953:2 Uncaught ReferenceError: num is not defined
    at calc (<anonymous>:2:5)
    at <anonymous>:5:18
```

### 🔥 **[Excercise]** Function to check if number is positive or negative

```
function isPositive(num) {
    if (num > 0) {
        return alert(`${num} is positive.`);
    } else if (num === 0) {
    return alert(`${num} is 0.`);
    } else {
    return alert(`${num} is negative.`);
    }
}

const userNumber = parseInt(prompt("Enter any number."));
isPositive(userNumber);
```

### Anonymous Function

- a function without a function name. Only function expressions can be anonymous, function declarations must have a name:

```
// Anonymous function created as a function expression
(function () {});

// Anonymous function created as an arrow function
() => {};
```

### Named Function

- a function with a function name

```
// Function declaration
function foo() {}

// Named function expression
(function bar() {});

// Arrow function
const baz = () => {};
```

### IIFE, Immediately Invoked Function Expression

- a JavaScript function that runs as soon as it is defined.
- a function that is called directly after the function is loaded into the browser's compiler. The way to identify an IIFE is by locating the extra left and right parenthesis at the end of the function's definition.
- Function expressions, named or anonymous, can be called immediately.
- Declared functions can't be called immediately this way, because IIFEs must be function expressions.

```
(function() {
    let userName = prompt("Enter your name.");
    alert(`Hi, ${userName}!`);
})();


(function(a, b){
    let sum = a + b;
    alert(`The sum of two numbers is ${sum}.`)
})(100, 200);
```

### JavaScript Arrow Function

- Arrow functions were introduced in ES6.
- Arrow functions allow us to write shorter function syntax:

```
let myFunction = (a, b) => a * b;
```

```
// Before Arrow
hello = function() {
  return "Hello World!";
}

// With Arrow Function
hello = () => {
  return "Hello World!";
}

// Arrow Functions Return Value by Default:
hello = () => "Hello World!";

// Note: This works only if the function has only one statement.
```

```
let hi = user => console.log(`Hi, ${user}`);
hi("Jeehay");
```

```
let sum = (a, b) => a + b;
sum (10, 20);
```

### React ES6 Spread Operator

- To be continued on Oct 17
