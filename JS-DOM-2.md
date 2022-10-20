### 📅 19/10/2022 (📚 Ch.20)

## Event Bubbling or Event Capturing

- There are **_two ways of event propagation in the HTML DOM, bubbling and capturing_**.
- Event propagation is a way of defining the element order when an event occurs. If you have a `<p>` element inside a `<div>` element, and the user clicks on the `<p>` element, which element's "click" event should be handled first?
- **In bubbling the inner most element's event is handled first and then the outer:** the `<p>` element's click event is handled first, then the `<div>` element's click event.
- **In capturing the outer most element's event is handled first and then the inner:** the`<div>` element's click event will be handled first, then the `<p>` element's click event.
- With the `addEventListener()` method you can specify the propagation type by using the "useCapture" parameter:
  `addEventListener(event, function, useCapture);`
- **The default value is false, which will use the bubbling propagation, when the value is set to true, the event uses the capturing propagation.**

```
<body>
  BODY
  <div onclick = "console.log('div')">
    DIV
    <section onclick = "console.log('section')">
      SECTION
      <p onclick = "console.log('p')">P</p>
    </section>
  </div>
</body>
```

```
const elements = document.querySelectorAll("*");

for (let element of elements) {
  element.addEventListener(
    "click",
    (e) =>
      console.log(`event.target : ${e.target.tagName}, event.currentTarget : ${e.currentTarget.tagName}
    `),
    true
  );
}
```

### `event.target` & `event.currentTarget`

- The target event property returns the element that triggered the event.
- The target property gets the element on which the event originally occurred, opposed to the currentTarget property, which always refers to the element whose event listener triggered the event.

```
const elements = document.querySelectorAll('*');  // store all elements in const elements
// writes tag names of both event.target and event.currentTarget when onclick event occurs
for (let element of elements) {
  element.addEventListener("click", e =>
    console.log(`event.target : ${e.target.tagName}, event.currentTarget : ${e.currentTarget.tagName}`)
  );
}

// another example for for loop
// for (let i = 0 ; i < elements.length ; i++) {
//   elements[i].addEventListener("click", function(e) {
//     console.log(e.target.tagName);
//   });
// }
```

### 🔥 **[Excercise]** How to display hide/show menu using javascript

- 🔗 [menu.html](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/menu.html)
- 🔗 [menu.css](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/css/menu.css)
- 🔗 [menu.js](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/js/menu.js)

### 🔥 **[Excercise]** Responsive Navigation Bar using Javascript (Hamburger Button included)

- 🔗 [navi.html](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/navi.html)
- 🔗 [navi.css](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/css/navi.css)
- 🔗 [navi.js](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/js/navi.js)

### 📅 20/10/2022 (📚 Ch.20)

### JavaScript HTML DOM Node Lists

- A `NodeList` object is a list (collection) of nodes extracted from a document.
- A `NodeList` object is almost the same as an `HTMLCollection` object.

```
> document.querySelectorAll("p")
NodeList(3) [p, p, p]
```

### HTML Elements are Nodes

- **All HTML elements are nodes.**
- **Elements are nodes. Attributes are nodes. Texts are nodes.**
- Some elements contain other nodes.
- Some elements contain text nodes.
- Some elements consain attribute nodes.

### HTML DOM Document `createElement()`

- The `createElement()` method creates an element node.

### HTML DOM Document `createTextNode()`

- The `createTextNode()` method creates a text node.

### HTML DOM Element `appendChild()`

- The `appendChild()` method appends a node (element) as the last child of an element.

```
let newP = document.createElement("p")

let textNode = document.createTextNode("Typescript")

> newP.appendChild(textNode)
  Typescript

> document.body.appendChild(newP)
  <p>Typescript</p>
```

### 🔥 **[Excercise]** How to Create an Add Cart

