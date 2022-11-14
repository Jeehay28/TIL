### 📅 13/10/2022

#### 🔋 How to open the console in Chrome

1. Open a blank or empty page built into the browser typing `about:blank` into the address bar and pressing `Enter`.
2. `Right-click` any page element and select Inspect Element. `Click the Console tab`.
3. Using a keyboard shortcut, open Developer Tools and bring focus to the console. Windows: `Ctrl + Shift + J`. Mac: `Cmd + Opt +J`.

#### 🔋 `about:blank`

- The `about:blank` page is a blank page in your web browser. The “about:” portion of the address instructs the browser to display internal, built-in pages. These pages are accessible without having to connect to the internet. This allows you to access the advanced settings of your browser at any point in time.

### JavaScript Output

- JavaScript can "display" data in different ways:
- Using `document.write()`

```
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
document.write(5 + 6);
</script>

</body>
</html>
```

- Using `window.alert()`
- You can skip the window keyword.
- In JavaScript, the window object is the global scope object. This means that variables, properties, and methods by default belong to the window object. This also means that specifying the window keyword is optional:

```
<script>
alert(5 + 6);
</script>
```

- Using `console.log()`
- For debugging purposes, you can call the console.log() method in the browser to display data.

```
<script>
console.log(5 + 6);
</script>
```

### Window Object

- The window object represents an open window in a browser.
- If a document contain frames (`<iframe>` tags), the browser creates one window object for the HTML document, and one additional window object for each frame.

#### Window Object Properties

| Property | Description                                                     |
| -------- | --------------------------------------------------------------- |
| console  | Returns the Console Object for the window.                      |
| length   | Returns the number of `<iframe>` elements in the current window |

#### Window Object Methods

| Method      | Description                                                        |
| ----------- | ------------------------------------------------------------------ |
| `alert()`   | Displays an alert box with a message and an OK button              |
| `confirm()` | Displays a dialog box with a message and an OK and a Cancel button |
| `prompt()`  | Displays a dialog box that prompts the visitor for input           |

### JavaScript typeof

- In JavaScript there are 5 different data types that can contain values:

1. `string`
2. `number`
3. `boolean`
4. `object`
5. `function`

- There are 6 types of objects:

1. Object
2. Date
3. Array
4. String
5. Number
6. Boolean

- And 2 data types that cannot contain values:

1. null
2. undefined

- You can use the `typeof` operator to find the data type of a JavaScript variable.
  `typeof()`

```
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"
```

### Variables

- 4 Ways to Declare a JavaScript Variable:

1. Using `var`
2. Using `let`
3. Using `const`
4. Using nothing

```
var carName;
or
let carName;
```

- Creating a variable in JavaScript is called "declaring" a variable.
- After the declaration, the variable has no value (technically it is `undefined`).
- To assign a value to the variable, use the equal sign:

```
carName = "Volvo";
```

- You can also assign a value to the variable when you declare it:

```
let carName = "Volvo";
```

- In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input.
- A variable declared without a value will have the value `undefined`.

- Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names:

```
let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;
```

- Since JavaScript treats underscore as a letter, identifiers containing \_ are valid variable names:

```
let _lastName = "Johnson";
let _x = 2;
let _100 = 5;
```

#### JavaScript Let

- The `let` keyword was introduced in ES6 (2015).
- Variables defined with `let` cannot be Redeclared.
- Variables defined with `let` must be Declared before use.
- Variables defined with `let` have Block Scope.

```
let x = "John Doe";
let x = 0;
// SyntaxError: 'x' has already been declared
```

```
var x = "John Doe";
var x = 0;
```

#### JavaScript Const

- The const keyword was introduced in ES6 (2015).
- Variables defined with const cannot be Redeclared.
- Variables defined with const cannot be Reassigned.
- Variables defined with const have Block Scope.

```
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
```

### 🔥 **[Excercise]** Age Calculator by Date of Birth

```
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Age Calculator</title>
</head>
<body>
    <script>
        const currentYear = 2022;
        let birthYear;
        let age;

        birthYear = prompt("What year were you born? (YYYY)");
        age = currentYear - birthYear + 1;
        alert("In " + currentYear +  ", You're " + age + " years old.");
    </script>
</body>
</html>
```

