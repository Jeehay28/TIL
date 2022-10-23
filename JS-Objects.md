### 📅 20/10/2022 (📚 Ch.21)

### JavaScript Window - The Browser Object Model

- The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.
- There are no official standards for the Browser Object Model (BOM).
- Since modern browsers have implemented (almost) the same methods and properties for JavaScript interactivity, it is often referred to, as methods and properties of the BOM.

### The Window Object

- The `window` object is supported by all browsers. It represents the browser's window.
- All global JavaScript objects, functions, and variables automatically become members of the window object.
- Global variables are properties of the window object.
- Global functions are methods of the window object.
- Even the document object (of the HTML DOM) is a property of the window object:

```
window.document.getElementById("header");
// is the same as below
document.getElementById("header");
```

- 🔗 [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Window)

### Window Size Property

- `window.innerHeight` - the inner height of the browser window (in pixels)
- `window.innerWidth` - the inner width of the browser window (in pixels)
- The browser window (the browser viewport) is NOT including toolbars and scrollbars.

```
> window.innerWidth
 768

> window.outerHeight
 840
```

### Window Methods

- `window.open()` - open a new window
- `window.close()` - close the current window

```
<button onclick="window.close()">Close</button>
```

- `window.moveTo()` - move the current window to the specified coordinates
- The `moveBy()` method moves a window a number of pixels relative to its current coordinates.
- `window.resizeTo()` - resize the current window to a new width and height
- The `resizeBy()` method resizes a window by a specified amount.

```
> window.open("https://www.naver.com")

> window.open("https://www.naver.com", "popup")
> window.open("https://www.naver.com", "popup", "width=300, height=300")
```

### 🔥 **[Excercise]** Notice popup

```
<script>
	window.open("notice.html", "pop", "left=100, top=200, width=500, height=400");
</script>
```

```
<script>
	let newWindow = window.open("notice.html", "pop", "left=100, top=200, width=500, height=400");
	if (newWindow === null) {
		alert("Pop-ups blocked. Allow pop-ups and refresh.");
	}
	newWindow.moveBy(100, 100);
</script>
```

### 📅 21/10/2022 (📚 Ch.21)

### The Window Navigator Object

- The navigator object contains information about the browser.
- The location object is a property of the window object.
- The navigator object is accessed with:
- `window.navigator` or just `navigator`:

### Rendering Engine

- **A browser engine (also known as a layout engine or rendering engine) is a core software component of every major web browser.**
- The primary job of a browser engine is to transform HTML documents and other resources of a web page into an interactive visual representation on a user's device.

### Javascript Engine

- A JavaScript engine is a software component that executes JavaScript code. The first JavaScript engines were mere interpreters, but all relevant modern engines use just-in-time compilation for improved performance.
- JavaScript engines are typically developed by web browser vendors, and every major browser has one. In a browser, the JavaScript engine runs in concert with the rendering engine via the Document Object Model.
- The use of JavaScript engines is not limited to browsers. For example, the V8 engine is a core component of the Node.js and Deno runtime systems.
- Since ECMAScript is the standardized specification of JavaScript, ECMAScript engine is another name for these engines. With the advent of WebAssembly, some engines can also execute this code in the same sandbox as regular JavaScript code.

### Window navigator.userAgent

- The `userAgent` property returns the user-agent header sent by the browser to the server.
- The `userAgent` property is read-only.
- The value returned, contains information about the browser name, version and platform.
- The web specification suggests that browsers should provide as little header information as possible. Never assume that this property will stay unchanged in future browsers.

```
> navigator.userAgent
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36'
```

### 🍪 Cookie

- The term "cookie" was coined by web-browser programmer Lou Montulli. It was derived from the term "magic cookie", which is a packet of data a program receives and sends back unchanged, used by Unix programmers. The term magic cookie itself derives from the fortune cookie, which is a cookie with an embedded message.

### 🍪 Magic Cookie

- Typically used in Unix systems, a magic cookie may be an identification token or password that activates a function. The "magic" implies some obscure data known only to the software and not the user. The Web cookie term was coined after magic cookie.

### The Window Location Object

- The location object contains information about the current URL.
- The location object is a property of the window object.
- The location object is accessed with: `window.location` or just `location`

### JavaScript String `replace()`

- The `replace()` method searches a string for a value or a regular expression.
- The `replace()` method returns a new string with the value(s) replaced.
- The `replace()` method does not change the original string.

### Window `location.reload()`

- The `reload()` method reloads the current document.
- The `reload()` method does the same as the reload button in your browser.

### 🔥 **[Excercise]** Event Pop-up

- 🔗 [main-5.html](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/main-5.html)
- 🔗 [event-pop.html](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/event-pop.html)

### 🔥 **[Excercise]** Window Screen size

- The `screen.availWidth` property returns the width of the visitor's screen, in pixels, minus interface features like the Windows Taskbar.
- The `screen.availHeight` property returns the height of the visitor's screen, in pixels, minus interface features like the Windows Taskbar.

