# CSS Box Model
### 

![boxmodel](https://user-images.githubusercontent.com/106166065/191634523-6f3c9b73-a2c5-4e05-90cf-12bd59aeb420.JPG)

- used when talking about design and layout
- content: the content of the box, where text and images appear
- padding: clears an area around the content, the padding is transparent
- border: a border that goes around the padding and content
- margin: clears an area outside the border, the margin is transparent
```
div {
  div {
  width: 320px;
  padding: 10px;
  border: 5px solid gray;
  margin: 0;
}

320px (width)
+ 20px (left + right padding)
+ 10px (left + right border)
+ 0px (left + right margin)
= 350px
```

# CSS Functions
### CSS calc() Function
- performs a calculation to be used as the property value

```
#div1 {
  position: absolute;
  left: 50px;
  width: calc(100% - 100px);
  border: 1px solid black;
  background-color: yellow;
  padding: 5px;
  text-align: center;
}
```
