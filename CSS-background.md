:date: 28/09/2022

### 🌼 CSS background property
- `background` a shorthand property for:
- `background-color`
- `background-image`
- `background-position`
- `background-size`
- `background-repeat`
- `background-origin`
- `background-clip`
- `background-attachment`


### `background-size` property
- specifies the size of the background images
- syntax: **`auto`**|`length`|**`cover`**|**`contain`**|`initial`|`inherit`;

```
<style>
    .box {
      width: 400px;
      height: 200px;
      margin: 20px; 
      border: 2px solid #ccc;
      float: left;
      font-size: 20px;
      text-align: center;
      line-height: 200px;
      background-image: url('images/bg-5.jpg'); 
      background-repeat: no-repeat;
      background-position: left center;
    }
    #size-1 {background-size: auto;}
    #size-2 {background-size: 50% 50%;}
    #size-3 {background-size: 70%;}
    /* 70% of div element */
    #size-4 {background-size: 200%;}
    #size-5 {background-size:contain;}
    #size-6 {background-size:cover;}
  </style>
```




