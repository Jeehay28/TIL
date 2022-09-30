:date: 30/09/2022

## :art: CSS Animations
#### CSS allows animation of HTML elements without using JavaScript or Flash!
###### An animation lets an element gradually change from one style to another.
###### To use CSS animation, you must first specify some keyframes for the animation.
###### Keyframes hold what styles the element will have at certain times.
- :ribbon: `@keyframes`
```
  /* The animation code */
 @keyframes example {
  0%   {background-color: red;}
  25%  {background-color: yellow;}
  50%  {background-color: blue;}
  100% {background-color: green;}
}

/* The element to apply the animation to */
div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}
```
- :handbag: `animation-name`

- :tophat: `animation-duration`  defines how long an animation should take to complete. If the animation-duration property is not specified, no animation will occur, because the default value is 0s (0 seconds). 

- :tshirt: `animation-delay` specifies a delay for the start of an animation

- :high_heel: `animation-iteration-count` specifies the number of times an animation should run
```
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: 3;
}

/* the value "infinite" used to make the animation continue for ever: */
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}
```

- :dress: `animation-direction` specifies whether an animation should be played forwards, backwards or in alternate cycles
  - `normal` The animation is played as normal (forwards). This is default
  - `reverse` The animation is played in reverse direction (backwards)
  - `alternate` The animation is played forwards first, then backwards
  - `alternate-reverse` The animation is played backwards first, then forwards

```
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-direction: reverse;
}

/*the value "alternate" used to make the animation run forwards first, then backwards:*/
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: 2;
  animation-direction: alternate;
}
```

- :pouch: `animation-timing-function` specifies the speed curve of the animation
  - `ease` specifies an animation with a slow start, then fast, then end slowly (this is default)
  - `linear` specifies an animation with the same speed from start to end
  - `ease-in` specifies an animation with a slow start
  - `ease-out` specifies an animation with a slow end
  - `ease-in-out` specifies an animation with a slow start and end
  - `cubic-bezier(n,n,n,n)` lets you define your own values in a cubic-bezier function
```
#div1 {animation-timing-function: linear;}
#div2 {animation-timing-function: ease;}
#div3 {animation-timing-function: ease-in;}
#div4 {animation-timing-function: ease-out;}
#div5 {animation-timing-function: ease-in-out;}
```

- :boot: `animation-fill-mode`

- :high_heel: `animation`
```
.box {
      width: 100px;
      height: 100px;
      margin: 60px auto;    
      border:1px solid #222;  
      animation: rotate 1.5s infinite, changecolor 1.5s infinite;
    }

    @keyframes changecolor {
      from {
        background-color: red;
      }
      50% {
        background-color: green;
      }
      to {
        background-color: blue;
      }

    }

    @keyframes rotate {
      from {
        transform: perspective(120px) rotateX(0deg) rotateY(0deg);
      }

      50% {
        transform: perspective(120px) rotateX(-180deg) rotateY(0deg);
      }

      to {
        transform: perspective(120px) rotateX(-180deg) rotateY(-180deg);
      }
    }
    ```
    

