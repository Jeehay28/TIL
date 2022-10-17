### 📅 17/10/2022

### React ES6 Spread Operator

- The JavaScript spread operator (`...`) allows us to quickly copy all or part of an existing array or object into another array or object.

```
const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021,
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

// result
> console.log(myUpdatedVehicle);
{brand: 'Ford', model: 'Mustang', color: 'yellow', type: 'car', year: 2021}
```

### Function Rest Parameter

- The rest parameter (`...`) allows a function to treat an indefinite number of arguments as an array:

```
function addNum(...numbers) {
let sum = 0;

for (let number of numbers) {
sum += number;
}
return sum;
}
// result

> addNum(1, 3);
  4
> addNum(1, 3, 5, 7);
  16
```

```
function displayFavorites(first, ...favs) {
let str = `가장 좋아하는 과일은 ${first}군요`;
return str;
}

console.log(displayFavorites("사과", "포도", "토마토"));
```

```
> const user = ["His", "name", "is", "Hong"];

> console.log(user);
> (4) ['His', 'name', 'is', 'Hong']

> console.log(...user);
> His name is Hong
```

#### `setInterval()`

- The `setInterval()` method repeats a given function at every given time-interval.

```
function greeting() {
console.log("Hello");
}
setInterval(greeting, 2000);
```

```
// Using arrow function
setInterval(() => {
console.log("Hello?");
}, 2000);
```

#### `clearInterval()`

- The `clearInterval()` method clears a timer set with the `setInterval()` method.

```
let counter = 0;

let timer = setInterval(() => {
console.log("Hi?");
counter++;
    if (counter === 5) {
        clearInterval(timer);
    }
}, 2000);
```

#### `setTimeout()`

- The `setTimeout()` method calls a function after a number of milliseconds.
- 1 second = 1000 milliseconds.

```
setTimeout(() => {
console.log("Hi?")
}, 3000);
```

### JavaScript Events

- An HTML event can be something the browser does, or something a user does.
- Here are some examples of HTML events:
  - An HTML web page has finished loading
  - An HTML input field was changed
  - An HTML button was clicked
- Often, when events happen, you may want to do something.
- JavaScript lets you execute code when events are detected.
- HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

### JavaScript Event Handlers

1. HTML 태그에 연결하기

```
<ul>
		<li><a href="#" onclick="changeBg('green')">Green</a></li>
		<li><a href="#"onclick="changeBg('orange')">Orange</a></li>
		<li><a href="#" onclick="changeBg('purple')">Purple</a></li>
	</ul>

  <script>
		function changeBg(color) {
 		 document.body.style.backgroundColor = color;
		}
	</script>
```

2. 웹 요소에 직접 함수 연결하기

```
const button = document.querySelector("button");
// 웹 문서에서 버튼을 불러와서

button.onclick = function() {
document.body.style.backgroundColor = "green";
}
//클릭이 발생하면 배경화면을 'green'으로 바꾼다.

```

```
const button = document.querySelector("button");

function changeBackground(){
document.body.style.backgroundColor = "green";
}

button.onclick = changeBackground;
// 괄호를 넣지 않는다.
```