### JavaScript Data Types

- JavaScript variables can hold different data types: numbers, strings, objects and more:

```
let length = 16;                               // Number
let lastName = "Johnson";                      // String
let x = {firstName:"John", lastName:"Doe"};    // Object
```

### TJavaScript Template Literals

- Synonyms:
  - Template Literals
  - Template Strings
  - String Templates
  - Back-Tics Syntax
- Template Literals use back-ticks (``) rather than the quotes ("") to define a string:
- The backtick ` is a typographical mark used mainly in computing. It is also known as backquote, grave, or grave accent.

- Template literals provide an easy way to interpolate variables and expressions into strings. The method is called `string interpolation`. The syntax is:

```
${...}
```

```
> let username
> username = prompt(`What is your name?`)
> console.log(`Hi, ${username}`)
```

### truthy falsy

- a `truthy` value is a value that is considered true when encountered in a Boolean context. All values are `truthy` unless they are defined as `falsy`. That is, all values are `truthy` except `false` , `0` , `-0` , `0n` , `""` , `null` , `undefined` , and `NaN` . JavaScript uses type coercion in Boolean contexts.
- A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

### 6 Falsy values in JavaScript

- There are only six falsey values in JavaScript:
  - undefined
  - null
  - NaN
  - 0
  - "" (empty string)
  - false

### difference between declaration and definition

- Definition associates the variable with a type and allocates memory, whereas declaration just specifies the type but doesn't allocate memory. Declaration is more useful when you want to refer the variable before definition.
- Declaration provides basic attributes of a variable/function. definition provides details of that variable/function. Initialisation provides details of that variable/function and value.

### `undefined`

- A variable that has not been assigned a value is of type undefined . A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned.
- The global `undefined` property represents the primitive value undefined. It is one of JavaScript's primitive types.
  ![](../TIL/nullvsundefined.jpg)

### ❓ JSON

- JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).
- JSON stands for Javascript Object Notation. JSON is a text-based data format that is used to store and transfer data. For example, // JSON syntax { "name": "John", "age": 22, "gender": "male", } In JSON, the data are in key/value pairs separated by a comma , . JSON was derived from JavaScript.

### ❓ Markdown preview

- To switch between views, press `Ctrl+Shift+V` in the editor.

### JavaScript Arrays

- An array is a special variable, which can hold more than one value:
- An array can hold many values under a single name, and you can access the values by referring to an index number.

```
const cars = [
  "Saab",
  "Volvo",
  "BMW"
];
```

```
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
```

### JavaScript Objects

- In real life, a car is an object. A car has properties like weight and color, and methods like start and stop:
- All cars have the same properties, but the property values differ from car to car.
- All cars have the same methods, but the methods are performed at different times.

| Object | Properties         | Methods     |
| ------ | ------------------ | ----------- |
|        | car.name = Fiat    | car.start() |
|        | car.model = 500    | car.drive() |
|        | car.weight = 850kg | car.brake() |
|        | car.color = white  | car.stop()  |

- **The name:values pairs in JavaScript objects are called properties:**
- Objects can also have methods. **Methods are actions that can be performed on objects.** Methods are stored in properties as function definitions.

```
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
```

```
let gitBook = {
title : "깃 깃허브 입문 ", // string
pubDate : "2019 12 06", // string
pages : 272, // number
finished : true // boolean
}
```

```
gitBook.title
gitBook[`title`]
```

```
let monitor = {
size : 32,
color : "black",
brand : "HP",
curved : false
}
```

```
> console.log(`My monitor is ${monitor.brand}.`);
My monitor is HP.
```

### What is a symbol in JavaScript?

- Symbols are new primitive type introduced in ES6. Symbols are completely unique identifiers. Just like their primitive counterparts (Number, String, Boolean), they can be created using the factory function `Symbol()` which returns a Symbol. Every time you call the factory function, a new and unique symbol is created.

### What is loose type?

- A loosely typed language is a programming language that does not require a variable to be defined. For example, Perl is a loosely typed language, you can declare a variable, but it doesn't require you to classify the type of variable.
- JavaScript is loosely typed. You don't have to tell that a string is a string, nor you can require a function to accepts an integer as its parameter. This gives JavaScript a lot of flexibility. Flexibility lets you move faster, change things quickly, iterate at a faster velocity.

### 🔋 TypeScript

- TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

### Type conversion (or typecasting)

- JavaScript is a "loosely typed" language, which means that whenever an operator or statement is expecting a particular data-type, JavaScript will automatically convert the data to that type.
- Type conversion (or typecasting) means transfer of data from one data type to another. Implicit conversion happens when the compiler (for compiled languages) or runtime (for script languages like JavaScript) automatically converts data types. The source code can also explicitly require a conversion to take place.

### `Number()`

- When `Number()` is called as a function, it coerces the parameter to a number primitive. `BigInts()` are converted to numbers. If the value can't be converted, it returns `NaN`.

- Number is a primitive wrapper object used to represent and manipulate numbers like 37 or -9.25 . The Number constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.

- When Number is called as a constructor (with new), it creates a Number object, which is not a primitive.

- When Number is called as a function, it coerces the parameter to a number primitive. BigInts are converted to numbers. If the value can't be converted, it returns NaN.

```
Number(true) // 1
Number("20") // 20
Number("Hi?") // NaN
```

### `parseInt()` `parseFloat()`

- `parseInt()` is for converting a non integer number to an int and `parseFloat()` is for converting a non float (with out a decimal) to a float (with a decimal).
- The difference is what happens when the input is not a "proper number". `Number()` returns `NaN` while `parseFloat()` parses "as much as it can". If called on the empty string `Number()` returns `0` while `parseFloat()` returns `NaN`.

```
let userInput = parseInt(prompt("Enter any number.")
```

```
let bodyHeat = prompt("What is your body temperature?");
parseFloat(bodyHeat); // 36.4
```

### `toString()`

- The `toString()` method returns a string as a string. The `toString()` method does not change the original string. The `toString()` method can be used to convert a string object into a string.

### `Boolean()`

- The `Boolean()` constructor can create Boolean objects or return primitive values of type boolean.

### 🔥 **[Excercise]** Fahrenheit to Celsius Converter

```
let f = parseFloat(prompt("Enter temperature in Fahrenheit."));
let c = ((f -32) / 1.8).toFixed(1); // round to 1 decimal place
alert(`${f} degrees Fahrenheit is ${c} degrees Celsius.`);
```

### `toFixed()'

- The `toFixed()` method converts a number to a string. The `toFixed()` method rounds the string to a specified number of decimals.

###

```
> 4 + 10
14
> 4 + "10"
'410'
> parseInt(10 + 0.5)
10
> "10" + 0.5
'100.5'
> 10 + 0.5
10.5
> parseFloat("10" + 0.5)
100.5
```

### ❓ Node.js

- Node.js is an open source server environment
- Node.js is free
- Node.js runs on various platforms (Windows, Linux, - Unix, Mac OS X, etc.)
- Node.js uses JavaScript on the server
- Node.js can generate dynamic page content
- Node.js can create, open, read, write, delete, and close files on the server
- Node.js can collect form data
- Node.js can add, delete, modify data in your database
- Node.js files contain tasks that will be executed on certain events
- A typical event is someone trying to access a port on the server
- Node.js files must be initiated on the server before having any effect
- Node.js files have extension ".js"
- Node. js is best defined as a JavaScript runtime that works on the famous and ultra-powerful V8 engine by JavaScript. In simpler terms, Node. js can be defined as a programming language that works well as a development runtime.

### ❓ Babel

- Transcompiler
- Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into backwards-compatible JavaScript code that can be run by older JavaScript engines. It allows web developers to take advantage of the newest features of the language.

### ❓ Bootstrap

- Front-end framework
- Initial release date: August 19, 2011
- Programming languages: CSS, HTML, JavaScript, Sass, Less
- Bootstrap is the world's most famous free CSS framework.
- Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.

### Types of JavaScript Operators:

- Aritmetic Operators
- Assignment Operators
- Comparison Operators
- Logical Operators
- Conditional Operators
- Type Operators

```
> a = 10
10
> sum = a + 5
15
> a++ // You get the value of a, and a is incremented afterwards.
10
> a
11
> ++a // a is incremented first, and that is the value you get.
12
```

```
> a = 10
10
> sum = a++ + 5
15
> a = 10
10
> sum = ++a + 5
16
```

```
x = 10, y = 4, result
result = x + y--  // 14
y                 // 3
```

```
result = ++x + y  // 15
x                 // 11
```

### JavaScript Assignment Operators

```
> x=5
5
> y=5
5
> y += x
10
> y -= x
5
> y *= x
25
> y /= x
5
> y %= x
0
```

### Adding JavaScript Strings

```
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;

// John Doe
```

### JavaScript Comparison Operators

```
> 3 == "3"
true
> 3 === "3"
false
> 3 != "3"
false
> 3 !== "3"
true
> 3 < 4
true
> 3 <= 4
true
> 3 > 4
false
> 3 >= 4
false
```

### ☕ ASCII code ❓

- 🔋 ASCII, stands for American Standard Code for Information Interchange. It's a 7-bit character code where every single bit represents a unique character.
- ASCII is a character encoding standard for electronic communication. ASCII codes represent text in computers, telecommunications equipment, and other devices.

### JavaScript Logical Operators

- `&&` Logical AND: true if both the operands/boolean values are true, else evaluates to false
- `||` Logical OR: true if either of the operands/boolean values is true . evaluates to false if both are false
- `!!` Logical NOT: true if the operand is false and vice-versa.

### Operator precedence

- Operator precedence describes the order in which operations are performed in an arithmetic expression.
- Multiplication (\*) and division (/) have higher precedence than addition (+) and subtraction (-).
- 🔗 [Operator Precedence Values](https://www.w3schools.com/js/js_precedence.asp)

### ❓ Control statements

- Control statements are designed to allow you to create scripts that can decide which lines of code are evaluated, or how many times to evaluate them. There are two different types of control statements: conditional statements and loop statements.

### 🔥 **[Excercise]** If you are under 20, you are not an adult.

```
<script>
			const currentYear = 2022;
			let birthYear;
			let age;

			birthYear = parseInt(prompt("Enter your birth year. (YYYY)"));
      age = currentYear - birthYear + 1;

      if (age < 20) {
        alert(`You are not an adult.`);
       } else {
        alert(`You are an adult.`);
       }
      alert(`In ${currentYear}, you are ${age} years old.`);

    </script>
```

### 🔥 **[Excercise]** Find multiples of 3

```
<script>
 if (num !== null) {
                num = parseInt(num);
                if (num % 3 == 0) {
                    alert(`${num} is a multiple of 3`);
                } else {
                    alert(`It's not a multiple of 3.`)
                }
            } else {
                alert(`You didn't enter anything.`)
            }
