:date: 29/09/2022

### :paperclip: CSS 2D Transforms
With the **CSS transform property** you can use the following 2D transformation methods:
- :star: `translate()` method **moves an element from its current position (according to the parameters given for the X-axis and the Y-axis)**.
```
#movex:hover {
transform: translateX(50px);
}
#movey:hover {
transform: translateY(20px);
}
#movexy:hover {
transform: translate(10px, 20px);
}
```

- :star: `rotate()` method **rotates an element clockwise or counter-clockwise according to a given degree.** 
1 Degree = π/180 Radians

```
div {
  transform: rotate(20deg);
}
div {
  transform: rotate(-20deg);
}
```

- :star: `scaleX()` `scaleY()` `scale()` 
method **increases or decreases the size of an element** 
(according to the parameters given for the width and height).
```
#scalex:hover {
transform: scaleX(2);
}
#scaley:hover {
transform: scaleY(1.5);
}
#scale:hover {
transform: scale(0.7, 0.7);
}
```

- :star: `skewX()` `skewY()` `skew()` 
- method **skews an element** (along the X or/and Y-axis by the given angles)
```
div {
  transform: skew(20deg, 10deg);
}

div {
  transform: skewX(20deg);
}

div {
  transform: skewY(20deg);
}
```

- :star: `matrix()`
method **combines all the 2D transform methods into one**.
```
div {
  transform: matrix(1, -0.3, 0, 1, 0, 0);
}
```
