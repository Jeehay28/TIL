### 📅 24/10/2022 (📚 Ch.23)

#### JavaScript Strings

- JavaScript strings are for storing and manipulating text.
- A JavaScript string is zero or more characters written inside quotes.

### JavaScript String Methods

- String length
- String slice()
- String substring()
- String substr()
- String replace()
- String replaceAll()
- String toUpperCase()
- String toLowerCase()
- String concat()
- String trim()
- String trimStart()
- String trimEnd()
- String padStart()
- String padEnd()
- String charAt()
- String charCodeAt()
- String split()

### JavaScript String Length

- The `length` property returns the length of a string

```
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
length
// 26
```

### 🔥 **[Excercise]** What character do you want to count?

```
const string = prompt("Enter a string");
const ch = prompt("What character do you want to count?");

function checkChar (str, ch) {
    let count = 0;
for (let i=0; i < str.length; i++) {
    if(str[i] === ch)
        count += 1;
    }
    return count;
}

const result = checkChar(string, ch);
document.write(`In the ${string}, there are ${result} times of ${ch}.`);
```

### JavaScript String

- The `trim()` method removes whitespace from both sides of a string:
- ECMAScript 2019 added the String method `trimStart()` to JavaScript.
- The `trimStart()` method works like `trim()`, but removes whitespace only from the start of a string.

```
// ' ab cd ef '
str3.trimStart()
// 'ab cd ef '
str3.trimEnd()
// ' ab cd ef'
```

### JavaScript String toUpperCase()

- A string is converted to upper case with `toUpperCase()`

### JavaScript String toLowerCase()

- A string is converted to lower case with `toLowerCase()`

```
str4 = "Good morning.";
str4.toUpperCase();
// 'GOOD MORNING.'
str4.toLowerCase();
// 'good morning.'
```

## Extracting String Parts

- There are 3 methods for extracting a part of a string:
  - `slice(start, end)`
  - `substring(start, end)`
  - `substr(start, length)`

### JavaScript String substring()

- `substring(start, end)`
- `substring()` is similar to `slice()`.
- The difference is that start and end values less than 0 are treated as 0 in `substring()`.

```
str4 = "Good morning.";
str4.substring(5);
// 'morning.'
```

### JavaScript String slice()

- `slice(start, end)`
- extracts a part of a string and returns the extracted part in a new string.

### JavaScript String substr()

- `substr()` is similar to `slice()`.
- The difference is that the second parameter specifies the length of the extracted part.
- `substr(start, length)`

```
let str = "0, 1, 2, 3, 4, 5";
str.slice(-1);
// '5'

// str4 = "Good morning."
str4.slice(5, 12)
// 'morning'
```

### `split()`

```
str5 = "Hello everyone"
str5.split(" ")
// (2) ['Hello', 'everyone']
str5.split("")
// (14) ['H', 'e', 'l', 'l', 'o', ' ', 'e', 'v', 'e', 'r', 'y', 'o', 'n', 'e']
```

### 🔥 **[Excercise]** Partially hide email address

- 🔗 [email.html]()
- 🔗 [email.css]()
- 🔗 [email.js]()

### JavaScript String Search Methods

- String indexOf()
- String lastIndexOf()
- String search()
- String match()
- String matchAll()
- String includes()
- String startsWith()
- String endsWith()

### JavaScript Arrays

- An array can hold many values under a single name, and you can access the values by referring to an index number.

```
str5 = "Hello, everyone"
array2 = str5.split("")
// (15) ['H', 'e', 'l', 'l', 'o', ',', ' ', 'e', 'v', 'e', 'r', 'y', 'o', 'n', 'e']
array3 = [...str5]
array3
// (15) ['H', 'e', 'l', 'l', 'o', ',', ' ', 'e', 'v', 'e', 'r', 'y', 'o', 'n', 'e']
```

### JavaScript `Array.from()`

- The `Array.from()` method returns an array from any object with a length property.
- The Array.from() method returns an array from any iterable object.

```
str5 = "Hello, everyone"
array4 = Array.from (str5)
array4
// (15) ['H', 'e', 'l', 'l', 'o', ',', ' ', 'e', 'v', 'e', 'r', 'y', 'o', 'n', 'e']
```

### 🔥 **[Excercise]** Capitalize the first letter

- 🔗 [capitalize.html]()
- 🔗 [capitalize.js]()

### JavaScript Array Iteration

