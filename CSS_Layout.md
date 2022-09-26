### block-level elements in HTML:
`<address>` `<article>` **`<aside>`** **`<blockquote>`** `<canvas>` **`<dd>`** **`<div>`** **`<dl>`** **`<dt>`** **`<fieldset>`** **`<figcaption>`** **`<figure>`** **`<footer>`** **`<form>`** **`<h1>-<h6>`** **`<header>`** **`<hr>`** 
**`<li>`** **`<main>`** `<nav>` `<noscript>` **`<ol>`** **`<p>`** **`<pre>`** **`<section>`** **`<table>`** `<tfoot>` **`<ul>`** **`<video>`**


### inline elements in HTML:
**`<a>`** `<abbr>` `<acronym>` **`<b>`** `<bdo>` `<big>` **`<br>`** **`<button>`** **`<cite>`** `<code>` `<dfn>` **`<em>`** **`<i>`** **`<img>`** **`<input>`** 
`<kbd>` **`<label>`** `<map>` **`<object>`** `<output>` `<q>` `<samp>` `<script>` `<select>` `<small>` 
**`<span>`** **`<strong>`** `<sub>` `<sup>` **`<textarea>`** **`<time>`** **`<tt>`** `<var>`



# CSS Layout

### Property: `display`
- **`display`** specifies if/how an element is displayed
- `display : none` 
- `display : inline-block` 기본 마진을 가지고 있음
- `display : table`
- `display : table-cell`

#### `display : inline-block` vs `float : left`
- `display : inline-block` 기본 마진을 가지고 있음
- `float : left` 배치하면 가로로 배치될 때 요소에 기본 마진이 없음
- `float : left` 를 사용하면 `clear` 속성으로 플로팅을 해제해야 함


### **`display: table`**
- `display : table` `table-layout: fixed` 
- `display : table-cell` 
- `display : table-cell`: 마진이 적용되지 않음
-  테두리처럼 영역이 보이는 속성은 사용하지 말고 패딩을 좀더 크게 지정해서 요소 간의 여백을 조절함

#### **`display: inline-table`** (block-level → in-line)
- 셀의 너비가 고정되어 편리함

### Property: `visibility`
- **`visibility : hidden`** hides an element

### Property: `float`
- **`float`** used for positioning and formatting content e.g. let an image float left to the text in a container

#### `float` property can have one of the following values:
- `left` - The element floats to the left of its container
- `right` - The element floats to the right of its container
- `none` - The element does not float (will be displayed just where it occurs in the text). This is default.
- `inherit` - The element inherits the float value of its parent  

### Property: `clear` 
`clear` specifies what should happen with the element that is next to a floating element

##### **`clear`** property can have one of the following values:
- `none` - The element is not pushed below left or right floated elements. This is default.
- `left` - The element is pushed below left floated elements
- `right` - The element is pushed below right floated elements
- `both` - The element is pushed below both left and right floated elements
- `inherit` - The element inherits the clear value from its parent

### CSS Layout - Horizontal Align
#### Center Align - Using margin
```
.center {
    margin: auto;
    width: 60%;
    border: 3px solid #73AD21;
    padding: 10px;
}
```

#### Left and Right Align - Using position
```
.right {
    position: absolute;
    right: 0px;
    width: 300px;
    border: 3px solid #73AD21;
    padding: 10px;
}
```

Left and Right Align - Using float
```
.right {
    float: right;
    width: 300px;
    border: 3px solid #73AD21;
    padding: 10px;
}
```


#### 2단/3단 레이아웃 만들기



### Property: `position`
- `position` specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky).
- LRTB: relative, absolute, fixed
- 자연스럽게 연결 : relative
- 특정 위치에 표시 : absolute, fixed


#### 정중앙에 배치
```
<style>
    .container {
      position: relative;
      width: 800px;
      height: 800px;
      border: 1px solid black;
    }

    .box {
      width: 100px;
      height: 100px;
      background-color: red;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  </style>
  ```
  
#### 세로만 중앙 배치
```
position: absolute;
top: 50%;
transform: translateY(-50%);
```

#### 가로만 중앙 배치
```
position: absolute;
left: 50%;
transform: translateX(-50%);
```


### Property: `background-color`


### Property:`background-image` 


### Property:`background-repeat` 
`background-repeat : no-repeat`


```
<style>
body {
background-image:url('images/bg-2.jpg’);
background-repeat: repeat-x;
}
……
</style>
```

```
<style>
body {
background-image: url('images/bg-3.jpg’);
background-repeat: no-repeat;
}
……
</style>
```


### Property: `background-position` 


#### `background-position-x` `background-position-y`
- 새로 생긴 속성


### Property: `background-attachment`
- 배경이미지를 고정할 수 있음

```
body {
background-image:url('images/bg-2.jpg');
background-repeat:no-repeat;
background-position: left top;
background-attachment: fixed;
background-color:#222;
}
```
to make above source short
```
body {
background:url('images/bg-2.jpg’) no-repeat left top fixed #222;
}
```

### 불릿 대신 배경 이미지 사용하기
```
<style>
ul {
list-style:none; /* 불릿 없앰 */
}
li {
background-image:url('images/book-icon.png’); /* 배경 이미지 파일 */
background-repeat:no-repeat; /* 배경 이미지 반복 안함 */
background-position:left center; /* 배경 이미지 위치 */
padding-left:50px; /* 왼쪽 패딩 */
line-height:40px; /* 줄간격 */
}
</style>
```


### Property: `background-origin` 
배경이미지를채울때배경위치시작점을정하는속성

```
.desc {
…….
}
.origin-border {
background-origin: border-box;
}
. origin-padding {
background-origin: padding-box; /* default value */
}

. origin-content {
background-origin: content-box;
}
```


### Property: `background-clip`
배경색을 채울 때 배경을 어디까지 적용할지 지정하는 속성

```
.desc {
…….
}
.clip-border {
background-clip: border-box;
}
.clip-padding {
background-clip: padding-box;
}
.clip-content {
background-clip: content-box;
}
```

### Property: `background-size` 

  
  
  
