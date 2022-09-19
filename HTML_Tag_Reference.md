# HTML Tag Reference

 ### HTML Headings
 - `<html>`	defines the root of an HTML document
 - `<body>`	defines the document's body
 - `<h1>` to `<h6>`	defines HTML headings

### HTML Paragraphs
 - `<p>`	defines a paragraph
 - `<hr>`	defines a thematic change in the content
 - `<br>`	inserts a single line break
 - `<pre>`	defines pre-formatted text

### HTML Quotation and Citation Elements
 - `<address>`	defines contact information for the author/owner of a document
 - `<blockquote>`	defines a section that is quoted from another source
 - `<cite>`	defines the title of a work
 - `<q>`	defines a short inline quotation

### HTML Block and Inline Elements
- `<div>`	defines a section in a document (block-level)
- `<span>` defines a section in a document (inline)

### HTML Multimedia Tags
- `<iframe>`	defines an inline frame
- `<video>`	defines a video or movie
`<video src="medias/salad.mp4" width="700" controls poster="images/salad.jpg"></video>`
- `<audio>`	defines sound content
`<audio src="medias/spring.mp3" controls></audio>`
- `<img>`	defines an image
`<img src="images/salad.jpg" alt="salad" width="50%">`
- `<picture>`	defines a container for multiple image resources
- `<source>`	defines multiple media resources for media elements (`<video>` and `<audio>`)
- `<embed>`	defines a container for an external application
`<embed src="medias/flight.mp4" width="400" height="300">`
- `<object>`	defines a container for an external application
`<object data="medias\product.pdf" width="900" height="800"></object>`
- `<a>`	defines a hyperlink
`<a href="https://html.spec.whatwg.org" target="_blank"></a>`
`<a id="top"></a>
<a href="#top">Top</a>`


### HTML Forms Tags
- `<form>`	defines an HTML form for user input
- `<fieldset>`	groups related elements in a form
- `<input>`	defines an input control
`<input type=＂text“ value=“abcd” size=“6” maxlength=“10” >`
`<input type="search" id="searchBox">`
`<input type="email" id="user-email">`
`<input type="tel" id="user-phone">`
`<input type="color" value="#ff0000">`
`<input type="number" id="prod-num" min=“1" max="100" step="1">`
`<input type="range" id="volume" min=“0" max="100" step="1">`
`<input type="date" id="delivery">`
`<input type="month">`
`<input type="week">`
`<input type ="time">`
`<input type="datetime-local">`
`<input type="radio">`
`<input type="checkbox">`
`<input type="radio" name="subject" id="speaking" value="speaking" checked>`
`<input type="checkbox" name="mailing" id="news" value="news" checked>`
`<input type="file">`
`<input type="submit" value="submit">`
`<input type="reset" value="reset">`
`<input type="text" id="user-id" autofocus>`
`<input type="text" id="user-id" autofocus placeholder="email">`
`<input type="text" id="user-area" value="Korea" readonly>`
`<input type="password" id="user-pwd" required>`

- `<legend`>	defines a caption for a `<fieldset>` element
- `<label>`	defines a label for an `<input>` element
`<label for="user-id">ID</label>
<input type="text" id="user-id">`
- `<button>`	defines a clickable button
`<button type="submit">submit</button>`
`<button type="reset">reset</button>`
- `<textarea>`	defines a multiline input control (text area)
`<textarea id="memo" cols="40" rows="5" placeholder="Leave a comment."></textarea>`
- `<select>`	defines a drop-down list
- `<option>`	defines an option in a drop-down list
- `<datalist>`	specifies a list of pre-defined options for input controls
`<input type="text" id="bodysize" list="size-option" placeholder="Type or select from the menu">`
`<datalist id="size-option">`
`<option value="s">s</option>`


### HTML Style Tags
- `<style>`	defines style information for an HTML document
- `<link>`	defines a link between a document and an external resource 
