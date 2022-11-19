## HTML, CSS

### CSS Flexbox Layout Module
- Before the Flexbox Layout module, there were four layout modes:
    - Block, for sections in a webpage
    - Inline, for text
    - Table, for two-dimensional table data
    - Positioned, for explicit position of an element

- The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning.

- To start using the Flexbox model, you need to first define a flex container.
- The flex container becomes flexible by setting the display property to flex:
- The flex container properties are:

    - flex-direction
    - flex-wrap
    - flex-flow
    - justify-content
    - align-items
    - align-content

- The direct child elements of a flex container automatically becomes flexible (flex) items.
order
    - flex-grow
    - flex-shrink
    - flex-basis
    - flex
    - align-self

### CSS Animations
- CSS allows animation of HTML elements without using JavaScript or Flash!
- An animation lets an element gradually change from one style to another.

- You can change as many CSS properties you want, as many times as you want.

- To use CSS animation, you must first specify some keyframes for the animation.

- Keyframes hold what styles the element will have at certain times.


### JavaScript HTML Animations
- JavaScript animations are done by programming gradual changes in an element's style.

- The changes are called by a timer. When the timer interval is small, the animation looks continuous.



### Cascading Order
- If different styles are specified for HTML elements, the styles will cascade into new styles with the following priority:

- Priority 1: Inline styles
- Priority 2: External and internal style sheets
 - Priority 3: Browser default
- If different styles are defined on the same priority level, the last one has the highest priority.


### CSS position Property
- The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).

## JavaScript

### Callbacks
- A callback is a function passed as an argument to another function
- This technique allows a function to call another function
- A callback function can run after another function has finished.
- JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
```
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
```
- In the example above, `myDisplayer` is a called a callback function.
- It is passed to `myCalculator()` as an argument.
- Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

### Asynchronous JavaScript
- Functions running in parallel with other functions are called asynchronous
- A good example is JavaScript setTimeout()
```
setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
}
```
- In the example above, `myFunction` is used as a callback.
- `myFunction` is passed to `setTimeout()` as an argument.
- 3000 is the number of milliseconds before time-out, so `myFunction()` will be called after 3 seconds.

```
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}
```
- In the example above, `myFunction` is used as a callback.
- `myFunction` is passed to `setInterval()` as an argument.
- 1000 is the number of milliseconds between intervals, so `myFunction()` will be called every second.



### Callback Alternatives
- With asynchronous programming, JavaScript programs can start long-running tasks, and continue running other tasks in parallell.

- But, asynchronus programmes are difficult to write and difficult to debug.

- Because of this, most modern asynchronous JavaScript methods don't use callbacks. Instead, in JavaScript, asynchronous programming is solved using Promises instead.

### AJAX
- AJAX stands for Asynchronous JavaScript And XML. In a nutshell, it is the use of the XMLHttpRequest object to communicate with servers. It can send and receive information in various formats, including JSON, XML, HTML, and text files.
- AJAX = Asynchronous JavaScript And XML.
- AJAX is not a programming language.
- AJAX just uses a combination of:
    - A browser built-in XMLHttpRequest object (to request data from a web server)
    - JavaScript and HTML DOM (to display or use the data)
    - AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.
    - AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.



### XML
- XML is a software- and hardware-independent tool for storing and transporting data.
- XML stands for eXtensible Markup Language
- XML is a markup language much like HTML
- XML was designed to store and transport data
- XML and HTML were designed with different goals:
    - XML was designed to carry data - with focus on what data is
    - HTML was designed to display data - with focus on how data looks
    - XML tags are not predefined like HTML tags are


### JavaScript Promises
- A JavaScript Promise object can be:

    - Pending
    - Fulfilled
    - Rejected

- The Promise object supports two properties: state and result.
- While a Promise object is "pending" (working), the result is undefined.

- When a Promise object is "fulfilled", the result is a value.

- When a Promise object is "rejected", the result is an error object.


### JavaScript Async
- "async and await make promises easier to write"

- async makes a function return a Promise

- await makes a function wait for a Promise

- The keyword `async` before a function makes the function return a promise:
- The await keyword can only be used inside an async function.
- The await keyword makes the function pause the execution and wait for a resolved promise before it continues:


### JavaScript Variables
- 4 Ways to Declare a JavaScript    
    - Variable:
    - Using var
    - Using let
    - Using const
    - Using nothing

- Always declare JavaScript variables with var,let, orconst.
- The var keyword is used in all JavaScript code from 1995 to 2015.
- The let and const keywords were added to JavaScript in 2015.
- If you want your code to run in older browsers, you must use var.

### ES6
- ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.


### `let`
- The let keyword was introduced in ES6 (2015).
- Variables defined with let cannot be Redeclared.
- Variables defined with let must be Declared before use.
- Variables defined with let have Block Scope.


### Block Scope
- Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
- ES6 introduced two important new JavaScript keywords: let and const.
- These two keywords provide Block Scope in JavaScript.
- Variables declared inside a { } block cannot be accessed from outside the block:

- Variables declared with the `var` keyword can NOT have block scope.
- Variables declared inside a { } block can be accessed from outside the block.
- Redeclaring a variable using the var keyword can impose problems.
- Redeclaring a variable inside a block will also redeclare the variable outside the block:
- Redeclaring a variable using the `let` keyword can solve this problem.
- Redeclaring a variable inside a block will not redeclare the variable outside the block:


### Hoisting
- Variables defined with `var` are hoisted to the top and can be initialized at any time.
- Meaning: You can use the variable before it is declared:


### JavaScript Hoisting
- Hoisting is JavaScript's default behavior of moving declarations to the top.
- JavaScript Declarations are Hoisted
- In JavaScript, a variable can be declared after it has been used.
- In other words; a variable can be used before it has been declared.
- Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

- Variables defined with `let` and `const` are hoisted to the top of the block, but not initialized.
- Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
- Using a `let` variable before it is declared will result in a ReferenceError.
- The variable is in a "temporal dead zone" from the start of the block until it is declared:
- Using a `const` variable before it is declared, is a syntax errror, so the code will simply not run.
- JavaScript Initializations are Not Hoisted
- JavaScript only hoists declarations, not initializations.
- To avoid bugs, always declare all variables at the beginning of every scope.
- Since this is how JavaScript interprets the code, it is always a good rule.
- JavaScript in strict mode does not allow variables to be used if they are not declared.



