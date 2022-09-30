# :hearts: CSS Responsive
###### Responsive web design makes your web page look good on all devices.
###### Responsive web design uses only HTML and CSS.
###### Responsive web design is not a program or a JavaScript.
###### :link: [Naver Developers](https://developers.naver.com/main/)
 
![responsive2](https://user-images.githubusercontent.com/106166065/193191930-9619c9f2-b083-448e-b48c-20a5a3a0913f.PNG)

### :dart: Designing For The Best Experience For All Users
- Web pages can be viewed using many different devices: desktops, tablets, and phones. Your web page should look good, and be easy to use, regardless of the device.
- Web pages should not leave out information to fit smaller devices, but rather adapt its content to fit any device:
![alluser](https://user-images.githubusercontent.com/106166065/193194140-9b9bac85-f037-4d76-b42e-4486d09fbeb2.PNG)
- It is called responsive web design when you use CSS and HTML to resize, hide, shrink, enlarge, or move the content to make it look good on any screen.

### 유동형 패턴
![image](https://user-images.githubusercontent.com/106166065/193194798-1f88dd7c-5473-4e61-bc5b-4f778d0ff442.png)

### 칼럼 드롭 패턴
![image](https://user-images.githubusercontent.com/106166065/193194868-0c28bc9d-9660-4f2a-a8eb-161a60665182.png)

### 레이아웃 이동 패턴
![image](https://user-images.githubusercontent.com/106166065/193194916-01dd0828-3ed2-49d4-9c57-36c2125a344a.png)

### 캔버스 밖으로 패턴
![image](https://user-images.githubusercontent.com/106166065/193194976-8c2ef8cf-d827-40cf-8e65-098265e4d842.png)

### :heavy_check_mark: CSS Bootstrap
- a free front-end framework for faster and easier web development. 
- includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels and many other, as well as optional JavaScript plugins.
- :link: [CSS Bootstrap](https://getbootstrap.com/)
- :link: [tailwindcss](https://tailwindcss.com/)

### :purse: Responsive Web Design - The Viewport
- **the user's visible area of a web page**
- varies with the device, and will be smaller on a mobile phone than on a computer screen
- Before tablets and mobile phones, web pages were designed only for computer screens, and it was common for web pages to have a static design and a fixed size.
- Then, when we started surfing the internet using tablets and mobile phones, fixed size web pages were too large to fit the viewport. To fix this, browsers on those devices scaled down the entire web page to fit the screen.
- HTML5 introduced a method to let web designers take control over the viewport, through the <meta> tag.
`<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- `width=device-width` sets the width of the page to follow the screen-width of the device (which will vary depending on the device)
- `initial-scale=1.0` sets the initial zoom level when the page is first loaded by the browser
![image](https://user-images.githubusercontent.com/106166065/193196775-4f6b5fc1-06e9-4c20-9cce-7a1a2d883631.png)

![image](https://user-images.githubusercontent.com/106166065/193196980-89ed2757-90a8-42df-a405-3fc8074f5076.png)

### :hearts: Responsive Web Design - Grid-View
- Many web pages are based on a grid-view, which means that the page is divided into columns:
![image](https://user-images.githubusercontent.com/106166065/193201755-d013cc59-7fb0-4671-b191-5440edb67ec2.png)


```
* {
  box-sizing: border-box;
}
```

- This above makes sure that the **padding and border are included in the total width and height of the elements**.
```
.menu {
  width: 25%;
  float: left;
}
.main {
  width: 75%;
  float: left;
}
```
![image](https://user-images.githubusercontent.com/106166065/193219864-d5e3951d-0b9d-4aff-8a94-d5bca64c53d0.png)

![image](https://user-images.githubusercontent.com/106166065/193219938-c176ffc9-2ad1-416d-9e2d-424c8efa8c8b.png)

![image](https://user-images.githubusercontent.com/106166065/193220066-307bdcbe-d01f-4fbf-a542-1c1050f17359.png)
