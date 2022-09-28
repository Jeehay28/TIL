### :maple_leaf: CSS Selectors
- used to "find" (or select) the HTML elements you want to style


### :leaves: CSS element Selector
- selects HTML elements based on the element name
```
p {
  text-align: center;
  color: red;
}
```

### :sun_with_face: CSS id Selector
- uses the id attribute of an HTML element to select a specific element
```
#para1 {
  text-align: center;
  color: red;
}
```


### :hibiscus: CSS Class Selector
- selects HTML elements with a specific class attribute
```
.center {
  text-align: center;
  color: red;
}

p.center {
  text-align: center;
  color: red;
}
```


### :sunflower: CSS Universal Selector (*)
- selects all HTML elements on the page
```
* {
  text-align: center;
  color: blue;
}
```

### :herb: CSS Grouping Selector
- selects all the HTML elements with the same style definitions
```
h1 {
  text-align: center;
  color: red;
}

h2 {
  text-align: center;
  color: red;
}

p {
  text-align: center;
  color: red;
}
```


### :cherry_blossom: CSS Simple Selectors
![simple selector](https://user-images.githubusercontent.com/106166065/192697780-6867fcb5-b9ff-4f9c-b64b-8c97c3715735.PNG)


### :mushroom: CSS Combinators

```
<style>
li { padding:6px; }
#container > ul { border:1px solid blue; }
h2 ~ p { font-style: italic; }
h2 + p {
color: red;
}
</style>
```

#### :four_leaf_clover: four different combinators in CSS: 
- descendant selector (space): matches all elements that are descendants of a specified element
```
div p {
  background-color: yellow;
}
```

- child selector (>): selects all elements that are the children of a specified element
```
div > p {
  background-color: yellow;
}
```

- adjacent sibling selector (+): used to select an element that is directly after another specific element
```
div + p {
  background-color: yellow;
}
```

- general sibling selector (~): selects all elements that are next siblings of a specified element

```
div ~ p {
  background-color: yellow;
}
```

### :cactus: CSS Attribute Selectors
![CSS selector](https://user-images.githubusercontent.com/106166065/192715956-cd3a6a32-9718-44fc-88a3-88e295fdf191.PNG)



#### CSS [attribute] Selector
- used to select elements with a specified attribute
```
a[target] {
  background-color: yellow;
}
```

#### CSS [attribute="value"] Selector
- used to select elements with a specified attribute and value
```
a[target="_blank"] {
  background-color: yellow;
}
```

#### CSS [attribute~="value"] Selector
- used to select elements with an attribute value containing a specified word
```
[title~="flower"] {
  border: 5px solid yellow;
}
```


#### CSS [attribute|="value"] Selector
- used to select elements with the specified attribute, whose value can be exactly the specified value, or the specified value followed by a hyphen (-)
```
[class|="top"] {
  background: yellow;
}
```

#### CSS [attribute^="value"] Selector
- used to select elements with the specified attribute, whose value starts with the specified value
```
[class^="top"] {
  background: yellow;
}
```

#### CSS [attribute$="value"] Selector
- used to select elements whose attribute value ends with a specified value
```
[class$="test"] {
  background: yellow;
}
```


#### CSS [attribute*="value"] Selector
- used to select elements whose attribute value contains a specified value
```
[class*="te"] {
  background: yellow;
}
```


### Styling Forms
```
input[type="text"] {
  width: 150px;
  display: block;
  margin-bottom: 10px;
  background-color: yellow;
}

input[type="button"] {
  width: 120px;
  margin-left: 35px;
  display: block;
}
```

### CSS Pseudo-classes
- used to define a special state of an element
- syntax:
```
selector:pseudo-class {
  property: value;
}
```

- anchor pseudo-classes
```
/* unvisited link */
a:link {
  color: #FF0000;
}

/* visited link */
a:visited {
  color: #00FF00;
}

/* mouse over link */
a:hover {
  color: #FF00FF;
}

/* selected link */
a:active {
  color: #0000FF;
}
```
