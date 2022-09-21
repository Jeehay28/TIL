# CSS Fonts
### Google Webfont
- a library of 1,451 open source font families and APIs for convenient use via CSS and Android
- https://fonts.google.com/


```
<style>
   <style>
    @import url('https://fonts.googleapis.com/css2?family=Kalam&display=swap');
        
    .heading1 {
      font-family: 'Kalam', cursive;
      text-shadow: 2px 5px #000;
    }
</style>
    
```

### Font Awesome
- a font and icon toolkit based on CSS and Less
- https://fontawesome.com/


### Font Awesome CDN(Content Delivery Network) 
- https://cdnjs.com/libraries/font-awesome
- CDN : a global network that caches static content (e.g., images, CSS, and videos) for a website around the world

```
<head>
  <title>Font Awesome!</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" 
  integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" 
  crossorigin="anonymous" referrerpolicy="no-referrer">


</head>

<body>
<p>
<i class="fa-brands fa-instagram"></i>
</p>

</body>
```

### Font Awesome Stacking Icons
![icon stacking](https://user-images.githubusercontent.com/106166065/191481793-38e61768-566f-4dcc-a11f-727b87ee7f2f.JPG)


```
  <i class="fa-regular fa-circle fa-2x"></i>
  <span class="fa-stack" style="vertical-align: top;">
    <i class="fa-regular fa-circle fa-stack-2x"></i>
    <i class="fa-solid fa-flag fa-stack-1x"></i>
  </span>
  <span class="fa-stack" style="vertical-align: top;">
    <i class="fa-solid fa-circle fa-stack-2x"></i>
    <i class="fa-solid fa-flag fa-stack-1x fa-inverse"></i>
  </span>
  <i class="fa-regular fa-circle fa-2x"></i>  
```

