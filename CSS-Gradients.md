## CSS defines three types of gradients:

- **Linear Gradients** (goes down/up/left/right/diagonally)
- **Radial Gradients** (defined by their center)
- **Conic Gradients** (rotated around a center point)


### :tulip: 01. CSS Linear Gradients
- `background-image: linear-gradient(direction, color-stop1, color-stop2, ...);`
- direction: top to bottom (this is default)
```
#grad {
  background-image: linear-gradient(red, yellow);
}
```

- direction: left to right

```
#grad {
  background-image: linear-gradient(to right, red , yellow);
}
```

- direction: diagonal
```
#grad {
  background-image: linear-gradient(to bottom right, red, yellow);
}
```

```
.grad {
background: #ffa200;
background: linear-gradient(to left bottom, #f3ff07, #ffa200);
}

<div id="container" class="grad">
<h1>CSS</h1>
</div>
```

- using Angles
`syntax: background-image: linear-gradient(angle, color-stop1, color-stop2);`

```
#grad {
  background-image: linear-gradient(180deg, red, yellow);
}
```

- using multiple color stops
```
#grad {
  background-image: linear-gradient(red, yellow, green);
}
```


### :rose: 02. Radial Gradients
- **By default, shape is ellipse, size is farthest-corner, and position is center.**
- syntax: `background-image: radial-gradient(shape size at position, start-color, ..., last-color);`
- evenly spaced color stops (this is default)
![radialgradient](https://user-images.githubusercontent.com/106166065/192672839-c9b6c38c-0a54-49fd-9c9c-39cde689f2a4.PNG)

```
#grad {
  background-image: radial-gradient(red, yellow, green);
}
```
- differently spaced color stops




- use of different size keywords
`closest-side` 
`farthest-side`
`closest-corner`
`farthest-corner`

- repeating a radial-gradient: used to repeat radial gradients:
```
#grad {
  background-image: repeating-radial-gradient(red, yellow 10%, green 15%);
}
```
![repeating](https://user-images.githubusercontent.com/106166065/192685504-7d8ae9af-1956-41a5-99ff-902af1a2ed1b.PNG)

```
.box {
      width:300px;
      height: 300px;
      padding: 30px;
      border: 10px solid #000;
      border-image: linear-gradient(#f6b73c, #4d9f0c) 30;
    }
 ```
 
 ### CSS Gradient Generator
 - [Gradient Designer Minefield 2.0](https://gradient-designer.csspost.com/)
 - [CSS Gradient](https://cssgradient.io/)


# CSS Functions
- `rgb()` defines colors using the Red-Green-Blue model (RGB)
- `rgba()` defines colors using the Red-Green-Blue-Alpha model (RGBA)
- `translate()` repositions an element in the horizontal and/or vertical directions
- `conic-gradient()` creates a conic gradient
- `linear-gradient()` creates a linear gradient
- `radial-gradient()` creates a radial gradient
