# Text Color and Background Color
### Property
- `color` specifies the color of text
- `background-color`

```
body {
  background-color: lightgrey;
  color: blue;
}
```

# Text Alignment
### Property
- `text-align` used to set the horizontal alignment of a text
```
h1 {
  text-align: center;
}

h2 {
  text-align: left;
}

h3 {
  text-align: right;
}
div {
  text-align: justify;
}
```

# Text Decoration
### Property
- `text-decoration-line` used to add a decoration line to text
```
h1 {
  text-decoration-line: overline;
}

h2 {
  text-decoration-line: line-through;
}

h3 {
  text-decoration-line: underline;
}

p {
  text-decoration-line: overline underline;
}
```

- `text-decoration-color` used to set the color of the decoration line


- `text-decoration-style` used to set the style of the decoration line
- `text-decoration-thickness` used to set the thickness of the decoration line
- `text-decoration` sets all the text-decoration properties in one declaration
```
a {
  text-decoration: none;
}
```

# Text Transformation
### Property
- `text-transform` used to specify uppercase and lowercase letters in a text
```
p.uppercase {
  text-transform: uppercase;
}

p.lowercase {
  text-transform: lowercase;
}

p.capitalize {
  text-transform: capitalize;
}
```



# Text Spacing
### Property
- `letter-spacing` used to specify the space between the characters in a text
```
h1 {
  letter-spacing: 5px;
}

h2 {
  letter-spacing: -2px;
}
```


- `line-height` used to specify the space between lines
```
p {
font-size: 20px;
text-align: justify;
line-height: 2;
}
```

- `word-spacing` used to specify the space between the words in a text
```
p.one {
  word-spacing: 10px;
}

p.two {
  word-spacing: -2px;
}
```
- `white-space` specifies how white-space inside an element is handled
```
<style>
……
.wspace1 {
white-space: nowrap;
}
.wspace2 {
white-space: pre;
}
.wspace3 {
white-space: pre-wrap;
}
.wspace4 {
white-space: pre-line;
}
</style>
```

# Text Shadow
### Property
`text-shadow` specifies the shadow effect added to text

```
h1 {
  text-shadow: 2px 2px 5px red;
}
```

