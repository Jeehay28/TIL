### π 26/10/2022 (π Ch.24)

### API

- π [mdn web docs](https://developer.mozilla.org/ko/docs/Web/API)

### A Web API is a developer's dream.

- It can extend the functionality of the browser
- It can greatly simplify complex functions
- It can provide easy syntax to complex code

### What is Web API?

- API stands for Application Programming Interface.
- A Web API is an application programming interface for the Web.
- A Browser API can extend the functionality of a web browser.
- A Server API can extend the functionality of a web server.

### Browser APIs

- All browsers have a set of built-in Web APIs to support complex operations, and to help accessing data.
- For example, the Geolocation API can return the coordinates of where the browser is located.

### μΉ μ€ν λ¦¬μ§

- μΈμ μ€ν λ¦¬μ§
- λ‘μ»¬ μ€ν λ¦¬μ§

### μ€ν λ¦¬μ§ κ°μ²΄

```
localStorage
localStorage.key(2)
// 'FAVORITE_SERVICES_META'
localStorage.getItem(localStorage.key(0))
// 'a2a14322-6a7e-4544-a644-074f1cb29c79'
```

```
sessionStorage.setItem(1, "μλνμΈμ?")
// Application > Session Storage
// IsThisFirstTime_Log_From_LiveServer	true
// 1	μλνμΈμ?

localStorage.setItem(2, "good morning"");
// Local Storage
// 2	good morning


```

`sessionStorage.setItem(1)`
`localStorage.setItem(1)`

`sessionStorage.removeItem(key)`
`locaStorage.removeItem(key)`

`sessionStorage.clear();
localStorage.clear();

ν¨μ(methods)
ο key(n) : nλ²μ§Έ ν€μ μ΄λ¦ λ°ν
ο getItem(key) : μ£Όμ΄μ§ ν€μ ν΄λΉνλ νμ¬ κ° λ°ν
ο setItem(key, value) : μ£Όμ΄μ§ ν€μ ν€/κ° μμ΄ μλμ§ νμΈ
νκ³  μλ€λ©΄ ν΄λΉ ν€μ κ°(value) μ μ₯. κ°μ΄ μλ€λ©΄ μμ 
ο removeItem(key) : μ£Όμ΄μ§ ν€μ κ° μ­μ 
ο clear() : λͺ¨λ  ν€/κ° μ μ­μ 

μ μ₯ν  λ : λ°°μ΄ -> λ¬Έμμ΄ JSON.stringify( )
κ°μ Έμ¬ λ : λ¬Έμμ΄ -> μ€ν λ¦¬μ§ JSON.parse( )

```
let colors = ["red", "green", "blue", "white", "black"]
localStorage.setItem("mycolor", JSON.stringify(colors))
```

```
let colors = JSON.parse(localStorage.getItem("mycolor"))
colors
// (5)Β ['red', 'green', 'blue', 'white', 'black']`

localStorage.clear()
```

### π₯ **[Excercise]** todo list

- π [todo.html]()
- π [todo.css]()
- π [todo.js]()

### μ§μ€λ‘μΌμ΄μ API

JavaScript Window Navigator

### π₯ **[Excercise]** todo list

- π [geo.html]()
- π [geo.js]()

λͺ¨λ°μΌμμ νμΈ

- π [geo-2.html]()
- π [geo-2.js]()

[](https://www.pirateslovedaisies.com/)
[](https://www.pirateslovedaisies.com/)

### μΊλ²μ€

μ‘°μ μ 

- π [Siiiimple BΓ©zier Curve Animation Simulator](https://ytyt.github.io/siiiimple-bezier/)

(https://d3js.org/)

(https://dmitrybaranovskiy.github.io/raphael/)

(https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

PHASER
[TensorFlow](https://www.tensorflow.org/js?hl=ko)

μ½λ©μ±λ¦°μ§

- π [μ½λ©μ±λ¦°μ§](https://www.youtube.com/watch?v=dtKciwk_si4)

- π [](https://www.youtube.com/watch?v=8GPPJpiLqHk)

### π 27/10/2022 (π Ch.25)

- μΊλ²μ€ λ΄μ© μ λ¦¬ νμ