- JavaScript Array forEach(): The `forEach()` method calls a function (a callback function) once for each array element.

```
let colors = ["red", "green", "blue", "white", "black"]

// for loop
for (let i=0; i<colors.length; i++){
    console.log(colors[i]);
}
// forEach loop
colors.forEach(color => {
    console.log(color)});

// result
red
green
blue
white
black
```

```
let colors = ["red", "green", "blue", "white", "black"];
colors.forEach((color, i) => console.log(`${i}----${color}`));

0----red
1----green
2----blue
3----white
4----black
```

```
let colors = ["red", "green", "blue", "white", "black"];
colors.forEach((color, i, colors) => console.log(`${i}th element in the group of ${colors} is ${color}`));

0th element in the group of red,green,blue,white,black is red
1th element in the group of red,green,blue,white,black is green
2th element in the group of red,green,blue,white,black is blue
3th element in the group of red,green,blue,white,black is white
4th element in the group of red,green,blue,white,black is black
```

### callback function

- A callback is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished.

### JavaScript engine

- A JavaScript engine is a software component that executes JavaScript code. The first JavaScript engines were mere interpreters, but all relevant modern engines use just-in-time compilation for improved performance.[1]
- JavaScript engines are typically developed by web browser vendors, and every major browser has one. In a browser, the JavaScript engine runs in concert with the rendering engine via the Document Object Model.
- The use of JavaScript engines is not limited to browsers. For example, the V8 engine is a core component of the Node.js and Deno runtime systems.
- Since ECMAScript is the standardized specification of JavaScript, ECMAScript engine is another name for these engines. With the advent of WebAssembly, some engines can also execute this code in the same sandbox as regular JavaScript code.

### JavaScript Sorting Arrays

- The `sort()` method sorts an array alphabetically:

```
let values = [5, 20, 3, 11, 4, 15]
values.sort(function (a, b) {
    return a - b;})
//  [3, 4, 5, 11, 15, 20]
```

```
values.sort(function (a, b) {
    return b - a;})
//  [20, 15, 11, 5, 4, 3]
```

### JavaScript Array pop()

- The `pop()` method removes the last element from an array:

### JavaScript Array push()

- The `push()` method adds a new element to an array (at the end)

```
nums = [1, 2, 3]
nums.push(4, 5)
// (5) [1, 2, 3, 4, 5]

nums.pop()
// 5
nums
// (4) [1, 2, 3, 4]
```

### JavaScript Array shift()

- The `shift()` method removes the first array element and "shifts" all other elements to a lower index.

### JavaScript Array unshift()

- The `unshift()` method adds a new element to an array (at the beginning), and "unshifts" older elements:

```
let fruits = ["apple", "pear", "banana"]

fruits.shift()
// 'apple'

fruits
// (2) ['pear', 'banana']

fruits.unshift("cherry")
// 3

fruits
// (3) ['cherry', 'pear', 'banana']
```

### Splicing and Slicing Arrays

- The `splice()` method adds new items to an array.
- The `slice()` method slices out a piece of an array.

```
subjects = ["html", "css", "javascript", "react", "typescript"]
// (5) ['html', 'css', 'javascript', 'react', 'typescript']
subjects.splice(2)
// (3) ['javascript', 'react', 'typescript']
subjects
// (2) ['html', 'css']
```

```
subjects = ["html", "css", "javascript", "react", "typescript"]
// (5) ['html', 'css', 'javascript', 'react', 'typescript']
subjects.slice(2)
// (3) ['javascript', 'react', 'typescript']
subjects
// (5) ['html', 'css', 'javascript', 'react', 'typescript']
```

```
week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
// (7) ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
let weekday = week.splice(1, 5)
// undefined
week
// (2) ['sun', 'sat']

weekday
// (5) ['mon', 'tue', 'wed', 'thu', 'fri']
```

```
brunch = ["egg", "milk", "apple", "bananna"]
// (4) ['egg', 'milk', 'apple', 'bananna']
brunch.splice(2, 0, "toast")
// []
brunch
// (5) ['egg', 'milk', 'toast', 'apple', 'bananna']

brunch.splice(1, 1, "coffee")
// ['milk']
brunch
// (5) ['egg', 'coffee', 'toast', 'apple', 'bananna']
```

