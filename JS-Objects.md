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
- `window.navigator` or just `navigator` :
