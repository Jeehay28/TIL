### 📅 07/11/2022 (📚 Ch.26)

### HTTP Status Messages

### HTTP Request Methods

### JS AJAX
- AJAX = Asynchronous JavaScript And XML.
- AJAX is not a programming language.
- AJAX just uses a combination of:
  - A browser built-in XMLHttpRequest object (to request data from a web server)
JavaScript and HTML DOM (to display or use the data)


### 
- XMLHttpRequest 
- open()
- send()



### open with live server
```
let xhr = new XMLHttpRequest();
xhr.open("GET", "student.json");
xhr.send()
xhr
```
```
XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
onabort: null
onerror: null
onload: null
onloadend: null
onloadstart: null
onprogress: null
onreadystatechange: null
ontimeout: null
readyState: 4response: "{\n  \"name\" : \"도레미\",\n  \"major\" : \"컴퓨터 공학\",\n  \"grade\" : 2\n}"
responseText: "{\n  \"name\" : \"도레미\",\n  \"major\" : \"컴퓨터 공학\",\n  \"grade\" : 2\n}"
responseType: ""
responseURL: "http://127.0.0.1:5500/student.json"
responseXML: null
status: 200
statusText: "OK"
timeout: 0
upload: XMLHttpRequestUpload {onloadstart: null, onprogress: null, onabort: null, onerror: null, onload: null, …}
withCredentials: false
[[Prototype]]: XMLHttpRequest
```

```
let xhr = new XMLHttpRequest();
xhr.open("GET", "student.json");
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let students = JSON.parse(xhr.responseText);
        document.querySelector("#result").innerText = `${students.name} 학생은 ${students.grade}학년입니다.`;
        document.getElementById("result").innerHTML = `
        <h1>${students.name}</h1>
        <ul>
        <li>전공: ${students.major}</li>
        <li>학년: ${students.grade}</li>
        </ul>
        `;
    }
};
```

[JSONPlaceholder](https://jsonplaceholder.typicode.com/)
[dummyJSON](https://dummyjson.com/)



### readyState property
readyState 
state

### response, responseText