```
colors =  ['red', 'green', 'blue', 'white', 'black']

let colors2 = colors.slice(2);
colors2
// (3) ['blue', 'white', 'black']
colors
// (5) ['red', 'green', 'blue', 'white', 'black']

colors.slice(2, 4)
//  ['blue', 'white']
```

### JavaScript Array map()

- The `map()` method creates a new array by performing a function on each array element.
- The `map()` method does not execute the function for array elements without values.
- The `map()` method does not change the original array.

```
numbers = [1, 2, 3, 4, 5]
numbers2 = numbers.map(number => number *2)
// (5) [2, 4, 6, 8, 10]
```

### JavaScript Array filter()

- The `filter()` method creates a new array with array elements that pass a test.

```
let scores = [90, 35, 64, 88, 45, 92]
highScores = scores.filter(score => score >=85)
// (3) [90, 88, 92]

highScores = scores.filter((score, index) => {
    if (score >=85) {
        console.log(`${index} ----${score}`)
    }});
// 0 ----90
// 3 ----88
// 5 ----92
```

## Creating a JavaScript Object

- With JavaScript, you can define and create your own objects.

- There are different ways to create new objects:

  1. **Create a single object, using an object literal.**
  2. Create a single object, with the keyword new.
  3. **Define an object constructor, and then create objects of the constructed type.**
  4. Create an object using Object.create().

### Using an Object Literal

- This is the easiest way to create a JavaScript Object.
- Using an object literal, you both define and create an object in one statement.
- An object literal is a list of name:value pairs (like age:50) inside curly braces {}.

```
book1 = {
    title : "Web standard",
    pages : 648 }

book1.author = "Ko"
// {title: 'Web standard', pages: 648, author: 'Ko'}

book1.title
book1["title"]
// 'Web standard'
```

```
book2 = { }
book2.title = "Little Prince"
book2.author = "Antoine de Saint-Exupéry"
book2
// {title: 'Little Prince', author: 'Antoine de Saint-Exupéry'}
```

```
book2.pages = 300

book2
// {title: 'Little Prince', author: 'Antoine de Saint-Exupéry', pages: 300}

delete book2.pages

book2
// {title: 'Little Prince', author: 'Antoine de Saint-Exupéry'}
```

```
book2.author = undefined

book2
// {title: 'Little Prince', author: undefined}
```

### Nested Objects

- Values in an object can be another object:

```
student = {
    name : "Melody",
    score : {
        history : 85,
        science : 94,
        average : function() {
            return (this.history + this.science) /2;
        }
    }
}

student.name
// 'Melody'
student.score.history
// 85
student.score.average()
// 89.5
```

- You can access nested objects using the dot notation or the bracket notation:

```
book3 = {
    title : "Little Prince",
    pages : 300,
    buy() {
        console.log("Purchased")
    }
}
// {title: 'Little Prince', pages: 300, buy: ƒ}
```

```
book4 = {
    title : "JavaScript",
    pages : 500,
    author : "Ko",
    done : false,
    finish : function () {book4.done === false ? console.log("reading") : console.log("finished")}
}

book4
//{title: 'JavaScript', pages: 500, author: 'Ko', done: false, finish: ƒ}

book4.finish()
// reading

book4.done = true;
book4.finish()
// finished
```

### What About `this`?

he handling of this is also different in arrow functions compared to regular functions.

In short, with arrow functions there are no binding of this.

In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

With arrow functions the this keyword always represents the object that defined the arrow function.

Let us take a look at two examples to understand the difference.

Both examples call a method twice, first when the page loads, and once again when the user clicks a button.

The first example uses a regular function, and the second example uses an arrow function.

**The result shows that the first example returns two different objects (window and button), and the second example returns the window object twice, because the window object is the "owner" of the function.**

- **With a regular function this represents the object that calls the function:**

```
// Regular Function:
hello = function() {
  document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", hello);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);
```

- **With an arrow function this represents the owner of the function:**

```
// Arrow Function:
hello = () => {
  document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", hello);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);
```

### JavaScript Object Constructors

- It is considered good practice to name constructor functions with an upper-case first letter.
- In a constructor function `this` does not have a value. It is a substitute for the new object. The value of `this` will become the new object when a new object is created.
- The way to create an "object type", is to use an object constructor function.

