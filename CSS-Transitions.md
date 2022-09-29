:date: 29/09/2022

### :smiley: CSS Transitions
- `transition` a shorthand property for setting the four transition properties into a single property
- `transition-duration` specifies how many seconds or milliseconds a transition effect takes to complete
- `transition-property` specifies the name of the CSS property the transition effect is for
```
div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s;
}
```
```
div:hover {
  width: 300px;
}
```
```
div {
  transition: width 2s, height 4s;
}
```
- `transition-timing-function` specifies the speed curve of the transition effect
  - `ease` specifies a transition effect with a slow start, then fast, then end slowly (this is default)
  - `linear` specifies a transition effect with the same speed from start to end
  - `ease-in` specifies a transition effect with a slow start
  - `ease-out` specifies a transition effect with a slow end
  - `ease-in-out` specifies a transition effect with a slow start and end
  - `cubic-bezier(n,n,n,n)` lets you define your own values in a cubic-bezier function

```
#div1 {transition-timing-function: linear;}
#div2 {transition-timing-function: ease;}
#div3 {transition-timing-function: ease-in;}
#div4 {transition-timing-function: ease-out;}
#div5 {transition-timing-function: ease-in-out;}
```
- `transition-delay` specifies a delay (in seconds) for the transition effect
```
div {
  transition-delay: 1s;
}
```

