# Responsive Web Design - Media Queries

### Media Queries

- a CSS technique introduced in CSS3
- uses the `@media` rule to include a block of CSS properties only if a certain condition is true
- 🔗 [A collection of inspirational websites using media queries and responsive web design](https://mediaqueri.es/)
- 🔗 [Devices Viewport Size](https://yesviz.com/devices.php)
- 🔗 [W3C: Media Queries Level 4](https://www.w3.org/TR/mediaqueries-4/)

#### Media Query Syntax

- consists of a media type and can contain one or more expressions, which resolve to either true or false

```
@media not|only mediatype and (expressions) {
  CSS-Code;
}
```

```
<link rel="stylesheet" media="mediatype and|not|only (expressions)" href="print.css">
```

#### CSS3 Media Types

- `all` used for all media type devices
- `print` used for printers
- `screen` used for computer screens, tablets, smart-phones etc.
- `speech` used for screenreaders that "reads" the page out loud

#### Media Queries Simple Examples

```
/* On screens that are 480px or more, set the background color to lightgreen */
@media screen and (min-width: 480px) {
  body {
    background-color: lightgreen;
  }
}
```

### CSS Media Queries - Examples

```
/* Set the background color of body to tan */
body {
  background-color: tan;
}

/* On screens that are 992px or less, set the background color to blue */
@media screen and (max-width: 992px) {
  body {
    background-color: blue;
  }
}

/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 600px) {
  body {
    background-color: olive;
  }
}
```

#### Orientation: Portrait / Landscape

```
@media only screen and (orientation: landscape) {
  body {
    background-color: lightblue;
  }
}
```

####

```
/* When the width is between 600px and 900px OR above 1100px - change the appearance of <div> */
@media screen and (max-width: 900px) and (min-width: 600px), (min-width: 1100px) {
  div.example {
    font-size: 50px;
    padding: 50px;
    border: 8px solid black;
    background: yellow;
  }
}
```
