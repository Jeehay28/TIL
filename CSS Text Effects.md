# Text Effects
### Property
- `text-overflow` specifies how overflowed content that is not displayed should be signaled to the user
```
<style>
……
.toverflow1 {
white-space: nowrap;
}
.toverflow2 {
overflow: hidden;
white-space: nowrap;
}
.toverflow3 {
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
}
</style>

```
```
<p>white-space란
텍스트의 ‘공백’을 어떻게 처리할 것인지 지정합니다. </p>
<p class=”toverflow1">white-space란
텍스트의 ‘공백’을 어떻게 처리할 것인지 지정합니다.</p>
<p class=”toverflow2">white-space란
텍스트의 ‘공백’을 어떻게 처리할 것인지 지정합니다.</p>
<p class=”toverflow3">white-space란
텍스트의 ‘공백’을 어떻게 처리할 것인지 지정합니다.</p>
```

![overflow](https://user-images.githubusercontent.com/106166065/191488981-18208abe-0c76-47d7-a1b9-a6b6ca505152.JPG)

