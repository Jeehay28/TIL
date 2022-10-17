### 📅 17/10/2022

## JavaScript HTML DOM (Document Object Model)

### What is the DOM?

- The DOM is a W3C (World Wide Web Consortium) standard.
- The DOM defines a standard for accessing documents:
- "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."
- 🔗 [DOM](https://dom.spec.whatwg.org/)

### What is the HTML DOM?

- The HTML DOM is a standard object model and programming interface for HTML. It defines:
  - The HTML elements as objects
  - The properties of all HTML elements
  - The methods to access all HTML elements
  - The events for all HTML elements
- **In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.**

### JavaScript - HTML DOM Methods

- HTML DOM methods are **actions** you can perform (on HTML Elements).
- HTML DOM properties are **values** (of HTML Elements) that you can set or change.

```
document.querySelector("div#detail > p").style.visibility="hidden"
```

```
document.querySelector("div#detail > p").style.visibility="visible"
'visible'
```

### JavaScript HTML DOM Document

- The document object represents your web page.
- If you want to access any element in an HTML page, you always start with accessing the document object.
- Below are some examples of how you can use the document object to access and manipulate HTML.

### Finding HTML Elements

- `document.getElementById(id)` method

```
> document.getElementById("heading")
  <h1 id=​"heading">​에디오피아 게뎁​</h1>​

> document.getElementsByTagName("h1")
  HTMLCollection [h1#heading, heading: h1#heading]
```

- `document.getElementsByClassName(name)` method

```
> document.getElementsByClassName("bright")
HTMLCollection(2) [h2.bright, p.bright]
0:h2.bright
1:p.bright
length:2
[[Prototype]]:HTMLCollection

> document.getElementsByClassName("bright")[0]
  <h2 class="bright">Information</h2>
```

- `document.getElementsByTagName(name)` method

```
> document.getElementsByTagName("h2")
HTMLCollection(2) [h2.bright, h2]
0:h2.bright
1:h2
length:2
[[Prototype]]:HTMLCollection

> document.getElementsByTagName("h2")[0]
  <h2 class="bright">Information</h2>
```

### Changing HTML Elements

- `element.innerHTML = new html content` property
- `element.attribute = new value` property
- `element.style.property = new style` property
- `element.setAttribute(attribute, value)` method

### Adding Events Handlers

- `document.getElementById(id).onclick = function(){code}`

### HTML DOM Document querySelector()

- The `querySelector()` method returns the first element that matches a CSS selector.
  To return all matches (not only the first), use the `querySelectorAll()` instead.
  Both `querySelector()` and `querySelectorAll()` throw a SYNTAX_ERR exception if the selector(s) is invalid.
- `querySelector`

```
document.querySelector("#heading")
<h1 id=​"heading">​에디오피아 게뎁​</h1>​

document.querySelector(".bright")
<h2 class="bright">Information</h2>
```

- `querySelectorAll`

```
document.querySelectorAll(".bright")
    NodeList(2) [h2.bright, p.bright]
    0: h2.bright
    1: p.bright
    length: 2
    [[Prototype]]: NodeList
```

```
document.querySelector("#prod-img > img")
<img src="images/coffee-pink.jpg" alt="에디오피아 게뎁">
```

### HTML DOM Element innerText

- The `innerText` property sets or returns the text content of an element.

```
document.querySelector("#heading").innerText
'에디오피아 게뎁'

ocument.querySelector("#heading").innerText="커피향이 좋은 가을 오후"
'커피향이 좋은 가을 오후'
```

### HTML DOM Element innerHTML

- The `innerHTML` property sets or returns the HTML content (inner HTML) of an element.

```
document.querySelector("#heading").innerHTML="<i>커피 향이 좋은 가을 오후</i>"
'<i>커피 향이 좋은 가을 오후</i>'
```

```
document.querySelector(".bright")
document.querySelectorAll(".bright")[0]
document.querySelectorAll("h2")[0]
document.querySelector("h2")
```

### HTML DOM Element getAttribute()

- The `getAttribute()` method returns the value of an element's attribute.

### HTML DOM Element setAttribute()

- The `setAttribute()` method sets a new value to an attribute.
- If the attribute does not exist, it is created first.

```
> const coffeeImage = document.querySelector("#prod-img > img")

> coffeeImage.getAttribute("src")
'images/coffee-pink.jpg'

> coffeeImage.setAttribute("src", "images/coffee-blue.jpg")
```

```
> coffeeImage.src = "images/coffee-pink.jpg"
'images/coffee-pink.jpg'
```

```
const title = document.querySelector("#title");
const pfImage = document.querySelector("#profile > img");
const userName = document.querySelector("#desc > p");
// const userName = document.querySelector("user");

// title.onclick = function() {
//     title.innerText = "프로필"
// }

title.onclick = () => title.innerText = "프로필";

// pfImage.onclick = function() {
//     // pfImage.setAttribute("src", "images/pf2.png");
//     pfImage.src = "images/pf2.png";
// }

pfImage.onclick = () => pfImage.src = "images/pf2.png";

// userName.onclick = function() {
//     userName.innerHTML = "이름 : <b>박지혜</b>";
// }

userName.onclick = () => userName.innerHTML = "이름 : <b>박지혜</b>";
```

### HTML DOM Style Object

- The Style object can be accessed from the head section of the document, or from specific HTML element(s).

```
const title = document.querySelector("#title");

title.onclick = () => {
    title.style.backgroundColor = "yellow";
    title.style.color = "blue";
}
```

```
document.querySelector("#desc > p").classList
DOMTokenList ['user', value: 'user']
0: "user"
length: 1
value: "user"
[[Prototype]]: DOMTokenList
```

```
const title = document.querySelector("#title");
const userName = document.querySelector("#desc > p");
const tel = document.querySelectorAll(".user")[2];

title.onclick = () => {
    title.style.backgroundColor = "yellow";
    title.style.color = "blue";
}

userName.onclick = () => {
    userName.style.color = "red";
}

tel.onclick = () => {
    tel.style.fontStyle = "italic";
    tel.style.color = "grey";
}
```

### HTML DOM Element classList

- The `classList` property returns the CSS classnames of an element.
- The `classList` property returns a DOMTokenList.

### Select Object Methods

- The `add()` method is used to add an option to a drop-down list.
- The `remove()` method is used to remove an option from a drop-down list.

```
const title = document.querySelector("#title");

title.onclick = () => {
    title.classList.add("clicked");
}

console.log(title.contains("clicked"));
```

### HTML DOM Element `contains()`

- The `contains()` method returns true if a node is a descendant of a node.
- The `contains()` method returns false if not.

```
//Toggle effect
const title = document.querySelector("#title");

title.onclick = () => {
    if (!title.classList.contains("clicked")) {
        title.classList.add("clicked");
    } else {
        title.classList.remove("clicked");
    }
}
```

### HTML DOMTokenList `toggle()`

```
const title = document.querySelector("#title");

title.onclick = () => {
    title.classList.toggle("clicked");
}
```

### 🔥 **[Excercise]** Toggle Dark/Light Mode

```
const button = document.querySelector("#toggle-box > button");

button.onclick = () => {
    document.body.classList.toggle("dark");

    if (!document.body.classList.contains("dark")) {
        button.innerText = Dark-mode";
    } else {
        button.innerText = "light-mode";
    }
}
```

```
const view = document.querySelector("#view");
const detail = document.querySelector("#detail");

view.onclick = () => {
    detail.classList.toggle("hidden");
}

```

### HTML DOM Form Object

```
document.querySelector("#order-name").value
```

### Access form elements by HTML id or name attribute

```
document.order.product.value
```

```
> document.forms
0: form
order: form
length: 1
[[Prototype]]: HTMLCollection
```

```
> document.forms[0].elements
> document.forms[0].elements[4].value
```

```
document.querySelector("#user-id").value
```

```
> document.querySelector("#major").options.selectedIndex
> document.querySelector("#major").options[document.querySelector("#major").options.selectedIndex].innerText
```

```
const selectedMenu = document.querySelector("#major");
function displaySelect() {
    let selectedText = selectedMenu.options[selectedMenu.selectedIndex].innerText;
    alert(`[${selectedText}]를 선택했습니다.`)
}
selectedMenu.onchange = displaySelect;
```

```
const selectedMenu = document.querySelector("#major");
selectedMenu.onchange = () => {
    let selectedText = selectedMenu.options[selectedMenu.selectedIndex].innerText;
    alert(`[${selectedText}]를 선택했습니다.`)
}
```

### Access value of selected radio button

```
> document.querySelector("form").subject

RadioNodeList(3) [input, input, input, value: 'writing']
```

### Access value of selected checked box

```
> document.querySelectorAll("input[name='mailing']:checked")

NodeList(2) [input#dialog, input#pops]
0: input#dialog
1: input#pops
length: 2
[[Prototype]]: NodeList
```

### JavaScript HTML DOM EventListener

- to be continued on Oct 19