</script>
```

### 🔥 **[Excercise]** Check if a Number is Odd or Even

```
if (num1 < num2 ) {
small = num1;
} else {
small = num2;
}
```

```
small = (num1 < num2) ? num1 : num2;
```

### JavaScript Switch Statement

```
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

### 🔥 **[Excercise]** View the courses you've added

```
let subject = prompt("Enter a course number. (1-HTML, 2-CSS, 3-JavaScript)");

if (subject !== null) {
    switch(subject) {
        case "1" : document.write("You've added the HTML course.")
        break;
        case "2" : document.write("You've added the CSS course.")
        break;
        case "3" : document.write("You've added the JavaScript course.")
        break;
        default : document.write("You've entered an incorrect number.")
    }
}
```

### or (||), and (&&)

```
let
currentTime = 10;
if
currentTime < 9 || currentTime > 18) {
alert("Off-Business Hours")
} else
alert("We are open!")
}
```

### short-circuit evaluation (단축 평가값)

- Short-circuiting is a programming concept in which the compiler skips the execution or evaluation of some sub-expressions in a logical expression. The compiler stops evaluating the further sub-expressions as soon as the value of the expression is determined.
- The logical AND expression is a short-circuit operator. As each operand is converted to a boolean, if the result of one conversion is found to be false , the AND operator stops and returns the original value of that falsy operand; it does not evaluate any of the remaining operands.

```
let x = 10
let y = 20
if ( x > 15 && y > 15) alert("Both x and y are greater than 15.") // y > 15 is not executed.
if ( y > 15 || x > 15) alert("Either x or y is greater than 15.") // x > 15 is not executed.
```