```
const orderButton = document.querySelector("#order");
const orderInfo = document.querySelector("#orderInfo");
const title = document.querySelector("#container > h2");

orderButton.addEventListener("click", ()=> {
    let newP = document.createElement("p");
    let textNode = document.createTextNode(title.innerText);
    newP.appendChild(textNode);
    // Chnage font size & color
    newP.style.fontSize = "0.8em";
    newP.style.color = "blue";
    orderInfo.appendChild(newP);
}, {once:true});
```

`createAttribute()`
`setAttributeNode`

```
> let newImg = document.createElement("img")
> let srcNode = document.createAttribute("src")
> srcNode.value = "images/wall.jpg"
  'images/wall.jpg'

> newImg.setAttributeNode(srcNode)
> document.body.appendChild(newImg)
  <img src="images/wall.jpg">
// document.body : current page
```

### 🔥 **[Excercise]** How to add a picture

```
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let newImg = document.createElement("img");
    let srcNode = document.createAttribute("src");
    // const newImg = document.createElement("img");
    // const srcNode = document.createAttribute("src");

    srcNode.value = "images/wall.jpg"
    newImg.setAttributeNode(srcNode);
    document.body.appendChild(newImg);
}, {once:true});
```

### HTML DOM Element `insertBefore()`

- The `insertBefore()` method inserts a child node before an existing child.

```
let tsNode = document.createElement("p");
let tsTextNode = document.createTextNode("Typescript");
tsNode.appendChild(tsTextNode);
let basisNode = document.querySelectorAll("p")[0];
// let basisNode = document.querySelector("p");

> basisNode
  <p>​HTML​</p>​

> document.body.insertBefore(tsNode, basisNode)
  <p>​Typescript​</p>​
```

### HTML DOM Element `remove()`

- The `remove()` method removes an element (or node) from the document.

```
let heading = document.querySelector("h1")
heading.remove()
```

```
const title = document.querySelector("h1");
title.addEventListener("click", () => {
    title.remove();
});
```

```
const first = document.querySelectorAll("#items > li")[0];
const second = document.querySelectorAll("#items > li")[1];
const third = document.querySelectorAll("#items > li")[2];

first.addEventListener("click", ()=> {first.remove();});
second.addEventListener("click", ()=> {second.remove();});
third.addEventListener("click", ()=> {third.remove();});
```

### HTML DOM Element `removeChild()`

- The `removeChild()` method removes an element's child.

```
const items = document.querySelectorAll("#items > li");
// console.log(items);
// items: nodelist , similiar to array

for(let item of items) {
    item.addEventListener("click", function() {
        // console.log(this.parentNode);
        // `this` includes the element clicked
        this.parentNode.removeChild(this);
        // this.remove();
    })
}
```

### 🍀 Reference

- 🔗 [Hello Cognition](https://beta.sayhello.so/)

### Emmet snippet

- Emmet — the essential toolkit for web-developers
- Basically, most text editors out there allow you to store and re-use commonly used code chunks, called “snippets”.
- 🔗 [Cheat Sheet](https://docs.emmet.io/cheat-sheet/)

### 🔥 **[Excercise]** My BookList

- 🔗[booklist.html](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/booklist.html)
- 🔗[booklist.css](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/css/booklist.css)
- 🔗[booklist.js](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/js/booklist.js)

### 🔥 **[Excercise]** User List

- The `preventDefault()` method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
- For example, this can be useful when:
  - Clicking on a "Submit" button, prevent it from submitting a form
  - Clicking on a link, prevent the link from following the URL
- 🔗[ex-1.html](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/ex-1.html)
- 🔗[ex-1.css](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/css/ex-1.css)
- 🔗[ex-1.js](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/js/ex-1.js)

### 🔥 **[Excercise]** Notification

- 🔗[ex-2.html](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/ex-2.html)
- 🔗[ex-2.css](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/css/ex-2.css)
- 🔗[ex-2.js](https://github.com/Jeehay28/HTML-CSS-Source-Code/blob/main/js/ex-2.js)

## 👏
