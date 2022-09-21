# CSS Lists

### Property
- `list-style-type` specifies the type of list item marker
```
ul.a {
  list-style-type: circle;
}

ul.b {
  list-style-type: square;
}

ol.c {
  list-style-type: upper-roman;
}

ol.d {
  list-style-type: lower-alpha;
}
```
- `list-style-type:none` used to remove the markers/bullets
```
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
```
- `list-style` a shorthand property, used to set all the list properties in one declaration
```
ul {
  list-style: square inside url("sqpurple.gif");
}
```
