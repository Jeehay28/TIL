// Strict mode
// added in ES5
// Use this for Vanilla JavaScript
// The term vanilla script is used to refer to the pure JavaScript (or we can say plain JavaScript) without any type of additional library. 

'use strict';

// Variable : rw (read and write)
// `let` (added in ES6)
let globalName = 'global name';
{
    let name = 'jeehay';
    console.log(name);

    name = 'hello';
    console.log('hello');
}
console.log(`block scope : ${name}`);
console.log(`global scope : ${globalName}`);

// var (Never use this!)
// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
// 어디에서 선언을 했느냐와 상관없이 선언을 제일 위로 끌어 올려주는 것을 말합니다.
// var has no block scope.

{
    age = 4;
    var age;
}

console.log(`A variable declared with 'var' can be accessed from outside the block : ${age}`);

// BABEL
// Babel is a JavaScript compiler.
// Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

// Constant (read only)
// Favor immutable data type for a few reasons
// - security


// Data types
// All types except Object define immutable values represented directly at the lowest level of the language. 
// We refer to values of these types as primitive values.
// All primitive types, except null, can be tested by the typeof operator. typeof null returns "object", so one has to use === null to test for null.
// Null, Undefined, Boolean, Number, BigInt, String, Symbol


const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value : ${count}, type : ${typeof count}`);
console.log(`value : ${size}, type : ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`value : ${bigInt}, type : ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value : ${greeting}, type : ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value : ${helloBob}, type : ${typeof helloBob}`);

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value

const canRead = true;
const test = 3 < 1; // false
console.log(`value : ${canRead}, type : ${typeof canRead}`);
console.log(`value : ${test}, type : ${typeof test}`);


// null
let nothing = null;
console.log(`value : ${nothing}, type : ${typeof nothing}`);


// undefined
let x = undefined;
console.log(`value " ${x}, type : ${typeof x}`);

// symbol
// A JavaScript Symbol is a primitive datatype just like Number, String, or Boolean.
// It represents a unique "hidden" identifier that no other code can accidentally access.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value : ${gSymbol1.description}, type : ${typeof gSymbol1}`);

// Dynamic and weak typing
// JavaScript is also a weakly typed language, which means it allows implicit type conversion when an operation involves mismatched types, instead of throwing type errors.

let txt = 'hello';
console.log(txt.charAt(0));
console.log(`value : ${txt}, type : ${typeof txt}`);

txt = 1;
console.log(`value : ${txt}, type : ${typeof txt}`);

txt = '7' + 5;
console.log(`value : ${txt}, type : ${typeof txt}`);

txt = '8' / '2';
console.log(`value : ${txt}, type : ${typeof txt}`); // number
console.log(txt.charAt(0)); 
