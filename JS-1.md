📅 13/10/2022

#### 🔋 How to open the console in Chrome

1. Open a blank or empty page built into the browser typing `about:blank` into the address bar and pressing `Enter`.
2. `Right-click` any page element and select Inspect Element. `Click the Console tab`.
3. Using a keyboard shortcut, open Developer Tools and bring focus to the console. Windows: `Ctrl + Shift + J`. Mac: `Cmd + Opt +J`.

#### ❓ `about:blank`

- The `about:blank` page is a blank page in your web browser. The “about:” portion of the address instructs the browser to display internal, built-in pages. These pages are accessible without having to connect to the internet. This allows you to access the advanced settings of your browser at any point in time.

## Fuction

`alert()`
`confirm()`
`prompt()`
`console.log()`
`document.write()`
`typeof()`

### Variables

let 변수명
const 변수명
var와 let, const

### Naming Convention

## 🔥 [실습] 나이 계산 프로그램 만들기

```
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>나이 계산하기</title>
</head>
<body>
    <script>
        const currentYear = 2022;
        let birthYear;
        let age;

        birthYear = prompt("태어난 연도를 입력하세요. (YYYY)");
        age = currentYear - birthYear + 1;
        alert(currentYear + "년도 현재, 당신의 나이는 " + age + "세 입니다.");

    </script>
</body>
</html>
```

# JavaScript Data Types

### 특수문자

\ , \t, \n

### Template Literals(템플릿 리터럴)

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

### ✏️ truthy falsy

- a `truthy` value is a value that is considered true when encountered in a Boolean context. All values are `truthy` unless they are defined as `falsy`. That is, all values are `truthy` except `false` , `0` , `-0` , `0n` , `""` , `null` , `undefined` , and `NaN` . JavaScript uses type coercion in Boolean contexts.
- A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

### ✏️ 6 Falsy values in JavaScript

- There are only six falsey values in JavaScript:

```
undefined
null
NaN
0
"" (empty string)
false
```

### ✏️ difference between declaration and definition

- Definition associates the variable with a type and allocates memory, whereas declaration just specifies the type but doesn't allocate memory. Declaration is more useful when you want to refer the variable before definition.
- Declaration provides basic attributes of a variable/function. definition provides details of that variable/function. Initialisation provides details of that variable/function and value.

### ✏️ `undefined`

- A variable that has not been assigned a value is of type undefined . A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned.
- The global `undefined` property represents the primitive value undefined. It is one of JavaScript's primitive types.
  ![](../TIL/nullvsundefined.jpg)

### ❓ JSON

- JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).
- JSON stands for Javascript Object Notation. JSON is a text-based data format that is used to store and transfer data. For example, // JSON syntax { "name": "John", "age": 22, "gender": "male", } In JSON, the data are in key/value pairs separated by a comma , . JSON was derived from JavaScript.

### ❓ Markdown preview

- To switch between views, press `Ctrl+Shift+V` in the editor.

### 배열

### 객체

- 여러개의 원시 유형을 하나로 묶어 놓은 것
- 원시유형 외에는 모두 객체 함수도 객체
- 프로퍼티와 메서드를 가지고 있다

```
let gitBook = {
title : "
깃 깃허브 입문 ", // 문자열
pubDate : "2019 12 06", // 문자열
pages : 272, // 숫자
finished : true // 논릿값
}
```

- 키:값 쌍을 프로퍼티라고 함

```
gitBook.title
gitBook[`title`]
```

```
let
monitor
size
32
color
::”
brand
::"
curved
false
}
```

