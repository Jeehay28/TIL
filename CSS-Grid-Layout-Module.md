### CSS Grid Layout Module

- offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning

#### Grid Elements

- A grid layout consists of a parent element, with one or more child elements.
- All direct children of the grid container automatically become grid items.

```
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
</div>
```

#### Display Property

- An HTML element becomes a grid container when its `display` property is set to `grid` or `inline-grid`.

```
.grid-container {
  display: grid;
}
```

```
.grid-container {
  display: inline-grid;
}
```

#### Grid Gaps

- The spaces between each column/row are called gaps.

##### property

- `column-gap` sets the gap between the columns:

```
.grid-container {
  display: grid;
  column-gap: 50px;
}
```

- `row-gap` sets the gap between the rows:

```
.grid-container {
  display: grid;
  row-gap: 50px;
}
```

- `gap` a shorthand property for the row-gap and the column-gap properties:

```
.grid-container {
  display: grid;
  gap: 50px 100px;
}
```

### Grid Lines

- The lines between columns are called column lines.
- The lines between rows are called row lines.
- Refer to line numbers when placing a grid item in a grid container:

```
/* Place a grid item at column line 1, and let it end on column line 3: */
.item1 {
  grid-column-start: 1;
  grid-column-end: 3;
}
```

```
/* Place a grid item at row line 1, and let it end on row line 3: */
.item1 {
  grid-row-start: 1;
  grid-row-end: 3;
}
```

### CSS Grid Container

- Grid containers consist of grid items, placed inside columns and rows.

#### `grid-template-columns` property

- defines the number of columns in your grid layout, and it can define the width of each column

```
/* Make a grid with 4 columns: */
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
}
```

```
.grid-container {
  display: grid;
  grid-template-columns: 80px 200px auto 40px;
}
```

#### `grid-template-rows`property

- defines the height of each row

```
.grid-container {
  display: grid;
  grid-template-rows: 80px 200px;
}
```

#### `grid-column` property

- defines on which column(s) to place an item
- a shorthand property for the `grid-column-start` and the `grid-column-end` properties
- refer to line numbers, or use the keyword "span" to define how many columns the item will span

```
/* Make "item1" start on column 1 and end before column 5: */
.item1 {
  grid-column: 1 / 5;
}
```

```
/* Make "item1" start on column 1 and span 3 columns: */
.item1 {
  grid-column: 1 / span 3;
}
```

```
/* Make "item2" start on column 2 and span 3 columns: */
.item2 {
  grid-column: 2 / span 3;
}
```

#### `grid-row` property

- defines on which row to place an item
- a shorthand property for the `grid-row-start` and the `grid-row-end` properties
- To place an item, you can refer to line numbers, or use the keyword "span" to define how many rows the item will span:

```
/* Make "item1" start on row-line 1 and end on row-line 4: */
.item1 {
  grid-row: 1 / 4;
}
```

```
/* Make "item1" start on row 1 and span 2 rows: */
.item1 {
  grid-row: 1 / span 2;
}
```

#### `grid-area` property

- a shorthand property for the `grid-row-start`, `grid-column-start`, `grid-row-end` and the `grid-column-end` properties

```
/* Make "item8" start on row-line 1 and column-line 2, and end on row-line 5 and column line 6: */
.item8 {
  grid-area: 1 / 2 / 5 / 6;
}
```

```
/* Make "item8" start on row-line 2 and column-line 1, and span 2 rows and 3 columns: */
.item8 {
  grid-area: 2 / 1 / span 2 / span 3;
}
```

#### `grid-area` property

- used to assign names to grid items
- Named grid items can be referred to by the `grid-template-areas` property of the grid container.
- A period sign represents a grid item with no name.

```
.item1 {
  grid-area: box1;
}
.item2 {
  grid-area: box2;
}
.item3 {
  grid-area: box3;
}
.grid-container {
 grid-template-areas:
        "box1 box1 box1"
        "box2 box3 box3"
        "box2 . box4";
}
```

```
/* Item1 gets the name "myArea" and spans all five columns in a five columns grid layout: */
.item1 {
  grid-area: myArea;
}
.grid-container {
  grid-template-areas: 'myArea myArea myArea myArea myArea';
}
```

```
/* Let "myArea" span two columns in a five columns grid layout (period signs represent items with no name): */
.item1 {
  grid-area: myArea;
}
.grid-container {
  grid-template-areas: 'myArea myArea . . .';
}
```

```
/* Make "item1" span two columns and two rows: */
.grid-container {
  grid-template-areas: 'myArea myArea . . .' 'myArea myArea . . .';
}
```