```
<script>
	document.write(`<p><b> screen.availWidth : </b> ${screen.availWidth} </p>`);
	document.write(`<p><b> screen.availHeight : </b> ${screen.availHeight} </p>`);
	document.write(`<p><b> screen.width : </b> ${screen.width} </p>`);
	document.write(`<p><b> screen.height : </b> ${screen.height} </p>`);
</script>
```

### 🔥 **[Excercise]** Place popup in center of screen

```
<script>
      // window.open("notice.html", "pop", "width=500, height=400");
      function openCenter(doc, win, w, h) {
        let left = (screen.availWidth - w) / 2;
        let top = (screen.availHeight - h) / 2;
        let opt = `left=${left}, top=${top}, width=${w}, height=${h}`;
        window.open(doc, win, opt);
      }
      openCenter("notice.html", "pop", 500, 400);
```

### 🍀 Object-oriented programming (OOP)

- Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).

### 🍀 Instance

- In object-oriented programming (OOP), an instance is a specific realization of any object. An object may be different in several ways, and each realized variation of that object is an instance. The creation of a realized instance is called instantiation.

### 🍀 Prototypes and Inheritance

- Prototypes are the mechanism by which JavaScript objects inherit features from one another.
- Prototypes are a powerful and very flexible feature of JavaScript, making it possible to reuse code and combine objects.
- In particular they support a version of inheritance. Inheritance is a feature of object-oriented programming languages that lets programmers express the idea that some objects in a system are more specialized versions of other objects.
- For example, if we're modeling a school, we might have professors and students: they are both people, so have some features in common (for example, they both have names), but each might add extra features (for example, professors have a subject that they teach), or might implement the same feature in different ways. In an OOP system we might say that professors and students both inherit from people.
- You can see how in JavaScript, if Professor and Student objects can have Person prototypes, then they can inherit the common properties, while adding and redefining those properties which need to differ.

### JavaScript Date Objects

- Date objects are created with the `new Date()` constructor.
- `new Date()` creates a new date object with the current date and time.

```
> let birthDay = new Date("1980-05-28")
> birthDay
  Wed May 28 1980 09:00:00 GMT+0900 (Korean Standard Time)
```

- The methods in the table below are used for getting information from a date object.
  - `getFullYear()` Get the year as a four digit number (yyyy)
  - `getMonth()` Get the month as a number (0-11)
  - `getDate()` Get the day as a number (1-31)
  - `getDay()` Get the weekday as a number (0-6)
  - `getHours()` Get the hour (0-23)
  - `getMinutes()` Get the minute (0-59)
  - `getSeconds()` Get the second (0-59)
  - `getMilliseconds()` Get the millisecond (0-999)
  - `getTime()` Get the time (milliseconds since January 1, 1970)

### Add days to date

```
> now = new Date()
Fri Oct 21 2022 10:58:56 GMT+0900 (Korean Standard Time)

> now.setDate(now.getDate() + 50)
1670637536379

> console.log(now)
VM2632:1 Sat Dec 10 2022 10:58:56 GMT+0900 (Korean Standard Time)

> now.getTime()
1670637536379

```

### Time Based change of image

```
const today = new Date() ;
const hour = today.getHours();
const container = document.querySelector("#container");

let img = document.createElement("img");

// if (hour < 12) {
//     img.src = "images/morning.jpg";

// } else {
//     img.src = "images/afternoon.jpg"
// }

img.src = (hour < 12) ? "images/morning.jpg" : "images/afternoon.jpg";

container.appendChild(img);
```

### 🔥 **[Excercise]** Anniversary Tracker

- 🔗 [dday.html](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/dday.html)
- 🔗 [dday.js](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/js/dday.js)
- 🔗 [dday.css](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/css/dday.css)

### 🔥 **[Excercise]** How many days until Christmas Day?

- 🔗 [x-mas.html](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/x-mas.html)
- 🔗 [x-mas.js](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/js/x-mas.js)
- 🔗 [x-mas.css](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/css/x-mas.css)

### 🔥 **[Excercise]** Time and Date

- 🔗 [clock.html](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/clock.html)
- 🔗 [clock.js](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/js/clock.js)
- 🔗 [clock.css](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/css/clock.css)

### JavaScript Math Object

- Unlike other objects, the Math object has no constructor.
- The Math object is static.
- All methods and properties can be used without creating a Math object first.
- Math method
  - Math.round(x) returns the nearest integer:
  - Math.ceil(x) returns the value of x rounded up to its nearest integer:
  - Math.floor(x) returns the value of x rounded down to its nearest integer:
  - Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):

```
Math.floor(Math.random() * 100 + 1)
```

- `Math.PI`
- 🌵 The `toFixed()` method rounds the string to a specified number of decimals.

### 🔥 **[Excercise]** Choose a random winner

- 🔗 [random.html](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/random.html)
- 🔗 [random.js](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/js/random.js)
- 🔗 [random.css](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/css/random.css)

### 🔥 **[Excercise]** Random Background Image Change

- 🔗 [changeBg.html](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/changeBg.html)
- 🔗 [changeBg.js](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/js/changeBg.js)
- 🔗 [changeBg.css](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/css/changeBg.css)
