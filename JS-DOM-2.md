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
