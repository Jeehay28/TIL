# CSS Border Style
### Property
- `border-style` specifies what kind of border to display
### Value
- `dotted` defines a dotted border
- `dashed` defines a dashed border
- `solid` defines a solid border
- `double` defines a double border
- `groove` defines a 3D grooved border. The effect depends on the border-color value
- `ridge` defines a 3D ridged border. The effect depends on the border-color value
- `inset` defines a 3D inset border. The effect depends on the border-color value
- `outset` defines a 3D outset border. The effect depends on the border-color value
- `none` defines no border
- `hidden` defines a hidden border

```
p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;}

```

![보더스타일](https://user-images.githubusercontent.com/106166065/191639627-4a95b01b-6b63-484b-a852-5f36682d45ae.JPG)

- border style with different values: top →right → bottom → left
```
border-style: solid dotted dashed double;
border-style: solid dotted dashed;
border-style: solid dotted;
border-style: solid;

```
![다른값적용](https://user-images.githubusercontent.com/106166065/191641381-a930be1e-c22d-477e-a51c-7f66130485f7.JPG)


# Border Width
### Property
- `border-width` specifies the width of the four borders
```
p.one {
  border-style: solid;
  border-width: 5px;
}

p.two {
  border-style: solid;
  border-width: medium;
}

p.three {
  border-style: dotted;
  border-width: 2px;
}

p.four {
  border-style: dotted;
  border-width: thick;
}
```
![borderwidth](https://user-images.githubusercontent.com/106166065/191642958-22d349e3-a338-4baa-afa5-1e896c854a6b.JPG)






# Border Color
### Property
- `border-color` used to set the color of the four borders
- 
### Set by
- name: specifies a color name, like "red"
- HEX: specifies a HEX value, like "#ff0000"
- RGB: specifies a RGB value, like "rgb(255,0,0)"
- HSL: specifies a HSL value, like "hsl(0, 100%, 50%)"
- transparent

```
p.one {
  border-style: solid;
  border-color: red;
}

p.two {
  border-style: solid;
  border-color: green;
}

p.three {
  border-style: dotted;
  border-color: blue;
}
```


# Rounded Borders
# Property
- `border-radius` used to add rounded borders to an element

```
p {
  border: 2px solid red;
  border-radius: 5px;
}
```

- `border-top-left-radius`
- `border-top-right-radius`
- `border-bottom-left-radius`
- `border-bottom-right-radius`








