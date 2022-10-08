### JavaScript Introduction

#### Inline JavaScript

- JavaScript code that is embedded with an HTML document

```
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv='Content-Type' content='text/html; charset=utf-8'/>
  <title>Use inline javascript</title>

  <script type="text/javascript">

    function definedInline() {
      alert('This function was defined inline');
    }

  </script>
</head>

<body onLoad='definedInline()'>
</body>

</html>
```

#### Internal JavaScript

- JavaScript can be added directly to the HTML file by writing the code inside the `<script>` tag . We can place the `<script>` tag either inside `<head>` or the `<body>` tag according to the need.

```
<body>
    <script>
        alert("Hello");
    </script>
</body>
```

```<script>
    function random(number) {
      return Math.floor(Math.random() * number);
    }

    function bgChange() {
      const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
      document.body.style.backgroundColor = rndCol;
    }

      bgChange();
    </script>
```

#### External Javascript

- a separate file that contains the JavaScript program
- External JavaScript is when the JavaScript Code(script) is written in another file having an extension . js and then we link this file inside the `<head>` or `<body>` tag of our HTML file in which the code is to be added.

```
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv='Content-Type' content='text/html; charset=utf-8'/>
  <title>Use externally defined javascript</title>

  <script type='text/javascript' src='external.js'></script>

</head>
<body onLoad='definedExternally()'>
</body>
</html>
```

```
let user = prompt("What is your name? ");
alert(`Hello, ${user}!`);
```