```
function Book(title, pages, author, done) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.done = done;
    this.finish = function() {
        this.done === false ? console.log("reading") : console.log("finished")
    }
}

littlePrince = new Book("Little Prince", 300, "Antoine de Saint-Exupéry", true)
// Book {title: 'Little Prince', pages: 300, author: 'Antoine de Saint-Exupéry', done: true, finish: ƒ}
python = new Book("Jump to Python", 450, "Park", false)
// Book {title: 'Jump to Python', pages: 450, author: 'Park', done: false, finish: ƒ}
```

### syntactic sugar

- Additions to the syntax of a computer language that make code easier for humans to read or write, but that do not change the functionality or expressiveness of the language.
- Syntactic sugar is a term for a more concise syntax that provides the same functionality for something that already exists. It aims to help make code shorter, therefore, easier to write. No new functionality is introduced.

```
class Book2 {
    construnctor(title, pages, author, done) {
        this.title = title;
        this.pages = pages;
        this.author = author;
        this.done = done;
    }
    finish() {
        this.done === false ? console.log("reading") : console.log("done")
    }
}

java = java = new Book2 ("Conquer Java", 600, "Kim", false)

```

### 🔥 **[Excercise]** volume of a cylinder calculator

- 🔗 [cylinder.html]()
- 🔗 [cylinder.css]()
- 🔗 [cylinder.js]()

### JavaScript For In

- The JavaScript `for i`n` statement loops through the properties of an Object
- The JavaScript `for in` statement can also loop over the properties of an Array

```
let bag = {
    type : "backpack",
    color : "blue",
    size : 15}

for (key in bag) {
    console.log(`${key} -- ${bag[key]}`)
}
//
type -- backpack
color -- blue
size -- 15
```

```
Object.keys(bag)
// (3) ['type', 'color', 'size']
Object.values(bag)
// (3) ['backpack', 'blue', 15]
Object.entries(bag)
// (3) [Array(2), Array(2), Array(2)]
0: (2) ['type', 'backpack']
1: (2) ['color', 'blue']
2: (2) ['size', 15]length: 3[[Prototype]]: Array(0)
```

### JSON

- JSON stands for JavaScript Object Notation
- JSON is a lightweight data interchange format
- JSON is language independent \*
- JSON is "self-describing" and easy to understand
- JSON is a format for storing and transporting data.
- JSON is often used when data is sent from a server to a web page.
- The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.
- The JSON format is syntactically identical to the code for creating JavaScript objects.
- Because of this similarity, a JavaScript program can easily convert JSON data into native JavaScript objects.
  - JSON Example
  ```
  {
  "employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
  ]
  }
  ```
  - JSON Syntax Rules
    - Data is in name/value pairs
    - Data is separated by commas
    - Curly braces hold objects
    - Square brackets hold arrays

```
// Object
{
name : "Doremi"
major : "Computer Engineering"
grade : 2
}
```

```
// JSON
{
"name" : "Doremi ",
"major" : "Computer Engineering",
"grade" : 2
}
```

- 🔗 [JSON Placeholder](https://jsonplaceholder.typicode.com/users)

### `JSON.parse()`

- A common use of JSON is to exchange data to/from a web server.
- When receiving data from a web server, the data is always a string.
- Parse the data with `JSON.parse()`, and the data becomes a JavaScript object.

### `JSON.stringify()`

- A common use of JSON is to exchange data to/from a web server.
- When sending data to a web server, the data has to be a string.
- Convert a JavaScript object into a string with `JSON.stringify()`.

```
student = {
    name : "Melody",
    major : "CS",
    grade : 2
}
// {name: 'Melody', major: 'CS', grade: 2}

JSON.stringify(student)
// '{"name":"Melody","major":"CS","grade":2}'
```

```
member = `{"name": "Park", "age" : 30, "hobby":"piano"}`
// '{"name": "Park", "age" : 30, "hobby":"piano"}'
JSON.parse(member)
// {name: 'Park', age: 30, hobby: 'piano'}
```

```
let member = {name : "Duo", age:25}

JSON.stringify(member)
// '{"name":"Duo","age":25}'

member2 = JSON.stringify(member)
// '{"name":"Duo","age":25}'

JSON.parse(member2)
// {name: 'Duo', age: 25}
```

### XML

- Extensible Markup Language (XML) is a markup language and file format for storing, transmitting, and reconstructing arbitrary data.
- The Extensible Markup Language (XML) is a simple text-based format for representing structured information: documents, data, configuration, books, transactions, invoices, and much more. It was derived from an older standard format called SGML (ISO 8879), in order to be more suitable for Web use.
