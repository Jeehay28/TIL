### 📅 26/10/2022 (📚 Ch.24)

### API

- 🔗 [mdn web docs](https://developer.mozilla.org/ko/docs/Web/API)

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

### 웹 스토리지

- 세션 스토리지
- 로컬 스토리지

### 스토리지 객체

```
localStorage
localStorage.key(2)
// 'FAVORITE_SERVICES_META'
localStorage.getItem(localStorage.key(0))
// 'a2a14322-6a7e-4544-a644-074f1cb29c79'
```

```
sessionStorage.setItem(1, "안녕하세요?")
// Application > Session Storage
// IsThisFirstTime_Log_From_LiveServer	true
// 1	안녕하세요?

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

함수(methods)
 key(n) : n번째 키의 이름 반환
 getItem(key) : 주어진 키에 해당하는 현재 값 반환
 setItem(key, value) : 주어진 키에 키/값 쌍이 있는지 확인
하고 없다면 해당 키에 값(value) 저장. 값이 있다면 수정
 removeItem(key) : 주어진 키의 값 삭제
 clear() : 모든 키/값 쌍 삭제

저장할 때 : 배열 -> 문자열 JSON.stringify( )
가져올 때 : 문자열 -> 스토리지 JSON.parse( )

```
let colors = ["red", "green", "blue", "white", "black"]
localStorage.setItem("mycolor", JSON.stringify(colors))
```

```
let colors = JSON.parse(localStorage.getItem("mycolor"))
colors
// (5) ['red', 'green', 'blue', 'white', 'black']`

localStorage.clear()
```

### 🔥 **[Excercise]** todo list

- 🔗 [todo.html]()
- 🔗 [todo.css]()
- 🔗 [todo.js]()

### 지오로케이션 API

JavaScript Window Navigator

### 🔥 **[Excercise]** todo list

- 🔗 [geo.html]()
- 🔗 [geo.js]()

모바일에서 확인

- 🔗 [geo-2.html]()
- 🔗 [geo-2.js]()

[](https://www.pirateslovedaisies.com/)
[](https://www.pirateslovedaisies.com/)

### 캔버스

조절점

- 🔗 [Siiiimple Bézier Curve Animation Simulator](https://ytyt.github.io/siiiimple-bezier/)

(https://d3js.org/)

(https://dmitrybaranovskiy.github.io/raphael/)

(https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

PHASER
[TensorFlow](https://www.tensorflow.org/js?hl=ko)

코딩챌린지

- 🔗 [코딩챌린지](https://www.youtube.com/watch?v=dtKciwk_si4)

- 🔗 [](https://www.youtube.com/watch?v=8GPPJpiLqHk)

### 📅 27/10/2022 (📚 Ch.25)

- 캔버스 내용 정리 필요