```
console.log(`
내가 사용하는 모니터의 크기는
${monitor. 입니다
```

### ✏️ What is a symbol in JavaScript?

- Symbols are new primitive type introduced in ES6. Symbols are completely unique identifiers. Just like their primitive counterparts (Number, String, Boolean), they can be created using the factory function `Symbol()` which returns a Symbol. Every time you call the factory function, a new and unique symbol is created.

### ✏️ What is loose type?

- A loosely typed language is a programming language that does not require a variable to be defined. For example, Perl is a loosely typed language, you can declare a variable, but it doesn't require you to classify the type of variable.
- JavaScript is loosely typed. You don't have to tell that a string is a string, nor you can require a function to accepts an integer as its parameter. This gives JavaScript a lot of flexibility. Flexibility lets you move faster, change things quickly, iterate at a faster velocity.

### ❓ TypeScript

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
Number(true)
// 1
Number("20")
// 20
Number("Hi?")
// NaN
```

### `parseInt()` `parseFloat()`

- `parseInt()` is for converting a non integer number to an int and `parseFloat()` is for converting a non float (with out a decimal) to a float (with a decimal).
- The difference is what happens when the input is not a "proper number". `Number()` returns `NaN` while `parseFloat()` parses "as much as it can". If called on the empty string `Number()` returns `0` while `parseFloat()` returns `NaN`.

```
let userInput = parseInt(prompt("
아무 숫자나 입력하세요
```

```
let bodyHeat = prompt("
현재 체온은
parseFloat(bodyHeat)
// 36.4
```

### `toString()`

- The `toString()` method returns a string as a string. The `toString()` method does not change the original string. The `toString()` method can be used to convert a string object into a string.

### `Boolean()`

- The `Boolean()` constructor can create Boolean objects or return primitive values of type boolean.

### 🔥 실습 온도변환기

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

### ❓ node.js 는 서버에서 사용할 수 있는 프레임워크

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

babel : 프레임워크

### ❓ Bootstrap

- Front-end framework
- Initial release date: August 19, 2011
- Programming languages: CSS, HTML, JavaScript, Sass, Less
- Bootstrap is the world's most famous free CSS framework.
- Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.

# ✏️ JavaScript Operators

### Types of JavaScript Operators:

- Aritmetic Operators
- Assignment Operators
- Comparison Operators
- Logical Operators
- Conditional Operators
- Type Operators

- 연산자

```
> a = 10
10
> sum = a + 5
15
> a++ // a부터 처리
10
> a
11
> ++a //++부터 처리
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

### JavaScript Assignment Operators 할당연사자(대입연산자)

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

### Adding JavaScript Strings 연결 연산자

### JavaScript Comparison Operators 비교 연산자

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

### 논리 연산자 JavaScript Logical Operators

- `&&` Logical AND: true if both the operands/boolean values are true, else evaluates to false
- `||` Logical OR: true if either of the operands/boolean values is true . evaluates to false if both are false
- `!!` Logical NOT: true if the operand is false and vice-versa.

### Operator precedence 연산자 우선 순위

- Operator precedence describes the order in which operations are performed in an arithmetic expression.
- Multiplication (\*) and division (/) have higher precedence than addition (+) and subtraction (-).
- 🔗 [Operator Precedence Values](https://www.w3schools.com/js/js_precedence.asp)

- 단항 > 산술 > 비교 > 논리 > 할당

### ❓ Control statements 제어문

- Control statements are designed to allow you to create scripts that can decide which lines of code are evaluated, or how many times to evaluate them. There are two different types of control statements: conditional statements and loop statements.

- 제어문: 소스 실행 순서를 결정하는 명령문
- 조건에 따라 순서 조절하기 : if 문 , if…else 문 , switch 문, 조건 연산자
- 반복 횟수 조절하기 : for 문 , while 문 , do…while 문
- 소스 흐름에 영향을 주는 문 : continue 문 , break 문

### 🔔 조건문

- 프로그램 흐름 조절

### 반복문

### 🔥 나이가 20미만이면 미성년입니다.

### 🔥 3 의 배수 체크하기

### 🔥 짝수, 홀수 구분하는 프로그램

- 조건연산자

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

### switch 문

- 처리할 명령이 많을 경우 switch문이 편리함

### 🔥 실습 신청과목 체크하기

### 두가지 이상의 조건 체크하기

- or (||)

```
let
currentTime = 10;
if
currentTime < 9 || currentTime > 18) {
alert("
현재 영업 시간이 아닙니다
} else
alert("
현재 영업 중입니다
}
```

-- and (&&)

### short-circuit evaluation 단축 평가값 활용하기

- Short-circuiting is a programming concept in which the compiler skips the execution or evaluation of some sub-expressions in a logical expression. The compiler stops evaluating the further sub-expressions as soon as the value of the expression is determined.
- The logical AND expression is a short-circuit operator. As each operand is converted to a boolean, if the result of one conversion is found to be false , the AND operator stops and returns the original value of that falsy operand; it does not evaluate any of the remaining operands.

- 조건식은 왼쪽에서 오른쪽으로 진행하면서 처리한다

or 는 true가 될만한 것을 앞으로
and는 false가 될만한 것을 앞으로

```
let x = 10
let y = 20
if ( x > 15 && y > 15) alert("둘 다 15 보다 큽니다 .") // y > 15 는 실행하지 않음
if ( y > 15 || x > 15) alert("둘 중 하나는 15 보다 큽니다 .") // x > 15 는 실행하지 않음
```
